export class Window {
	mousePosition = {}
	options = {
		appname:'undefined',
		maximized: false,
		minimized: false,
		resizable:true,
		draggable:true,
		status:true,
		title: 'Neues Fenster',
		icon:'fa-duotone fa-window-flip',
		iconColor:null,
		windowIcon:true,
		running:true,
		top: {
			current:0
		},
		left: {
			current:0
		},
		width:{
			min:350,
			max:99999,
			default:350,
			current:350
		},
		height:{
			min:300,
			max:99999,
			default:300,
			current:300,
		}
	}
	elements={
		el:$('<window/>'),
		resizeHandles: {
			left: {el: $('<resizehandle/>', {'data-direction': 'w'})},
			top: {el: $('<resizehandle/>', {'data-direction': 'n'})},
			right: {el: $('<resizehandle/>', {'data-direction': 'e'})},
			bottom: {el: $('<resizehandle/>', {'data-direction': 's'})},
			topLeft: {el: $('<resizehandle/>', {'data-direction': 'nw'})},
			topRight: {el: $('<resizehandle/>', {'data-direction': 'ne'})},
			bottomLeft: {el: $('<resizehandle/>', {'data-direction': 'sw'})},
			bottomRight: {el: $('<resizehandle/>', {'data-direction': 'se'})},
		},
		topbar: {
			el: $('<topbar/>'),
			icon: {
				el: $('<i/>')
			},
			title: {
				el: $('<title/>')
			},
			buttons: {
				el: $('<buttons/>'),
				minimize: {
					el: $('<div/>', {'data-window': 'minimize'})
				},
				maximize: {
					el: $('<div/>', {'data-window': 'maximize'})
				},
				close: {
					el: $('<div/>', {'data-window': 'close'})
				}
			}
		},
		ribbons:{
			el:$('<ribbons/>'),
			buttons:{el:$('<buttons/>')},
			content:{el:$('<content/>')}
		},
		content: {
			el:$('<content/>'),
			left:{
				el:$('<left/>')
			},
			center:{
				el:$('<center/>')
			},
			right:{
				el:$('<right/>')
			}
		},
		status: {
			el:$('<status/>')
		}
	}
	constructor(options={}) {
		let win = this;
		$.extend(true,win.options, options);
		$$.Desktop.elements.el.append($$.Tools.autoAppend(win.elements));

		win.options.running=true;
		win.options.height.current = parseInt(win.options.height.current);
		win.options.width.current = parseInt(win.options.width.current);
		win.options.top.current = parseInt(win.options.top.current);
		win.options.left.current = parseInt(win.options.left.current);
		win.options.minimized = win.options.minimized==='true';
		win.options.maximized = win.options.maximized==='true';

		win.applyOptions();
		win.register();
		win.listen();
		win.bringToFront();
		if(win.options.minimized){
			win.minimize();
		}
		win.save();
	}
	applyOptions(){
		let win = this;
		win.elements.el.attr('data-app',win.options.appname);
		if(win.options.windowIcon){
			win.elements.topbar.icon.el.addClass(win.options.icon);
			if(win.options.iconColor){
				win.elements.topbar.icon.el.css({color:win.options.iconColor,filter:'brightness(0.5)'});
			}
		}
		win.elements.topbar.title.el.html(win.options.title);
		if(!win.options.resizable||$$.System.isMobile()){
			win.elements.topbar.buttons.maximize.el.css({display: 'none'});
			$.each(win.elements.resizeHandles,function(key,handle){
				handle.el.css({display:'none'});
			});
		}
		if(!win.options.status){
			win.elements.status.el.remove();
		}
		win.applySize();
		win.applyPosition();
	}
	applySize(){
		let win = this;
		if(win.options.maximized || $$.System.isMobile()){
			win.elements.el.css({width: $$.Desktop.width()+'px',height: $$.Desktop.height()+'px'});
		}
		else {
			win.elements.el.css({width: parseInt(win.options.width.current)+'px',height: parseInt(win.options.height.current)+'px'});
		}
	}
	applyPosition(){
		let win = this;
		if(win.options.maximized || $$.System.isMobile()){
			win.elements.el.css({top: 0,left: 0});
		}
		else {
			win.elements.el.css({top: parseInt(win.options.top.current)+'px',left: parseInt(win.options.left.current)+'px'});
		}
	}
	listen(){
		let win = this;
		win.elements.el.on('mousedown',function(){win.bringToFront.call(win)});
		win.elements.topbar.buttons.close.el.on('click',function(){win.close.call(win)});
		win.elements.topbar.buttons.minimize.el.on('click',function(){win.minimize.call(win)});
		win.elements.topbar.buttons.maximize.el.on('click',function(){win.maximize.call(win)});
		win.elements.topbar.el.on('dblclick',function(){win.maximize.call(win)});
		win.elements.topbar.el.on('mousedown',function(event){win.drag.call(win,event)});
		$.each(win.elements.resizeHandles,function(key,handle){
			handle.el.on('mousedown',function(event){win.resize.call(win,event,handle.el.data('direction'))});
		})
	}
	resize(event,direction){
		let win = this;
		if(!win.options.resizable || win.options.maximized){return;}
		win.mousePosition.x = event.clientX;
		win.mousePosition.y = event.clientY;
		win.options.top.start = parseInt(win.options.top.current);
		win.options.left.start = parseInt(win.options.left.current);
		win.options.width.start = parseInt(win.options.width.current);
		win.options.height.start = parseInt(win.options.height.current);
		$(document).on('mousemove.window',function(event){
			let offsetX = event.clientX - win.mousePosition.x;
			let offsetY = event.clientY - win.mousePosition.y;
			if(direction[0] === 'n' || direction[1] === 'n'){
				win.options.top.current = win.options.top.start+offsetY;
				win.options.height.current = win.options.height.start-offsetY;
				//prevent resize out of desktop
				if(win.options.top.current < 0){win.options.height.current += win.options.top.current;win.options.top.current = 0;}
				//check min height
				if(win.options.height.current <= win.options.height.min){win.options.top.current -= win.options.height.min-win.options.height.current;win.options.height.current = win.options.height.min;}
				//check max height
				else if(win.options.height.current >= win.options.height.max){win.options.top.current -= win.options.height.max-win.options.height.current;win.options.height.current = win.options.height.max;}
			}
			if(direction[0] === 'e' || direction[1] === 'e'){
				win.options.width.current = win.options.width.start+offsetX;
				//prevent resize out of desktop
				if(win.options.left.current+win.options.width.current >= $$.Desktop.width()){win.options.width.current = $$.Desktop.width()-win.options.left.current;}
				//check min width
				if(win.options.width.current <= win.options.width.min){win.options.width.current = win.options.width.min;}
				//check max width
				else if(win.options.width.current >= win.options.width.max){win.options.width.current = win.options.width.max;}
			}
			if(direction[0] === 's' || direction[1] === 's'){
				win.options.height.current = win.options.height.start+offsetY;
				//prevent resize out of desktop
				if(win.options.top.current+win.options.height.current >= $$.Desktop.height()){win.options.height.current = $$.Desktop.height()-win.options.top.current;}
				//check min height
				if(win.options.height.current <= win.options.height.min){win.options.height.current = win.options.height.min;}
				//check max height
				else if(win.options.height.current >= win.options.height.max){win.options.height.current = win.options.height.max;}
			}
			if(direction[0] === 'w' || direction[1] === 'w'){
				win.options.left.current = win.options.left.start+offsetX;
				win.options.width.current = win.options.width.start-offsetX;
				//prevent resize out of desktop
				if(win.options.left.current < 0){win.options.width.current += win.options.left.current;win.options.left.current = 0;}
				//check min width
				if(win.options.width.current <= win.options.width.min){win.options.left.current -= win.options.width.min-win.options.width.current;win.options.width.current = win.options.width.min;}
				//check max width
				else if(win.options.width.current >= win.options.width.max){win.options.left.current -= win.options.width.max-win.options.width.current;win.options.width.current = win.options.width.max;}
			}
			//apply changes
			win.applyPosition();
			win.applySize();
		})
		$(document).one('mouseup',function(){
			$(document).off('mousemove.window');
			win.save();
		})
	}
	drag(event){
		let win = this;
		if(!win.options.draggable || win.options.maximized){return;}
		win.mousePosition.x = event.clientX;
		win.mousePosition.y = event.clientY;//
		win.options.top.start = parseInt(win.options.top.current);
		win.options.left.start = parseInt(win.options.left.current);
		$(document).on('mousemove.window',function(event){
			let offsetX = event.clientX - win.mousePosition.x;
			let offsetY = event.clientY - win.mousePosition.y;
			win.options.top.current = win.options.top.start+offsetY;
			win.options.left.current = win.options.left.start+offsetX;
			//prevent moving out of desktop
			if(win.options.top.current < 0){win.options.top.current = 0;}
			else if(win.options.top.current+win.options.height.current >= $$.Desktop.height()) {win.options.top.current = $$.Desktop.height() - win.options.height.current;}
			if(win.options.left.current < 0){win.options.left.current = 0;}
			else if(win.options.left.current+win.options.width.current >= $$.Desktop.width()){win.options.left.current = $$.Desktop.width()-win.options.width.current}
			win.applyPosition();
		})
		$(document).one('mouseup',function(){
			$(document).off('mousemove.window');
			win.save();
		})
	}
	bringToFront(){
		let win = this;
		$$.Taskbar.removeActive();
		win.taskbarIcon.addClass('active');
		if(win.elements.el.css('z-index') != $$.Desktop.zindex){
			win.elements.el.css({zIndex:++$$.Desktop.zindex});
		}
	}
	close(){
		let win = this;
		win.options.running = false;
		win.save();
		$$.Apps.kill(win.options.appname);
		win.elements.el.remove();
		win.taskbarIcon.remove();
	}
	minimize(){
		let win = this;
		win.options.minimized = true;
		win.elements.el.css({display:'none'});
		win.save();
		$$.Taskbar.removeActive();
	}
	restore(){
		let win = this;
		if(win.options.resizable){win.options.maximized = false;}
		win.options.minimized = false;
		win.elements.el.css({display:'grid'});
		win.applySize();
		win.applyPosition();
		win.bringToFront();
		win.save();
	}
	maximize(){
		let win = this;
		if(!win.options.resizable){return;}
		if(win.options.maximized){win.restore();}
		else {
			win.options.maximized = true;
			win.applySize();
			win.applyPosition();
			win.save();
		}
	}
	toggle(){
		let win = this;
		if(win.elements.el.css('display') == 'none' || win.elements.el.css('z-index') != $$.Desktop.zindex){
			win.restore();
		}
		else {
			win.minimize();
		}
	}
	register(){
		let win = this;
		win.taskbarIcon = $$.Taskbar.add(win.options.icon,win.options.title,win.options.iconColor||'#fff');
		win.taskbarIcon.on('click',function(){win.toggle()});
	}
	save(){
		let win = this;
		let appname = win.options.appname;
		if(appname !== 'undefined'){
			let options = {
				maximized:win.options.maximized,
				minimized:win.options.minimized,
				height:{current:win.options.height.current},
				width:{current:parseInt(win.options.width.current)},
				top:{current:win.options.top.current},
				left:{current:win.options.left.current},
				running:win.options.running,
			}
			$$.User.setAppOptions(appname,options);
		}
	}
	setStatus(el=''){
		let win = this;
		win.elements.status.el.html(el);
	}
	setContent(el=''){
		let win = this;
		win.elements.content.center.el.html(el);
	}
	addContent(el=''){
		let win = this;
		win.elements.content.center.el.append(el);
	}
	setLeft(el=''){
		let win = this;
		win.elements.content.left.el.html(el);
	}
	addLeft(el=''){
		let win = this;
		win.elements.content.left.el.append(el);
	}
	setRight(el=''){
		let win = this;
		win.elements.content.right.el.html(el);
	}
	addRight(el=''){
		let win = this;
		win.elements.content.right.el.append(el);
	}
	setRibbonButtons(el=''){
		let win = this;
		win.elements.ribbons.buttons.el.html(el);
	}
	addRibbonButtons(el=''){
		let win = this;
		win.elements.ribbons.buttons.el.append(el);
	}
	setRibbonContent(el=''){
		let win = this;
		win.elements.ribbons.content.el.html(el);
	}
	addRibbonContent(el=''){
		let win = this;
		win.elements.ribbons.content.el.append(el);
	}
	scrollContent(){
		let win = this;
		win.elements.content.center.el.scrollTop(win.elements.content.center.el[0].scrollHeight);
		//win.elements.content.center.el.animate({ scrollTop: win.elements.content.center.el.prop("scrollHeight")}, 500);
	}
}
export class Ribbon {
	options = {};
	elements={
		buttons:{},
		items:{}
	}
	items = {};
	constructor(options={},items={},app) {
		let ribbon = this;
		ribbon.app = app;
		ribbon.items = items;
		$.extend(true,ribbon.options, options);
		ribbon.build();
	}
	build() {
		let ribbon = this;
		ribbon.elements.buttons = {el: $('<menu/>')};
		$.each(ribbon.items,function(buttonKey,element){
			ribbon.elements.buttons[buttonKey] = {el: $('<item/>', {html: element.title})};
			ribbon.elements.buttons[buttonKey].el.on('click',function(){ribbon.set(buttonKey)});
			ribbon.elements.items[buttonKey] = {el: $('<menu/>')};
			$.each(element.items,function(itemKey,item){
				ribbon.elements.items[buttonKey][itemKey] = {el: $('<item/>', {html: '<span>'+item.title+'</span><badge></badge>','data-noactive':item.noActive||null}),callback:item.callback};

				if(item.icon){
					let icon = $('<i/>',{class:item.icon});
					if(item.color){
						icon.css({color:item.color});
					}
					ribbon.elements.items[buttonKey][itemKey].el.prepend(icon);
				}
			})
		})
		ribbon.app.win.setRibbonButtons($$.Tools.autoAppend(ribbon.elements.buttons));
		ribbon.setFirst();
	}
	clearActive(){
		let ribbon = this;
		ribbon.app.win.elements.ribbons.el.find('content .active').removeClass('active');
	}
	setFirst(){
		let ribbon = this;
		ribbon.set(Object.keys(ribbon.items)[0]);
	}
	set(key) {
		let ribbon = this;
		ribbon.elements.buttons.el.find('.active').removeClass('active');
		ribbon.elements.buttons[key].el.addClass('active');
		ribbon.elements.items[key].el.find('hr').remove();
		ribbon.app.win.setRibbonContent($$.Tools.autoAppend(ribbon.elements.items[key]));
		$.each(ribbon.elements.items[key],function(itemKey,item){
			if(itemKey === 'el'){return;}
			item.el.after('<hr>');
			item.el.on('click',function(){
				if(!item.el.attr('data-noactive')){
					ribbon.elements.items[key].el.find('.active').removeClass('active');
					item.el.addClass('active');
				}
				item.callback.call(ribbon.app)
			});
		})
	}
}
export class Form {
	options = {};
	elements = {}
	items = {};
	input = {};
	constructor(options = {}, items = {}, app) {
		let form = this;
		form.app = app;
		form.items = items;
		$.extend(true, form.options, options);
		form.build();
		form.preventSubmit();
	}
	preventSubmit() {
		let form = this;
		form.elements.el.on('submit', function (e) {
			e.preventDefault();
			return false;
		})
	}
	serialize() {
		let form = this;
		return form.elements.el.serializeArray()
	}
	get() {
		let form = this;
		return $$.Tools.autoAppend(form.elements);
	}
	build() {
		let form = this;
		form.elements.el = form.el = $('<form/>');
		form.elements.el.append(form.getInputs(form.items));
		if (form.options.buttons) {
			form.buildButtons();
		}
	}
	buildButtons() {
		let form = this;
		$.each(form.options.buttons, function (key, button) {
			let el = $('<button/>', {html: button.label});
			if (button.icon) {
				el.prepend('<i class="' + button.icon + '"></i> ');
			}
			el.on('click', function () {
				button.callback.call(form.app);
			});
			form.el.append(el)
		})
	}
	getInputs(obj, groupKey = 'root') {
		let form = this;
		let group = $('<group/>', {'data-group': groupKey});
		$.each(obj, function (key, item) {
			if (item.type) {
				if (groupKey !== 'root') {
					group.attr('data-hasinputgroups', true)
				}
				;
				let inputGroup = $('<group/>', {'data-group': key, 'data-hasinputs': true});
				let label = $('<label/>', {html: item.label ?? ''});
				let input = $('<input/>', {type: item.type, name: item.name ?? key, value: item.value ?? null});
				inputGroup.append(label);
				inputGroup.append(input);
				group.append(inputGroup);
				form.input[item.name ?? key] = input;
			} else {
				group.append(form.getInputs(item, key));
			}
		})
		return group;
	}
	set(name, value = null) {
		let form = this;
		if (typeof (name) === 'object') {
			$.each(name, function (_name, _value) {
				if (form.input[_name]) {
					form.input[_name].val(_value);
				}
			})
		} else {
			if (form.input[name]) {
				form.input[name].val(value);
			}
		}
	}
	reset() {
		let form = this;
		form.elements.trigger('reset');
	}
}
export class Menu {
	options = {
		search:true,
	};
	elements={}
	items = {};
	constructor(options={},items={},app) {
		let menu = this;
		menu.app = app;
		menu.items = items;
		$.extend(true,menu.options, options);
		menu.build();
	}
	build() {
		let menu = this;
		let count = 0;
		menu.elements.el = menu.el = $('<menu/>');
		if(menu.options.search){
			menu.elements.search = {el: $('<input>', {type: 'text', class: 'search'})};
			menu.elements.el.append(menu.elements.search.el);
			menu.elements.search.el.on('keyup', function () {
				menu.search($(this).val());
			})
		}
		$.each(menu.items,function(key,item){
			let searchVal = item.search??item.title.replace(' ','').toLowerCase();
			menu.elements[key] = {el:$('<item/>', {html: item.title,'data-search':searchVal})};
			if(item.icon){
				menu.elements[key].el.prepend('<i class="'+item.icon+'"></i> ');
			}
			menu.elements.el.append(menu.elements[key].el);
			menu.elements[key].el.on('click',function(){
				menu.elements.el.find('.active').removeClass('active');
				menu.elements[key].el.addClass('active');
				item.callback.call(menu.app);
			});
			count++;
		});
		if(menu.app.win){
			menu.app.win.setStatus('Showing ' + count + ' of ' + count + ' Items');
		}
	}
	search(query,autoOpen=false) {
		let menu = this;
		let items = menu.elements.el.find('item');
		let count = items.length;
		let showing = 0;
		query = query.replace(' ','').toLowerCase();
		$.each(items,function(key,item){
			item = $(item);
			if (item.data('search').search(query) !== -1) {
				item.css({display: 'flex'});
				if(autoOpen){
					item.click();
					autoOpen=false;
				}
				showing++;
			} else {
				item.css({display: 'none'});
			}
		})
		if(menu.app.win){
			menu.app.win.setStatus('Showing ' + showing + ' of ' + count + ' Items');
		}
	}
	set(key){
		let menu = this;
		if(menu.elements[key]){
			menu.elements[key].el.click();
		}
	}
}
export class Tools {
	static throttles = {};
	static autoAppend(obj,parentElement=false){
		let tools = this;
		let returnElement = obj.el||parentElement;
		$.each(obj,function(key,element){
			if(key == 'callback'){
				return;
			}
			if(key!=='el'){
				returnElement.append(tools.autoAppend(element,returnElement));
			}
		})
		return returnElement;
	}
	static throttle(id,time=1000,callback){
		let tools = this;
		if(tools.throttles[id]){
			let diff = new Date().getTime()-time-tools.throttles[id].lastExecution;
			clearTimeout(tools.throttles[id].timeout);
			tools.throttles[id].timeout = setTimeout(function(){
				tools.throttles[id].lastExecution= new Date().getTime();
				callback();
			},diff*-1);
		}
		else {
			tools.throttles[id] = {
				timeout:{},
				lastExecution: new Date().getTime()
			}
			callback();
		}
	}
}
