class Settings {
	options={
		appname:'settings',
		icon:'settings',
		title:'Settings',
		version:'0.0.1',
	}
	constructor() {
		let app = this;
		app.win = new nos.Window(app.options);
		app.info();
	}
	info(){
		let app = this;
		app.win.content.center.el.html('<h1>NOS</h1><h2>Settings</h2>');
	}
	exit(){
		let app = this;
		nos.System.log(app.options.appname+' exited');
	}
}
nos.System.AppSrc.settings = Settings;