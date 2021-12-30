$$.Apps.src.settings = class {
	options={
		appname:'settings',
		icon:'fa-solid fa-gear',
		invertIcon:0.5,
		title:'Settings',
		version:'0.0.1',
		hasRight: false
	}
	constructor(options={}) {
		let app = this;
		$.extend(true,app.options, options);
		app.win = new $$.Window(app.options);
	}
}