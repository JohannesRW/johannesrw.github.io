nos.Apps.src.logs = class {
	options={
		appname:'logs',
		title:'Logs',
		version:'0.0.1',
		resizable:true,
		minimized:true,
		icon:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyBYNiAtLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCINCnZpZXdCb3g9IjAgMCA1MDAgNTAwIg0KIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiA8ZGVmcz4NCiAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCiAgIDwhW0NEQVRBWw0KICAgIC5maWwxIHtmaWxsOiMwMDgzREJ9DQogICAgLmZpbDAge2ZpbGw6IzAwOTlGRn0NCiAgICAuZmlsMyB7ZmlsbDojRDhEOEQ4fQ0KICAgIC5maWwyIHtmaWxsOiNGMkYyRjJ9DQogICBdXT4NCiAgPC9zdHlsZT4NCiA8L2RlZnM+DQogPGcgaWQ9IkxheWVyX3gwMDIwXzEiPg0KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPg0KICA8cGF0aCBjbGFzcz0iZmlsMCIgZD0iTTI1MCAyMGwwIDAgMCA0NjAgMCAwYy0xMjcsMCAtMjMwLC0xMDMgLTIzMCwtMjMwIDAsLTEyNyAxMDMsLTIzMCAyMzAsLTIzMHoiLz4NCiAgPHBhdGggY2xhc3M9ImZpbDEiIGQ9Ik0yNTAgMjBsMCAwIDAgNDYwIDAgMGMxMjcsMCAyMzAsLTEwMyAyMzAsLTIzMCAwLC0xMjcgLTEwMywtMjMwIC0yMzAsLTIzMHoiLz4NCiAgPHBhdGggY2xhc3M9ImZpbDIiIGQ9Ik0yNDUgODVjMjAsMCAzNywxNyAzNywzNyAwLDIwIC0xNywzNiAtMzcsMzYgLTIwLDAgLTM2LC0xNiAtMzYsLTM2IDAsLTIwIDE2LC0zNyAzNiwtMzd6bS01OCAzMTFjMjEsMCAzNSwtNCAzNSwtMjlsMCAtMTM4YzAsLTI0IC0xNCwtMjkgLTM1LC0yOWwtMiAwIDAgLTE5IDkzIDAgMCAxODRjMCwyNSAxMywzMSAzNSwzMWw2IDAgMCAxOSAtMTM4IDAgMCAtMTkgNiAweiIvPg0KICA8cGF0aCBjbGFzcz0iZmlsMyIgZD0iTTI1MCA4NmwwIDcyYzE4LC0yIDMyLC0xOCAzMiwtMzYgMCwtMTkgLTE0LC0zNCAtMzIsLTM2em0wIDk1bDAgMjM0IDY5IDAgMCAtMTkgLTYgMGMtMjIsMCAtMzUsLTYgLTM1LC0zMWwwIC0xODQgLTI4IDB6Ii8+DQogPC9nPg0KPC9zdmc+DQo=",
		width:{current:500},
		height:{current:450},
	};
	menu={
		el:$('<menu/>'),
		items:{
			info:{el:$('<item/>')},
			debug:{el:$('<item/>')},
			success:{el:$('<item/>')},
			warn:{el:$('<item/>')},
			error:{el:$('<item/>')},
		}
	}
	current = 'info';
	constructor() {
		let app = this;
		app.win = new nos.Window(app.options);
		app.win.setLeft(nos.autoAppend(app.menu));
		nos.Apps.addCSS('logs');
		app.listen();
		app.update();
	}
	update(){
		let app = this;
		app.logs = nos.System.getLogs();
		app.menu.items.info.el.html('Info <badge>'+app.logs.info.length+'</badge>');
		app.menu.items.debug.el.html('Debug <badge>'+app.logs.debug.length+'</badge>');
		app.menu.items.success.el.html('Success <badge>'+app.logs.success.length+'</badge>');
		app.menu.items.warn.el.html('Warn <badge>'+app.logs.warn.length+'</badge>');
		app.menu.items.error.el.html('Error <badge>'+app.logs.error.length+'</badge>');
		app.menu.items[app.current].el.click();
	}
	listen(){
		let app = this;
		$.each(app.menu.items,function(key,item){
			item.el.on('click',function(){
				app.menu.el.find('.active').removeClass('active');
				item.el.addClass('active');
				app.current = key;
				app.win.setContent();
				$.each(app.logs[key],function(index,log){
					app.win.addContent('<pre class="'+key+'">'+log.msg+'<date>'+log.date+' '+log.time+'</date></pre><hr>');
				})
			})
		})
	}
}