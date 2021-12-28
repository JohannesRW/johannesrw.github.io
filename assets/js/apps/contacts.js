$$.Apps.src.contacts = class {
	options={
		appname:'contacts',
		title:'Contacts',
		version:'0.0.1',
		resizable:true,
		icon:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyBYNiAtLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCINCnZpZXdCb3g9IjAgMCA1MDAgNTAwIg0KIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiA8ZGVmcz4NCiAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCiAgIDwhW0NEQVRBWw0KICAgIC5maWwxIHtmaWxsOiMwMDgzREJ9DQogICAgLmZpbDAge2ZpbGw6IzAwOTlGRn0NCiAgICAuZmlsMyB7ZmlsbDojRDhEOEQ4fQ0KICAgIC5maWwyIHtmaWxsOiNGMkYyRjJ9DQogICBdXT4NCiAgPC9zdHlsZT4NCiA8L2RlZnM+DQogPGcgaWQ9IkxheWVyX3gwMDIwXzEiPg0KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPg0KICA8cGF0aCBjbGFzcz0iZmlsMCIgZD0iTTI1MCAyMGwwIDAgMCA0NjAgMCAwYy0xMjcsMCAtMjMwLC0xMDMgLTIzMCwtMjMwIDAsLTEyNyAxMDMsLTIzMCAyMzAsLTIzMHoiLz4NCiAgPHBhdGggY2xhc3M9ImZpbDEiIGQ9Ik0yNTAgMjBsMCAwIDAgNDYwIDAgMGMxMjcsMCAyMzAsLTEwMyAyMzAsLTIzMCAwLC0xMjcgLTEwMywtMjMwIC0yMzAsLTIzMHoiLz4NCiAgPHBhdGggY2xhc3M9ImZpbDIiIGQ9Ik0yNDUgODVjMjAsMCAzNywxNyAzNywzNyAwLDIwIC0xNywzNiAtMzcsMzYgLTIwLDAgLTM2LC0xNiAtMzYsLTM2IDAsLTIwIDE2LC0zNyAzNiwtMzd6bS01OCAzMTFjMjEsMCAzNSwtNCAzNSwtMjlsMCAtMTM4YzAsLTI0IC0xNCwtMjkgLTM1LC0yOWwtMiAwIDAgLTE5IDkzIDAgMCAxODRjMCwyNSAxMywzMSAzNSwzMWw2IDAgMCAxOSAtMTM4IDAgMCAtMTkgNiAweiIvPg0KICA8cGF0aCBjbGFzcz0iZmlsMyIgZD0iTTI1MCA4NmwwIDcyYzE4LC0yIDMyLC0xOCAzMiwtMzYgMCwtMTkgLTE0LC0zNCAtMzIsLTM2em0wIDk1bDAgMjM0IDY5IDAgMCAtMTkgLTYgMGMtMjIsMCAtMzUsLTYgLTM1LC0zMWwwIC0xODQgLTI4IDB6Ii8+DQogPC9nPg0KPC9zdmc+DQo=",
		width:{current:700},
		height:{current:600},
		hasRight: false,
	};
	menu={
		el:$('<menu/>'),
		search:{
			el:$('<input>',{type:'text',class:'search'})
		},
		items:{}
	}
	ribbons={
		buttons:{
			el:$('<menu/>'),
			contact:{el:$('<item/>',{html:'Contact'})}
		},
		content:{
			contact:{
				el:$('<menu/>'),
				add:{el:$('<item/>',{html:'<i class="las la-user-plus"></i> Add'})},
				hr:{el:$('<hr/>')},
				edit:{el:$('<item/>',{html:'<i class="las la-user-edit"></i> Edit'})},
				share:{el:$('<item/>',{html:'<i class="las la-id-badge"></i> Share'})},
				delete:{el:$('<item/>',{html:'<i class="las la-user-times"></i> Delete'})}
			}
		}
	}
	constructor(options={}) {
		let app = this;
		$.extend(true,app.options, options);
		app.win = new $$.Window(app.options);
		$$.Apps.addCSS('contacts');
		app.getContacts();
	}
	getContacts(){
		let app = this;
		let url = '/contacts/list';
		if(!$$.System.database||!$$.USERID){url = '/demo/contacts.json';}//USE DEMO DATA IF NO DB CONNECTION OR NO LOGIN
		$.getJSON(url).done(function(data) {
			app.contacts = data;
		}).always(function() {
			app.init();
		});
	}
	init(){
		let app = this;
		app.generateMenu();
		app.generateRibbons();
		app.listen();
		app.menu.items[Object.keys(app.menu.items)[0]].el.click();
	}
	search(query){
		let app = this;
		let count = 0;
		query = query.replace(' ','').toLowerCase();
		$.each(app.menu.items,function(key,item){
			let contact = app.contacts[key];
			let compare = (contact.name.first+contact.name.last).replace(' ','').toLowerCase();
			if(compare.search(query) !== -1){
				item.el.css({display:'flex'});
				count++;
			}
			else {
				item.el.css({display:'none'});
			}
		});
		return count;
	}
	generateRibbons(){
		let app = this;
		app.win.setRibbonButtons($$.Tools.autoAppend(app.ribbons.buttons));
		app.setRibbon('contact');
	}
	setRibbon(key){
		let app = this;
		app.ribbons.buttons.el.find('.active').removeClass('active');
		app.ribbons.buttons[key].el.addClass('active');
		app.win.setRibbonContent($$.Tools.autoAppend(app.ribbons.content[key]));
		app.listen();
	}
	generateMenu(){
		let app = this;
		$.each(app.contacts,function(key,contact){
			app.menu.items[key]={el:$('<item/>',{html:contact.name.first+' '+contact.name.last})};
		})
		app.win.setLeft($$.Tools.autoAppend(app.menu));
	}
	setContent(contact){
		let app = this;
		let content = '<h1>'+contact.name.first+' '+contact.name.last+'</h1>'+
			'<h3>Kontakt</h3>'+
			contact.private.address.street+' '+contact.private.address.number+'<br>' +
			contact.private.address.zip+' '+contact.private.address.city+'<br><br>' +
			(contact.private.contact.mail?'<strong>E-Mail</strong><br><a href="mailto:'+contact.private.contact.mail+'">'+contact.private.contact.mail+'</a><br>':'')+
			(contact.private.contact.phone?'<strong>Phone</strong><br><a href="tel:'+contact.private.contact.phone+'">'+contact.private.contact.phone+'</a><br>':'')+
			(contact.private.contact.mobile?'<strong>Mobile</strong><br><a href="tel:'+contact.private.contact.mobile+'">'+contact.private.contact.mobile+'</a><br>':'');
		$.each(contact.jobs,function(key,job){
			content += '<hr><h2>'+job.title+'</h2>' +
				job.address.company+'<br>' +
				job.address.street+' '+job.address.number+'<br>' +
				job.address.zip+' '+job.address.city+'<br><br>' +
				(job.contact.mail?'<strong>E-Mail</strong><br><a href="mailto:'+job.contact.mail+'">'+job.contact.mail+'</a><br>':'')+
				(job.contact.phone?'<strong>Phone</strong><br><a href="tel:'+job.contact.phone+'">'+job.contact.phone+'</a><br>':'')+
				(job.contact.mobile?'<strong>Mobile</strong><br><a href="tel:'+job.contact.mobile+'">'+job.contact.mobile+'</a><br>':'');
		})
		app.win.setContent(content);
	}
	listen(){
		let app = this;
		$.each(app.menu.items,function(key,item){
			item.el.on('click',function(){
				app.menu.el.find('.active').removeClass('active');
				item.el.addClass('active');
				app.current = key;
				app.setContent(app.contacts[key]);
			})
		});
		$.each(app.ribbons.buttons,function(key,item){
			if(!item.el){return;}
			item.el.on('click',function(){
				app.setRibbon(key);
			})
		});
		app.menu.search.el.on('keyup',function(){
			let count = app.search($(this).val());
			app.win.setStatus('Showing '+count+' of '+Object.keys(app.menu.items).length+' Items');
		})
	}
}