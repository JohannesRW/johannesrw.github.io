class Info {
	options={
		appname:'info',
		icon:'info',
		title:'Info',
		version:'0.0.1',
		resizable:false
	}
	constructor() {
		let app = this;
		app.win = new nos.Window(app.options);
		app.info();
	}
	info(){
		let app = this;
		app.win.content.center.el.html(
			'<h1>NOS</h1><h2>NodeOperatingSystem</h2>' +
			'<img src="assets/img/nos.png" width="75">' +
			'<p>Built with Node.JS, JQuery, Express and MongoDB</p>' +
			'<p>&copy; 2021 Johannes Hundt</p>');
	}
}
nos.System.AppSrc.info = Info;