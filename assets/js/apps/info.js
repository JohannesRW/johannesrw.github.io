$$.Apps.src.info = class {
	options={
		appname:'info',
		title:'Info',
		version:'0.0.1',
		resizable:false,
		width:{current:500},
		height:{current:450},
		centerContent:true,
	};
	content = {
		about:'<img src="assets/img/nos.png" width="75"><h3>NodeOperatingSystem</h3><h4>v'+$$.version+'</h4><p>Built with Node.JS, JQuery, Express and MongoDB</p><p>&copy; 2022 Johannes Hundt</p>',
		author:'<h2>Johannes Hundt</h2><a href="mailto:hundt.johannes@gmail.com">hundt.johannes@gmail.com</a>',
		github:'<a href="//github.com/JohannesRW" target="_blank"><img src="assets/img/github.png" width="80%">JohannesRW@GitHub.com</a>',
	};
	elements={
		menu: {
			about:{title:'About',callback:()=>this.setContent('about')},
			author:{title:'Author',callback:()=>this.setContent('author')},
			github:{title:'GitHub',callback:()=>this.setContent('github')}
		}
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
		app.menu.set('about');
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