import Desktop from "./Desktop.js";
import Taskbar from "./Taskbar.js";
import StartMenu from "./StartMenu.js";

export default class UI {
	zindex = 100;
	constructor() {
		let ui = this;
	}
	init(){
		let ui = this;
		ui.Desktop = new Desktop();
		ui.Taskbar = new Taskbar();
		ui.Startmenu = new StartMenu();
		nos.Apps.addToStartmenu();
	}
	get zindex(){
		let ui = this;
		return ++ui.zindex;
	}
}