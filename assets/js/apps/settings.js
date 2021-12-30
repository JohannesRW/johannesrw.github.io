$$.Apps.src.settings = class {
	options={
		appname:'settings',
		invertIcon:0.5,
		title:'Settings',
		version:'0.0.1',
	}
	constructor(options={}) {
		let app = this;
		$.extend(true,app.options, options);
		app.win = new $$.Window(app.options);
	}
}