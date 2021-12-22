import System from './modules/System.js';
import UI from './modules/UI.js';
import Window from './modules/Window.js';
import User from "./modules/User.js";
import Apps from "./modules/Apps.js";

window.nos = new class NodeOS {
	version = '0.0.1';
	constructor() {
		let nos = this;
		nos.System = new System();
		nos.UI = new UI();
		nos.Apps = new Apps();
		nos.Window = Window;
		nos.User = new User();
		nos.System.log('NodeOS v'+this.version);
	}
	init(){
		nos.UI.init();
		//nos.Apps.run('calc');
	}
}
nos.init();

