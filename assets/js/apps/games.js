$$.Apps.src.games = class {
	options={
		appname:'games',
		title:'Games',
		version:'0.0.1',
		iconColor:'#91ff00',
		status:false,
		resizable:true,
		maximized:true,
	}
	templates={
		menu: {
			holeio: {title: 'Hole.io', callback: () => this.setGame('//hole-io.com/')},
			slitherio: {title: 'Slither.io', callback: () => this.setGame('//slither.io/')},
			superhexio: {title: 'SuperHex.io', callback: () => this.setGame('//superhex.io/')},
			paperio: {title: 'Paper.io', callback: () => this.setGame('//paper-io.com/')},
			amongus: {title: 'Among Us', callback: () => this.setGame('//amongusplay.online/')}
		}
	}
	constructor(options={}) {
		let app = this;
		$.extend(true,app.options, options);
		app.win = new $$.Window(app.options);
		app.init();
	}
	init(){
		let app = this;
		app.setMenu();
	}
	setMenu(){
		let app = this;
		app.menu = new $$.Menu({},app.templates.menu,app);
		app.win.setLeft(app.menu.el);
	}
	setGame(url){
		let app = this;
		app.win.setContent('<object width="100%" height="99%" data="'+url+'"></object>');
	}
}