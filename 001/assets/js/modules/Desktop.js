export default class Desktop {
	constructor() {
		let desktop = this;
		desktop.create();
		nos.System.log('Desktop loaded');
	}
	create(){
		let desktop = this;
		desktop.el = $('<desktop/>');
		$('body').append(desktop.el);
	}
	width(){
		let desktop = this;
		return $('body').outerWidth();
	}
	height(){
		let desktop = this;
		return desktop.el.outerHeight();
	}
}
