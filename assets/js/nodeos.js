import System from './modules/System.js';
import UI from './modules/UI.js';
import Window from './modules/Window.js';
import User from "./modules/User.js";
import Apps from "./modules/Apps.js";

window.nos = new class {
	version = '0.0.2';
	constructor() {
		let nos = this;
		nos.System = new System();
		nos.UI = new UI();
		nos.Apps = new Apps();
		nos.Window = Window;
		nos.User = new User();
	}
	init(){
		nos.System.log.info('<strong>NodeOS</strong><br>version		'+this.version+'<br>author		<a href="//github.com/JohannesRW" target="_blank">Johannes Hundt</a>');
		nos.UI.init();
		nos.System.checkConnection();
		nos.Apps.addToStartmenu();
		nos.autoStart();
	}
	autoStart(){
		nos.Apps.run('logs','49ab655fa0c61a561872e176e97b2318');
	}
	autoAppend(obj,parentElement=false){
		let returnElement = obj.el||parentElement;
		$.each(obj,function(key,element){
			if(key!=='el'){
				returnElement.append(nos.autoAppend(element,returnElement));
			}
		})
		return returnElement;
	}
}
nos.init();

