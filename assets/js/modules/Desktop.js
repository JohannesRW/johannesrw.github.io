export default class Desktop {
	elements={
		el:$('<desktop/>')
	}
	constructor() {
		let desktop = this;
		$('body').append(nos.autoAppend(desktop.elements));
	}
	width(){
		let desktop = this;
		return $('body').outerWidth();
	}
	height(){
		let desktop = this;
		return desktop.elements.el.outerHeight();
	}
}
