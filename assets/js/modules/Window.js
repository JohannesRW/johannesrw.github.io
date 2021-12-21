export default class Window {
	id = '';
	resizeHandles={};
	mousePosition = {}
	options = {
		appname:'undefined',
		maximized: false,
		minimized: false,
		resizable:true,
		draggable:true,
		title: 'Neues Fenster',
		icon:'windows',
		top: {
			current:0
		},
		left: {
			current:0
		},
		width:{
			min:350,
			max:600,
			default:350,
			current:350
		},
		height:{
			min:300,
			max:500,
			default:300,
			current:300,
		}
	}
	constructor(options={}) {
		let win = this;
		$.extend(win.options, options);
		nos.System.addCSS('window');
		win.create();
		win.register();
		win.listen();
		win.bringToFront();
	}
	create(){
		let win = this;
		win.el = $('<window/>');
		win.resizeHandles = {
			left: {el:$('<resizehandle/>',{'data-direction':'w',css:{display:(!win.options.resizable?'none':'')}})},
			top: {el:$('<resizehandle/>',{'data-direction':'n',css:{display:(!win.options.resizable?'none':'')}})},
			right: {el:$('<resizehandle/>',{'data-direction':'e',css:{display:(!win.options.resizable?'none':'')}})},
			bottom: {el:$('<resizehandle/>',{'data-direction':'s',css:{display:(!win.options.resizable?'none':'')}})},
			topLeft: {el:$('<resizehandle/>',{'data-direction':'nw',css:{display:(!win.options.resizable?'none':'')}})},
			topRight: {el:$('<resizehandle/>',{'data-direction':'ne',css:{display:(!win.options.resizable?'none':'')}})},
			bottomLeft: {el:$('<resizehandle/>',{'data-direction':'sw',css:{display:(!win.options.resizable?'none':'')}})},
			bottomRight: {el:$('<resizehandle/>',{'data-direction':'se',css:{display:(!win.options.resizable?'none':'')}})},
		}
		win.topbar = {
			el:$('<topbar/>'),
			icon:{
				el:$('<i/>',{class:'nos-'+win.options.icon})
			},
			title:{
				el:$('<title/>',{html:win.options.title})
			},
			buttons:{
				el:$('<buttons/>'),
				minimize:{
					el:$('<div/>',{'data-window':'minimize'})
				},
				maximize:{
					el:$('<div/>',{'data-window':'maximize',css:{display:(nos.System.isMobile()||!win.options.resizable?'none':'')}})
				},
				close:{
					el:$('<div/>',{'data-window':'close'})
				}
			}
		}
		win.content = {
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
		}
		win.status = {
			el:$('<status/>',{html:'<appname>'+win.options.appname+'</appname><version>v'+win.options.version+'</version>'})
		}
		//append elements
		win.topbar.el.append(win.topbar.icon.el);
		win.topbar.el.append(win.topbar.title.el);
		win.topbar.el.append(win.topbar.buttons.el);
		win.topbar.buttons.el.append(win.topbar.buttons.minimize.el);
		win.topbar.buttons.el.append(win.topbar.buttons.maximize.el);
		win.topbar.buttons.el.append(win.topbar.buttons.close.el);
		win.content.el.append(win.content.left.el);
		win.content.el.append(win.content.center.el);
		win.content.el.append(win.content.right.el);
		win.el.append(win.topbar.el);
		win.el.append(win.content.el);
		win.el.append(win.status.el);
		$.each(win.resizeHandles,function(key,handle){
			win.el.append(handle.el);
		})
		//append window to desktop
		nos.UI.Desktop.el.append(win.el);
		win.applySize();
		win.applyPosition();
		if(win.options.minimized){win.minimize();}
		nos.System.log('Window loaded');
	}
	applySize(){
		let win = this;
		if(win.options.maximized || nos.System.isMobile()){
			win.el.css({width: nos.UI.Desktop.width()+'px',height: nos.UI.Desktop.height()+'px'});
		}
		else {
			win.el.css({width: win.options.width.current+'px',height: win.options.height.current+'px'});
		}
	}
	applyPosition(){
		let win = this;
		if(win.options.maximized || nos.System.isMobile()){
			win.el.css({top: 0,left: 0});
		}
		else {
			win.el.css({top: win.options.top.current+'px',left: win.options.left.current+'px'});
		}
	}
	listen(){
		let win = this;
		win.el.on('mousedown',function(){win.bringToFront.call(win)});
		win.topbar.buttons.close.el.on('click',function(){win.close.call(win)});
		win.topbar.buttons.minimize.el.on('click',function(){win.minimize.call(win)});
		win.topbar.buttons.maximize.el.on('click',function(){win.maximize.call(win)});
		win.topbar.el.on('dblclick',function(){win.maximize.call(win)});
		win.topbar.el.on('mousedown',function(event){win.drag.call(win,event)});
		$.each(win.resizeHandles,function(key,handle){
			handle.el.on('mousedown',function(event){win.resize.call(win,event,handle)});
		})
	}
	resize(event,handle){
		let win = this;
		if(!win.options.resizable || win.options.maximized){return;}
		let direction = handle.el.data('direction');
		win.mousePosition.x = event.clientX;
		win.mousePosition.y = event.clientY;
		win.options.top.start = win.options.top.current;
		win.options.left.start = win.options.left.current;
		win.options.width.start = win.options.width.current;
		win.options.height.start = win.options.height.current;
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
				if(win.options.left.current+win.options.width.current >= nos.UI.Desktop.width()){win.options.width.current = nos.UI.Desktop.width()-win.options.left.current;}
				//check min width
				if(win.options.width.current <= win.options.width.min){win.options.width.current = win.options.width.min;}
				//check max width
				else if(win.options.width.current >= win.options.width.max){win.options.width.current = win.options.width.max;}
			}
			if(direction[0] === 's' || direction[1] === 's'){
				win.options.height.current = win.options.height.start+offsetY;
				//prevent resize out of desktop
				if(win.options.top.current+win.options.height.current >= nos.UI.Desktop.height()){win.options.height.current = nos.UI.Desktop.height()-win.options.top.current;}
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
		win.mousePosition.y = event.clientY;
		win.options.top.start = win.options.top.current;
		win.options.left.start = win.options.left.current;
		$(document).on('mousemove.window',function(event){
			let offsetX = event.clientX - win.mousePosition.x;
			let offsetY = event.clientY - win.mousePosition.y;
			win.options.top.current = win.options.top.start+offsetY;
			win.options.left.current = win.options.left.start+offsetX;
			//prevent moving out of desktop
			if(win.options.top.current < 0){win.options.top.current = 0;}
			else if(win.options.top.current+win.options.height.current >= nos.UI.Desktop.height()) {win.options.top.current = nos.UI.Desktop.height() - win.options.height.current;}
			if(win.options.left.current < 0){win.options.left.current = 0;}
			else if(win.options.left.current+win.options.width.current >= nos.UI.Desktop.width()){win.options.left.current = nos.UI.Desktop.width()-win.options.width.current}
			win.applyPosition();
		})
		$(document).one('mouseup',function(){
			$(document).off('mousemove.window');
			win.save();
		})
	}
	bringToFront(){
		let win = this;
		nos.UI.Taskbar.removeActive();
		win.taskbarIcon.addClass('active');
		if(win.el.css('z-index') != nos.UI.zindex){
			win.el.css({zIndex:++nos.UI.zindex});
		}
	}
	close(){
		let win = this;
		nos.System.kill(win.options.appname);
		win.el.remove();
		win.taskbarIcon.remove();
	}
	minimize(){
		let win = this;
		win.options.minimized = true;
		win.el.css({display:'none'});
		win.save();
	}
	restore(){
		let win = this;
		win.options.maximized = false;
		win.options.minimized = false;
		win.el.css({display:'grid'});
		win.applySize();
		win.applyPosition();
		win.bringToFront();
		win.save();
	}
	maximize(){
		let win = this;
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
		if(win.el.css('display') == 'none' || win.el.css('z-index') != nos.UI.zindex){
			win.restore();
		}
		else {
			win.minimize();
		}
	}
	register(){
		let win = this;
		win.taskbarIcon = nos.UI.Taskbar.add(win.options.icon,win.options.title,win);
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
				width:{current:win.options.width.current},
				top:{current:win.options.top.current},
				left:{current:win.options.left.current},
			}
			$.post( 'user/app/'+appname+'/save', options );
		}
	}
}
