$$.Apps.src.games = class {
	options={
		appname:'games',
		title:'Games',
		version:'0.0.1',
		icon:'fa-duotone fa-gamepad-modern',
		iconColor:'#91ff00',
		status:false,
		resizable:true,
		maximized:true,
		hasRight: false
	}
	elements={
		menu: [
			{title:'Hole.io',callback:()=>this.setGame('//hole-io.com/')},
			{title:'Slither.io',callback:()=>this.setGame('//slither.io/')},
			{title:'SuperHex.io',callback:()=>this.setGame('//superhex.io/')},
			{title:'Paper.io',callback:()=>this.setGame('//paper-io.com/')},
			{title:'Among Us',callback:()=>this.setGame('//amongusplay.online/')}
		]
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
		app.menu = new $$.Menu({},app.elements.menu,app);
		app.win.setLeft(app.menu.el);
	}
	setGame(url){
		let app = this;
		app.win.setContent('<object width="100%" height="99%" data="'+url+'"></object>');
	}
}