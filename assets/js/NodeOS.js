import System from './modules/System.js';
import UI from './modules/UI.js';
import Window from './modules/Window.js';
import User from "./modules/User.js";
import Apps from "./modules/Apps.js";
import Tools from "./modules/Tools.js";

window.$$ = new class {
	version = '0.0.2';
	USERID = null;
	System = new System();
	UI = new UI();
	Apps = new Apps();
	User = new User();
	Tools = Tools;
	Window = Window;

	constructor() {}
	init(){
		this.info();
		this.UI.init();
		this.System.init();
		this.Apps.init();
	}
	info(){
		this.System.log.info('NodeOS',{version:this.version,author:'<a href="//github.com/JohannesRW" target="_blank">Johannes Hundt</a>'});
	}
}
$$.init();
