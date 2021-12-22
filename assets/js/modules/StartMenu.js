export default class StartMenu {
	constructor() {
		let startmenu = this;
		startmenu.create();
	}
	create(){
		let startmenu = this;
		startmenu.el = $('<startmenu/>');
		nos.UI.Desktop.el.append(startmenu.el);
		nos.System.addCSS('startmenu');
		nos.System.log('Startmenu loaded');
	}
	hide(){
		let startmenu = this;
		startmenu.el.css({display:'none'});
	}
	show(){
		let startmenu = this;
		startmenu.el.css({display:'flex'});
		$(document).one('click',function (event){
			startmenu.hide();
		})
	}
	add(icon,title,appname,hash=false){
		let startmenu = this;
		let item = {
			el: $('<item/>'),
			icon: {el:$('<i/>',{class:'nos-'+icon})},
			title: {el:$('<span/>',{html:title})}
		}
		item.el.append(item.icon.el);
		item.el.append(item.title.el);
		startmenu.el.append(item.el);
		item.el.on('click',function(event){
			nos.Apps.run(appname,hash);
		})
	}
	destroy(){
		let startmenu = this;
		startmenu.el.remove();
		nos.System.removeCSS('startmenu');
		nos.System.log('Startmenu destroyed');
	}
}
