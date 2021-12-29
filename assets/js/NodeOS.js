import System from './modules/System.js';
import UI from './modules/UI.js';
import Apps from "./modules/Apps.js";
import Tools from "./modules/Tools.js";
import Window from './modules/Window.js';
import Ribbon from './modules/Ribbon.js';
import Form from './modules/Form.js';
import Menu from './modules/Menu.js';

window.$$ = new class {
	version = '0.0.2';
	USERID = null;
	Window = Window;
	Ribbon = Ribbon;
	Form = Form;
	Menu = Menu;
	Tools = Tools;
	System = new System();
	UI = new UI();
	Apps = new Apps();
	constructor() {
	}
	init() {
		this.info();
		this.UI.init();
		this.System.init();
		this.Apps.init();
	}
	info() {
		this.System.log.info('NodeOS', {
			version: this.version,
			author: '<a href="//github.com/JohannesRW" target="_blank">Johannes Hundt</a>'
		});
	}
}
$$.init();
