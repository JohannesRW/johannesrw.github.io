class Games {
	options={
		appname:'games',
		title:'Games',
		version:'0.0.1',
		status:false,
		resizable:false,
		maximized:true,
	}
	constructor() {
		let app = this;
		app.win = new nos.Window(app.options);
		app.setMenu();
		app.listen();
	}
	listen(){
		let app = this;
		$.each(app.games,function(key,game){
			game.el.on('click',function(){
				app.loadGame(game.url);
			})
		})
	}
	loadGame(url){
		let app = this;
		app.win.content.center.el.html('<object width="100%" height="99%" data="'+url+'"></object>');
	}
	setMenu(){
		let app = this;
		app.games = [
			{url:'//hole-io.com/',el:$('<item/>',{html:'Hole.io'})},
			{url:'//slither.io/',el:$('<item/>',{html:'Slither.io'})},
			{url:'//superhex.io/',el:$('<item/>',{html:'Superhex.io'})},
			{url:'//paper-io.com/',el:$('<item/>',{html:'Paper.io'})},
			{url:'//amongusplay.online/',el:$('<item/>',{html:'Among Us'})},
		]
		$.each(app.games,function(key,game){
			app.win.setLeft(game.el);
		})
	}
}
nos.Apps.src.games = Games;