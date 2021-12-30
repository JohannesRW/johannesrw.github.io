export class Desktop {
	zindex = 100;
	elements={
		el:$('<desktop/>')
	}
	init(){
		let desktop = this;
		$('body').append($$.Tools.autoAppend(desktop.elements));
	}
	width(){
		let desktop = this;
		return $('body').outerWidth();
	}
	height(){
		let desktop = this;
		return desktop.elements.el.outerHeight();
	}
	get zindex(){
		let desktop = this;
		return ++desktop.zindex;
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
		showdesktop:{el:$('<showdesktop/>')}
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
		taskbar.elements.clock.el.html($$.System.time(false)+(taskbar.options.clock.date?'<br>'+$$.System.date():''));
	}
	stopClock(){
		let taskbar = this;
		clearInterval(taskbar.interval);
	}
	listen(){
		let taskbar = this;
		taskbar.elements.start.el.on('click',function(event){event.stopImmediatePropagation();$$.StartMenu.show();});
		taskbar.elements.showdesktop.el.on('click',function(){
			$.each($$.Apps.running,function(appname,app){
				app.win.minimize();
				taskbar.removeActive();
			})
		});
	}
	height(){
		let taskbar = this;
		return taskbar.elements.el.outerHeight();
	}
	destroy(){
		let taskbar = this;
		taskbar.elements.el.remove();
		$$.System.removeCSS('taskbar');
	}
}
export class StartMenu {
	init(){
		let startmenu = this;
		$$.Desktop.elements.el.append($$.Tools.autoAppend(startmenu.elements));
	}
	elements={
		el:$('<startmenu/>'),
		logout:{el:$('<logout/>')}
	}
	hide(){
		let startmenu = this;
		startmenu.elements.el.css({display:'none'});
	}
	show(){
		let startmenu = this;
		startmenu.elements.el.css({display:'flex'});
		$(document).one('click',function (event){
			startmenu.hide();
		})
	}
	add(icon='',title,appname){
		let startmenu = this;
		let item = {
			el: $('<item/>'),
			icon: {el:$('<i/>',{class:'$$-'+icon})},
			title: {el:$('<span/>',{html:title})}
		}
		item.el.append(item.icon.el);
		item.el.append(item.title.el);
		startmenu.elements.el.append($$.Tools.autoAppend(item));
		item.el.on('click',function(event){
			$$.Apps.run(appname);
		})
	}
	destroy(){
		let startmenu = this;
		startmenu.elements.el.remove();
		$$.System.removeCSS('startmenu');
	}
}
