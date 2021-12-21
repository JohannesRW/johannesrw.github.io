export default class Taskbar {
	options = {
		startIcon:'nos-windows',
		clock:{
			hours:true,
			minutes:true,
			seconds:false,
			date:true
		}
	}
	constructor(options={}) {
		let taskbar = this;
		$.extend(taskbar.options, options);
		taskbar.create();
		taskbar.listen();
		taskbar.startClock();
	}
	removeActive(){
		$('taskbar .active').removeClass('active');
	}
	add(icon,title,win){
		let taskbar = this;
		let el = $('<i/>',{class:'nos-'+icon,title:title});
		taskbar.apps.el.append(el);
		return el;
	}
	create(){
		let taskbar = this;
		//create taskbar elements
		taskbar.el = $('<taskbar/>');
		taskbar.start = {el:$('<start/>')};
		taskbar.start.icon = {el:$('<i/>',{class:taskbar.options.startIcon})};
		taskbar.apps = {el:$('<apps/>')};
		taskbar.info = {el:$('<info/>')};
		taskbar.clock = {el:$('<clock/>')};
		//append elements to taskbar
		taskbar.start.el.append(taskbar.start.icon.el);
		taskbar.el.append(taskbar.start.el);
		taskbar.el.append(taskbar.apps.el);
		taskbar.el.append(taskbar.info.el);
		taskbar.el.append(taskbar.clock.el);
		//append taskbar to desktop
		$('body').append(taskbar.el);
		//add css
		nos.System.addCSS('taskbar');
		nos.System.log('Taskbar loaded');
	}
	startClock(){
		let taskbar = this;
		taskbar.interval = window.setInterval(function(){
			taskbar.updateClock();
		}, 1000);
	}
	updateClock(){
		let taskbar = this;
		let today = new Date();
		let time = String(today.getHours()).padStart(2,'0')+':'+String(today.getMinutes()).padStart(2,'0')+(taskbar.options.clock.seconds?':'+String(today.getSeconds()).padStart(2,'0'):'');
		let date = String(today.getDate()).padStart(2,'0')+'.'+String(today.getMonth()+1).padStart(2,'0')+'.'+today.getFullYear();
		taskbar.clock.el.html(time+(taskbar.options.clock.date?'<br>'+date:''));
	}
	stopClock(){
		let taskbar = this;
		clearInterval(taskbar.interval);
	}
	listen(){
		let taskbar = this;
		taskbar.start.el.on('click',function(event){event.stopImmediatePropagation();nos.UI.Startmenu.show();});
	}
	height(){
		let taskbar = this;
		return taskbar.el.outerHeight();
	}
	destroy(){
		let taskbar = this;
		taskbar.el.remove();
		nos.System.removeCSS('taskbar');
		nos.System.log('Taskbar destroyed');
	}
}
