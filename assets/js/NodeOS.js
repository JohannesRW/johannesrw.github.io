import {System,Apps} from './modules/Core.js';
import {Desktop,Taskbar,StartMenu} from './modules/UI.js';
import {Window,Ribbon,Form,Menu,Tools} from './modules/Runtime.js';

window.$$ = new class {
	version = '0.0.2';
	USERID = null;
	//core
	System = new System();
	Apps = new Apps();
	//ui components
	Desktop = new Desktop();
	Taskbar = new Taskbar();
	StartMenu = new StartMenu();
	//runtime
	Window = Window;
	Ribbon = Ribbon;
	Form = Form;
	Menu = Menu;
	Tools = Tools;

	init() {
		let os = this;
		//core
		os.System.init();
		os.Apps.init();
		//ui
		os.Desktop.init();
		os.Taskbar.init();
		os.StartMenu.init();
	}
}
$$.init();
