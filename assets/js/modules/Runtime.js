export class Window {
	mousePosition = {}
	options = {
		appName:'undefined',
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
		centerContent:false,
		type:'default',
		save:true,
		blocking:false,
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
	// noinspection HtmlDeprecatedTag
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
		win.elements.el.attr('data-app',win.options.appName);
		win.elements.el.attr('data-type',win.options.type);
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
		if(win.options.centerContent){
			win.elements.content.center.el.css({'text-align':'center'});
		}
		win.applySize();
		win.applyPosition();
		if(win.options.blocking){
			win.block();
		}
	}
	block(){
		let win = this;
		win.elements.blocker = {
			el:$('<blocker/>'),
		}
		$('body').append(win.elements.blocker.el);
		win.elements.blocker.el.css({zIndex:$$.Desktop.zIndex+9});
	}
	unblock(){
		let win = this;
		win.elements.blocker.el.remove();
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
	setStart(mouseX,mouseY){
		let win = this;
		win.mousePosition.x = mouseX;
		win.mousePosition.y = mouseY;
		win.options.top.start = parseInt(win.options.top.current);
		win.options.left.start = parseInt(win.options.left.current);
		win.options.width.start = parseInt(win.options.width.current);
		win.options.height.start = parseInt(win.options.height.current);
	}
	resize(event,direction){
		let win = this;
		if(!win.options.resizable || win.options.maximized){return;}
		win.setStart(event.clientX,event.clientY);
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
		win.setStart(event.clientX,event.clientY);
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
		$$.Desktop.clearActive();
		if(win.options.blocking){
			win.elements.el.css({zIndex:$$.Desktop.zIndex+10});
			return;
		}
		$$.Taskbar.removeActive();
		win.taskbarIcon.addClass('active');
		if(parseInt(win.elements.el.css('z-index')) !== $$.Desktop.zIndex){
			win.elements.el.css({zIndex:++$$.Desktop.zIndex});
		}
	}
	close(){
		let win = this;
		win.options.running = false;
		win.save();
		$$.Apps.kill(win.options.appName);
		win.elements.el.remove();
		if(win.options.blocking){
			win.unblock();
		}
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
		if(win.elements.el.css('display') === 'none' || parseInt(win.elements.el.css('z-index')) !== $$.Desktop.zIndex){
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
		if(!win.options.save){return;}
		let appName = win.options.appName;
		if(appName !== 'undefined'){
			let options = {
				maximized:win.options.maximized,
				minimized:win.options.minimized,
				height:{current:win.options.height.current},
				width:{current:parseInt(win.options.width.current)},
				top:{current:win.options.top.current},
				left:{current:win.options.left.current},
				running:win.options.running,
			}
			$$.User.setAppOptions(appName,options);
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
				ribbon.elements.items[buttonKey][itemKey] = {el: $('<item/>', {html: '<span>'+item.title+'</span><badge></badge>','data-noActive':item.noActive||null}),callback:item.callback};
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
		ribbon.app.win.setRibbonContent($$.Tools.autoAppend(ribbon.elements.items[key],null,['callback']));
		$.each(ribbon.elements.items[key],function(itemKey,item){
			if(itemKey === 'el'){return;}
			item.el.after('<hr>');
			item.el.on('click',function(){
				if(!item.el.attr('data-noActive')){
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
	serialize(array=false) {
		let form = this;
		let formDataArray = form.elements.el.serializeArray();
		if(array){
			return formDataArray;
		}
		let formDataObject = {};
		$.each(formDataArray,function(index,item){
			formDataObject[item.name] = item.value;
		})
		return formDataObject;
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
			if(key === 'label'){
				group.append(`<h2>${item}</h2>`);
				return;
			}
			if (item.type) {
				if (groupKey !== 'root') {
					group.attr('data-hasInputGroups', 'true')
				}
				if(item.type === 'toggle' || item.type === 'checkbox'){
					let inputGroup = $('<flexGroup/>', {'data-group': key, 'data-hasInputs': 'true'});
					let label = $('<label/>', {html: item.label ?? ''});
					let input = $('<input/>', {type: 'checkbox', name: item.name ?? key, checked: item.value ?? false, class:item.type});
					inputGroup.append(input);
					inputGroup.append(label);
					group.append(inputGroup);
					form.input[item.name ?? key] = input;
					if(item.callback) {
						input.on('change', function () {
							item.callback.call(form.app, input.is(":checked"))
						})
					}
				}
				else {
					let inputGroup = $('<group/>', {'data-group': key, 'data-hasInputs': 'true'});
					let label = $('<label/>', {html: item.label ?? ''});
					let input = $('<input/>', {type: item.type, name: item.name ?? key, value: item.value ?? null});
					inputGroup.append(label);
					inputGroup.append(input);
					group.append(inputGroup);
					form.input[item.name ?? key] = input;
					if(item.callback){
						input.on('click',function(){
							item.callback.call(form.app,input.val());
						})
					}
				}
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
		sorted:false,
		doubleClick:false,
		forceHighlight:false,
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
		if(menu.options.sorted){
			menu.sort();
		}
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
			let trigger = menu.options.doubleClick?'dblclick':'click';
			menu.elements[key].el.on(trigger,function(){
				menu.elements.el.find('.active').removeClass('active');
				menu.elements[key].el.addClass('active');
				item.callback.call(menu.app);
			});
			if(menu.options.doubleClick&&menu.options.forceHighlight){
				menu.elements[key].el.on('click',function(){
					menu.elements.el.find('.active').removeClass('active');
					menu.elements[key].el.addClass('active');
				});
			}
			count++;
		});
		if(menu.app.win){
			menu.app.win.setStatus('Showing ' + count + ' of ' + count + ' Items');
		}
	}
	clearActive(){
		let menu = this;
		menu.elements.el.find('.active').removeClass('active');
	}
	search(query,autoClickFirst=true) {
		let menu = this;
		let items = menu.elements.el.find('item');
		let count = items.length;
		let showing = 0;
		query = query.replace(' ','').toLowerCase();
		$.each(items,function(key,item){
			item = $(item);
			if (item.data('search').search(query) !== -1) {
				item.css({display: 'flex'});
				if(autoClickFirst){
					item.click();
					autoClickFirst=false;
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
	clickFirst(){
		let menu = this;
		let key = Object.keys(menu.items)[0];
		menu.elements[key].el.click();
	}
	remove(key){
		let menu = this;
		menu.elements[key].el.remove();
		delete menu.items[key];
		menu.clickFirst();
	}
	set(key){
		let menu = this;
		if(menu.elements[key]){
			menu.elements[key].el.click();
		}
	}
	sort(){
		let menu = this;
		let _items = menu.items;
		menu.items = {};
		let sortable = [];
		let key;
		for (key in _items) {
			if (_items.hasOwnProperty(key)) {
				sortable.push({'key': key, 'value': _items[key].search??_items[key].title.replace(' ','').toLowerCase()});
			}
		}
		sortable.sort(function(a, b) {
			return a.value > b.value?1:-1;
		});
		$.each(sortable,function(index,item){
			menu.items[item.key] = _items[item.key];
		})
	}
}
export class Tools {
	static throttles = {};
	static autoAppend(obj,parentElement=false,ignore=[]){
		let tools = this;
		let returnElement = obj.el||parentElement;
		$.each(obj,function(key,element){
			if(ignore.indexOf(key)!==-1){
				return;
			}
			if(key!=='el'){
				returnElement.append(tools.autoAppend(element,returnElement,ignore));
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
export class Alert {
	options={
		type:'info',
		title:null,
		msg:null,
	};
	types={
		info:{
			icon:'fa-solid fa-circle-info',
			iconColor:'#0095ff',
			title:'Info',
		},
		bool:{
			icon:'fa-solid fa-circle-question',
			iconColor:'#0095ff',
			title:'',
		},
		delete:{
			icon:'fa-duotone fa-trash',
			iconColor:'#444',
			title:'Delete',
		},
		warning:{
			icon:'fa-solid fa-triangle-exclamation',
			iconColor:'#ffbc00',
			title:'Warning'
		},
		error:{
			icon:'fa-solid fa-circle-exclamation',
			iconColor:'#bd0000',
			title:'Error'
		}
	}
	windowOptions={
		appName:'alert',
		status:false,
		resizable:false,
		width:{current:400},
		height:{current:200},
		top: {current:0},
		left: {current:0},
		type:'alert',
		save:false
	}
	elements={
		buttons:{
			info:{
				el:$('<buttons/>'),
				close:{
					el:$('<button/>',{html:'Close'})
				}
			},
			bool:{
				el:$('<buttons/>'),
				callback:{
					el:$('<button/>',{html:'Yes'})
				},
				close:{
					el:$('<button/>',{html:'No'})
				}
			},
			delete:{
				el:$('<buttons/>'),
				callback:{
					el:$('<button/>',{html:'Delete'})
				},
				close:{
					el:$('<button/>',{html:'Abort'})
				}
			},
			warning:{
				el:$('<buttons/>'),
				close:{
					el:$('<button/>',{html:'Close'})
				}
			},
			error:{
				el:$('<buttons/>'),
				close:{
					el:$('<button/>',{html:'Close'})
				}
			}
		}
	}
	constructor(options={}) {
		let alert = this;
		$.extend(true,alert.options, options);
		alert.applyOptions();
		alert.build();
		alert.listen();
	}
	applyOptions(){
		let alert = this;
		alert.windowOptions.title = alert.options.title||alert.types[alert.options.type].title;
		alert.windowOptions.icon = alert.types[alert.options.type].icon;
		alert.windowOptions.iconColor = alert.types[alert.options.type].iconColor;
		alert.windowOptions.top.current = $$.Desktop.height()/2-alert.windowOptions.height.current/2;
		alert.windowOptions.left.current = $$.Desktop.width()/2-alert.windowOptions.width.current/2;
		if(alert.options.callback && alert.elements.buttons[alert.options.type].callback){
			alert.windowOptions.blocking = true;
		}
	}
	build(){
		let alert = this;
		alert.win = new $$.Window(alert.windowOptions);
		alert.win.setContent('<group><i class="'+alert.types[alert.options.type].icon+'" style="color:'+alert.types[alert.options.type].iconColor+'"></i><msg>'+alert.options.msg+'</msg></group>');
		alert.win.addContent($$.Tools.autoAppend(alert.elements.buttons[alert.options.type]))
	}
	listen(){
		let alert = this;
		alert.elements.buttons[alert.options.type].close.el.on('click',function(){
			alert.close();
		});
		if(alert.options.callback && alert.elements.buttons[alert.options.type].callback){
			alert.elements.buttons[alert.options.type].callback.el.on('click',function(){
				alert.close();
				alert.options.callback();
			});
			alert.elements.buttons[alert.options.type].callback.el.focus();
		}
		else {
			alert.elements.buttons[alert.options.type].close.el.focus();
		}
	}
	close(){
		let alert = this;
		alert.win.close();
	}
}
