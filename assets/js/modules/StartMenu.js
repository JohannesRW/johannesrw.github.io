export default class StartMenu {
	constructor() {
		let startmenu = this;
		nos.UI.Desktop.elements.el.append(nos.autoAppend(startmenu.elements));
	}
	elements={
		el:$('<startmenu/>')
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
			icon: {el:$('<i/>',{class:'nos-'+icon})},
			title: {el:$('<span/>',{html:title})}
		}
		item.el.append(item.icon.el);
		item.el.append(item.title.el);
		startmenu.elements.el.append(nos.autoAppend(item));
		item.el.on('click',function(event){
			nos.Apps.run(appname);
		})
	}
	destroy(){
		let startmenu = this;
		startmenu.elements.el.remove();
		nos.System.removeCSS('startmenu');
	}
}
