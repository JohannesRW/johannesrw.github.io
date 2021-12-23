export default class Taskbar {
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
		start:{el:$('<start/>',{title:'Start'})},
		search:{el:$('<input/>',{type:'text',placeholder:'Zur Suche Text hier eingeben'})},
		apps:{el:$('<apps/>')},
		info:{el:$('<info/>')},
		clock:{el:$('<clock/>')},
		showdesktop:{el:$('<showdesktop/>')}
	};
	constructor(options={}) {
		let taskbar = this;
		$.extend(taskbar.options, options);
		$('body').append(nos.autoAppend(taskbar.elements));
		taskbar.listen();
		taskbar.startClock();
		if(nos.System.isMobile()){
			taskbar.elements.search.el.css({display:'none'});
		}
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
		taskbar.elements.clock.el.html(nos.System.time(false)+(taskbar.options.clock.date?'<br>'+nos.System.date():''));
	}
	stopClock(){
		let taskbar = this;
		clearInterval(taskbar.interval);
	}
	listen(){
		let taskbar = this;
		taskbar.elements.start.el.on('click',function(event){event.stopImmediatePropagation();nos.UI.Startmenu.show();});
		taskbar.elements.showdesktop.el.on('click',function(){
			$.each(nos.Apps.running,function(appname,app){
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
		nos.System.removeCSS('taskbar');
	}
}
