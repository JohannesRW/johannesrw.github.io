export default class Taskbar {
	options = {
		clock:{
			hours:true,
			minutes:true,
			seconds:false,
			date:true
		}
	}
	elements={
		el:$('<taskbar/>'),
		start:{el:$('<start/>')},
		search:{el:$('<input/>',{type:'text',placeholder:'Zur Suche Text hier eingeben'})},
		apps:{el:$('<apps/>')},
		info:{el:$('<info/>')},
		clock:{el:$('<clock/>')},
		showdesktop:{el:$('<showdesktop/>')}
	}
	constructor(options={}) {
		let taskbar = this;
		$.extend(taskbar.options, options);
		$('body').append(nos.autoAppend(taskbar.elements));
		taskbar.listen();
		taskbar.startClock();
		if(nos.System.isMobile()){
			taskbar.elements.search.el.css({display:'none'});
		}
		nos.System.addCSS('taskbar');
	}
	removeActive(){
		$('taskbar .active').removeClass('active');
	}
	add(icon,title){
		let taskbar = this;
		let el = $('<img/>',{src:icon,title:title});
		taskbar.elements.apps.el.append(el);
		return el;
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
		let today = new Date();
		let time = String(today.getHours()).padStart(2,'0')+':'+String(today.getMinutes()).padStart(2,'0')+(taskbar.options.clock.seconds?':'+String(today.getSeconds()).padStart(2,'0'):'');
		let date = String(today.getDate()).padStart(2,'0')+'.'+String(today.getMonth()+1).padStart(2,'0')+'.'+today.getFullYear();
		taskbar.elements.clock.el.html(time+(taskbar.options.clock.date?'<br>'+date:''));
	}
	stopClock(){
		let taskbar = this;
		clearInterval(taskbar.interval);
	}
	listen(){
		let taskbar = this;
		taskbar.elements.start.el.on('click',function(event){event.stopImmediatePropagation();nos.UI.Startmenu.show();});
		taskbar.elements.showdesktop.el.on('click',function(event){});
	}
	height(){
		let taskbar = this;
		return taskbar.elements.el.outerHeight();
	}
	destroy(){
		let taskbar = this;
		taskbar.elements.el.remove();
		nos.System.removeCSS('taskbar');
	}
}
