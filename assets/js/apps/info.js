$$.Apps.src.info = class {
	options={
		appName:'info',
		title:'Info',
		version:'0.0.1',
		resizable:false,
		width:{current:500},
		height:{current:450},
		centerContent:true,
	};
	templates = {
		menu: {
			about:{title:'About',callback:()=>this.win.setContent(this.templates.about)},
			author:{title:'Author',callback:()=>this.win.setContent(this.templates.author)},
			github:{title:'GitHub',callback:()=>this.win.setContent(this.templates.github)}
		},
		about:
			`<img src="assets/img/nos.png" width="75" alt="Logo">
			<h3>NodeOperatingSystem</h3>
			<h4>v${$$.version}</h4>
			<p>Built with Node.JS, JQuery, Express and MongoDB</p>
			<p>&copy; 2022 Johannes Hundt</p>`,
		author:
			`<h2>Johannes Hundt</h2>
			<a href="mailto:hundt.johannes@gmail.com">hundt.johannes@gmail.com</a>`,
		github:
			`<img src="assets/img/github.png" width="300" alt="GitHub">
			<a href="//github.com/JohannesRW" target="_blank">JohannesRW@GitHub.com</a>`,
	}
	constructor(options={}) {
		let app = this;
		$.extend(true, app.options, options);
		app.win = new $$.Window(app.options);
		app.menu = new $$.Menu({},app.templates.menu,app);
		app.win.setLeft(app.menu.el);
		app.menu.clickFirst();
	}
}