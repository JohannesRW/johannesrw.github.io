export class Desktop {
	zIndex = 100;
	elements={
		el:$('<desktop/>'),
		workspace: {el:$('<workspace/>')}
	}
	templates={
		menu:[]
	}
	items = {};
	init(){
		let desktop = this;
		$('body').append($$.Tools.autoAppend(desktop.elements));
	}
	width(){
		return $('body').outerWidth();
	}
	height(){
		let desktop = this;
		return desktop.elements.el.outerHeight();
	}
	get zIndex(){
		let desktop = this;
		return ++desktop.zIndex;
	}
	add(icon,title,appName){
		let desktop = this;
		desktop.templates.menu.push({title:title,icon:icon,callback:()=>$$.Apps.run(appName)})
		desktop.setMenu();
	}
	setMenu(){
		let desktop = this;
		desktop.menu = new $$.Menu({search:false,doubleClick:true,forceHighlight:true},desktop.templates.menu,desktop);
		desktop.elements.workspace.el.html(desktop.menu.el);
	}
	clearActive(){
		let desktop = this;
		desktop.menu.clearActive();
	}
}
export class Taskbar {
	options = {
		clock:{
			hours:true,
			minutes:true,
			seconds:false,
			date:true
		}
	};
	elements={
		el:$('<taskbar/>'),
		start:{
			el:$('<start/>',{title:'Start'}),
			icon:{el:$('<i/>',{class:'fa-brands fa-windows'})}
		},
		search:{el:$('<input/>',{type:'text',placeholder:'Zur Suche Text hier eingeben'})},
		apps:{el:$('<apps/>')},
		info:{el:$('<info/>')},
		clock:{el:$('<clock/>')},
		showDesktop:{el:$('<showdesktop/>')}
	};
	init(){
		let taskbar = this;
		$('body').append($$.Tools.autoAppend(taskbar.elements));
		taskbar.listen();
		taskbar.startClock();
		if($$.System.isMobile()){
			taskbar.elements.search.el.css({display:'none'});
		}
	}
	removeActive(){
		$('taskbar .active').removeClass('active');
	}
	add(icon,title,iconColor){
		let taskbar = this;
		let item = $('<item/>');
		let iconEl = $('<i/>',{class:icon,title:title}).css({color:iconColor});
		item.append(iconEl);
		taskbar.elements.apps.el.append(item);
		return item;
	}
	startClock(){
		let taskbar = this;
		taskbar.updateClock();
		taskbar.interval = window.setInterval(function(){
			taskbar.updateClock();
		}, 1000);
	}
	updateClock(){
		let taskbar = this;
		taskbar.elements.clock.el.html($$.System.time(taskbar.options.clock.seconds)+(taskbar.options.clock.date?'<br>'+$$.System.date():''));
	}
	stopClock(){
		let taskbar = this;
		clearInterval(taskbar.interval);
	}
	listen(){
		let taskbar = this;
		taskbar.elements.start.el.on('click',function(event){event.stopImmediatePropagation();$$.StartMenu.show();});
		taskbar.elements.showDesktop.el.on('click',function(){
			$.each($$.Apps.running,function(appName,app){
				app.win.minimize();
				taskbar.removeActive();
			})
		});
		taskbar.elements.search.el.on('click',function(){
			// noinspection JSDeprecatedSymbols
			$(this).select();
		})
	}
	height(){
		let taskbar = this;
		return taskbar.elements.el.outerHeight();
	}
}
export class StartMenu {
	elements = {
		el:$('<startmenu/>'),
		menu: []
	}
	init(){
		let startMenu = this;
		$$.Desktop.elements.el.append(startMenu.elements.el);
		startMenu.setMenu();
		startMenu.listen();
	}
	listen(){
		let startMenu = this;
		$$.Taskbar.elements.search.el.on('keyup',function(){
			$$.StartMenu.show();
			startMenu.menu.search($(this).val(),false);
		})
	}
	setMenu(){
		let startMenu = this;
		startMenu.menu = new $$.Menu({search:false},startMenu.elements.menu,startMenu);
		startMenu.elements.el.html(startMenu.menu.el);
	}
	hide(){
		let startMenu = this;
		startMenu.elements.el.css({display:'none'});
	}
	show(){
		let startMenu = this;
		$$.Desktop.clearActive();
		startMenu.elements.el.css({display:'flex'});
		$(document).one('click',function (){
			startMenu.hide();
		})
	}
	add(icon='',title,appName){
		let startMenu = this;
		startMenu.elements.menu.push({title:title,icon:icon,callback:()=>$$.Apps.run(appName)})
		startMenu.setMenu();
	}
}
