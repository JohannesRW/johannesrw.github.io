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
		info:{
			el:$('<info/>'),
			mongodb:{el:$('<img/>')}
		},
		clock:{el:$('<clock/>')},
		showdesktop:{el:$('<showdesktop/>')}
	};
	icons={
		mongodb:{
			success:'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNHB4IiBoZWlnaHQ9IjEwMjRweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgPGNpcmNsZSBjeD0iNTEyIiBjeT0iNTEyIiByPSI1MTIiIHN0eWxlPSJmaWxsOiMxM2FhNTIiLz4KICAgPHBhdGggZD0iTTY0OC44NiA0NDkuNDRjLTMyLjM0LTE0Mi43My0xMDguNzctMTg5LjY2LTExNy0yMDcuNTktOS0xMi42NS0xOC4xMi0zNS4xNS0xOC4xMi0zNS4xNS0uMTUtLjM4LS4zOS0xLjA1LS42Ny0xLjctLjkzIDEyLjY1LTEuNDEgMTcuNTMtMTMuMzcgMzAuMjktMTguNTIgMTQuNDgtMTEzLjU0IDk0LjIxLTEyMS4yNyAyNTYuMzctNy4yMSAxNTEuMjQgMTA5LjI1IDI0MS4zNiAxMjUgMjUyLjg1bDEuNzkgMS4yN3YtLjExYy4xLjc2IDUgMzYgOC40NCA3My4zNEg1MjZhNzI2LjY4IDcyNi42OCAwIDAgMSAxMy03OC41M2wxLS42NWEyMDQuNDggMjA0LjQ4IDAgMCAwIDIwLjExLTE2LjQ1bC43Mi0uNjVjMzMuNDgtMzAuOTMgOTMuNjctMTAyLjQ3IDkzLjA4LTIxNi41M2EzNDcuMDcgMzQ3LjA3IDAgMCAwLTUuMDUtNTYuNzZ6TTUxMi4zNSA2NTkuMTJzMC0yMTIuMTIgNy0yMTIuMDhjNS40NiAwIDEyLjUzIDI3My42MSAxMi41MyAyNzMuNjEtOS43Mi0xLjE3LTE5LjUzLTQ1LjAzLTE5LjUzLTYxLjUzeiIgc3R5bGU9ImZpbGw6I2ZmZiIvPgo8L3N2Zz4K',
			error:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjEwMjRweCIKICAgaGVpZ2h0PSIxMDI0cHgiCiAgIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzgzOCIKICAgc29kaXBvZGk6ZG9jbmFtZT0ibW9uZ29kYl9lcnIuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjEuMSAoM2JmNWFlMGQyNSwgMjAyMS0wOS0yMCkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczg0MiIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9Im5hbWVkdmlldzg0MCIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIwLjc5MDAzOTA2IgogICAgIGlua3NjYXBlOmN4PSI1MTIiCiAgICAgaW5rc2NhcGU6Y3k9IjUxMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnODM4IiAvPgogIDxjaXJjbGUKICAgICBjeD0iNTEyIgogICAgIGN5PSI1MTIiCiAgICAgcj0iNTEyIgogICAgIHN0eWxlPSJmaWxsOiNiZTAwMDA7ZmlsbC1vcGFjaXR5OjEiCiAgICAgaWQ9ImNpcmNsZTgzNCIgLz4KICA8cGF0aAogICAgIGQ9Ik02NDguODYgNDQ5LjQ0Yy0zMi4zNC0xNDIuNzMtMTA4Ljc3LTE4OS42Ni0xMTctMjA3LjU5LTktMTIuNjUtMTguMTItMzUuMTUtMTguMTItMzUuMTUtLjE1LS4zOC0uMzktMS4wNS0uNjctMS43LS45MyAxMi42NS0xLjQxIDE3LjUzLTEzLjM3IDMwLjI5LTE4LjUyIDE0LjQ4LTExMy41NCA5NC4yMS0xMjEuMjcgMjU2LjM3LTcuMjEgMTUxLjI0IDEwOS4yNSAyNDEuMzYgMTI1IDI1Mi44NWwxLjc5IDEuMjd2LS4xMWMuMS43NiA1IDM2IDguNDQgNzMuMzRINTI2YTcyNi42OCA3MjYuNjggMCAwIDEgMTMtNzguNTNsMS0uNjVhMjA0LjQ4IDIwNC40OCAwIDAgMCAyMC4xMS0xNi40NWwuNzItLjY1YzMzLjQ4LTMwLjkzIDkzLjY3LTEwMi40NyA5My4wOC0yMTYuNTNhMzQ3LjA3IDM0Ny4wNyAwIDAgMC01LjA1LTU2Ljc2ek01MTIuMzUgNjU5LjEyczAtMjEyLjEyIDctMjEyLjA4YzUuNDYgMCAxMi41MyAyNzMuNjEgMTIuNTMgMjczLjYxLTkuNzItMS4xNy0xOS41My00NS4wMy0xOS41My02MS41M3oiCiAgICAgc3R5bGU9ImZpbGw6I2ZmZiIKICAgICBpZD0icGF0aDgzNiIgLz4KPC9zdmc+Cg==',
		}
	};
	constructor(options={}) {
		let taskbar = this;
		$.extend(taskbar.options, options);
		$('body').append(nos.autoAppend(taskbar.elements));
		taskbar.listen();
		taskbar.startClock();
		taskbar.checkConnection();
		if(nos.System.isMobile()){
			taskbar.elements.search.el.css({display:'none'});
		}
		nos.System.addCSS('taskbar');
	}
	checkConnection(){
		let taskbar = this;
		$.getJSON( '/status/mongodb').done(function() {
			taskbar.elements.info.mongodb.el.attr('src',taskbar.icons.mongodb.success);
			taskbar.elements.info.mongodb.el.attr('title','Database connection established.');
		}).fail(function() {
			taskbar.elements.info.mongodb.el.attr('src',taskbar.icons.mongodb.error);
			taskbar.elements.info.mongodb.el.attr('title','Database connection failed.');
		});
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
