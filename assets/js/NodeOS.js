import {System,Apps,User} from './modules/Core.js';
import {Desktop,Taskbar,StartMenu} from './modules/UI.js';
import {Window,Ribbon,Form,Menu,Tools,Alert} from './modules/Runtime.js';

window.$$ = new class {
	version = '0.0.2';
	//core
	System = new System();
	Apps = new Apps();
	User = new User();
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
	Alert = Alert;


	init() {
		let os = this;
		os.System.init();
		os.Desktop.init();
		os.Taskbar.init();
		os.StartMenu.init();
	}
}
$$.init();
