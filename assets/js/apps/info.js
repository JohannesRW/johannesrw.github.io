$$.Apps.src.info = class {
	options={
		appname:'info',
		title:'Info',
		version:'0.0.1',
		resizable:false,
		icon:'fa-duotone fa-circle-info',
		width:{current:500},
		height:{current:450},
		hasRight: false
	};
	content = {
		about:'<h1>NOS</h1><h4>v'+$$.version+'</h4><img src="assets/img/nos.png" width="75"><h3>NodeOperatingSystem</h3><p>Built with Node.JS, JQuery, Express and MongoDB</p><p>&copy; 2021 Johannes Hundt</p>',
		author:'<h2>Johannes Hundt</h2><a href="mailto:hundt.johannes@gmail.com">hundt.johannes@gmail.com</a>',
		github:'<a href="//github.com/JohannesRW" target="_blank"><img src="assets/img/github.png" width="80%">JohannesRW@GitHub.com</a>',
	};
	elements={
		menu: [
			{title:'About',callback:()=>this.setContent('about')},
			{title:'Author',callback:()=>this.setContent('author')},
			{title:'GitHub',callback:()=>this.setContent('github')},
		]
	}
	constructor(options={}) {
		let app = this;
		$.extend(true, app.options, options);
		app.win = new $$.Window(app.options);
		app.init();
	}
	init(){
		let app = this;
		app.setMenu();
		app.setContent('about');
	}
	setMenu(){
		let app = this;
		app.menu = new $$.Menu({},app.elements.menu,app);
		app.win.setLeft(app.menu.el);
	}
	setContent(key){
		let app = this;
		app.win.setContent(app.content[key]);
	}
}