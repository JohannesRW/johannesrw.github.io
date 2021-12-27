export default class StartMenu {
	constructor() {
		let startmenu = this;
		$$.UI.Desktop.elements.el.append($$.Tools.autoAppend(startmenu.elements));
	}
	elements={
		el:$('<startmenu/>'),
		logout:{el:$('<logout/>')}
	}
	hide(){
		let startmenu = this;
		startmenu.elements.el.css({display:'none'});
	}
	show(){
		let startmenu = this;
		startmenu.elements.el.css({display:'flex'});
		$(document).one('click',function (event){
			startmenu.hide();
		})
	}
	add(icon='',title,appname){
		let startmenu = this;
		let item = {
			el: $('<item/>'),
			icon: {el:$('<i/>',{class:'$$-'+icon})},
			title: {el:$('<span/>',{html:title})}
		}
		item.el.append(item.icon.el);
		item.el.append(item.title.el);
		startmenu.elements.el.append($$.Tools.autoAppend(item));
		item.el.on('click',function(event){
			$$.Apps.run(appname);
		})
	}
	destroy(){
		let startmenu = this;
		startmenu.elements.el.remove();
		$$.System.removeCSS('startmenu');
	}
}
