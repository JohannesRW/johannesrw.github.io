nos.Apps.src.games = class Games {
	options={
		appname:'games',
		title:'Games',
		version:'0.0.1',
		status:false,
		resizable:false,
		maximized:true,
	}
	games = {
		holeio:'//hole-io.com/',
		slitherio:'//slither.io/',
		superhex:'//superhex.io/',
		paperio:'//paper-io.com/',
		amongus:'//amongusplay.online/'
	}
	menu = {
		el:$('<menu/>'),
		items:{
			holeio:{el:$('<item/>',{html:'Hole.io'})},
			slitherio:{el:$('<item/>',{html:'Slither.io'})},
			superhex:{el:$('<item/>',{html:'SuperHex.io'})},
			paperio:{el:$('<item/>',{html:'Paper.io'})},
			amongus:{el:$('<item/>',{html:'Among Us'})},
		}
	}
	constructor() {
		let app = this;
		app.win = new nos.Window(app.options);
		app.win.setLeft(nos.autoAppend(app.menu));
		app.listen();
		app.menu.items.holeio.el.click();
	}
	listen(){
		let app = this;
		$.each(app.menu.items,function(key,item){
			item.el.on('click',function(){
				app.menu.el.find('.active').removeClass('active');
				item.el.addClass('active');
				app.loadGame(app.games[key]);
			})
		})
	}
	loadGame(url){
		let app = this;
		app.win.setContent('<object width="100%" height="99%" data="'+url+'"></object>');
	}
}