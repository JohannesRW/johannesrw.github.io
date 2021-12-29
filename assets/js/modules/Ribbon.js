export default class Ribbon {
	options = {};
	elements={
		buttons:{},
		items:{}
	}
	items = {};
	constructor(options={},items={},app) {
		let ribbon = this;
		ribbon.app = app;
		ribbon.items = items;
		$.extend(true,ribbon.options, options);
		ribbon.build();
	}
	build() {
		let ribbon = this;
		ribbon.elements.buttons = {el: $('<menu/>')};
		$.each(ribbon.items,function(key,element){
			let buttonKey = '_'+key;
			ribbon.elements.buttons[buttonKey] = {el: $('<item/>', {html: element.title})};
			ribbon.elements.buttons[buttonKey].el.on('click',function(){ribbon.set(buttonKey)});
			ribbon.elements.items[buttonKey] = {el: $('<menu/>')};
			$.each(element.items,function(key,item){
				let itemKey = '_'+key;
				ribbon.elements.items[buttonKey][itemKey] = {el: $('<item/>', {html: item.title,'data-noactive':item.noActive||null}),callback:item.callback};
				if(item.icon){
					ribbon.elements.items[buttonKey][itemKey].el.prepend('<i class="'+item.icon+'"></i> ');
				}
			})
		})
		ribbon.app.win.setRibbonButtons($$.Tools.autoAppend(ribbon.elements.buttons));
		ribbon.set('_0');
	}
	set(key) {
		let ribbon = this;
		ribbon.elements.buttons.el.find('.active').removeClass('active');
		ribbon.elements.buttons[key].el.addClass('active');
		ribbon.elements.items[key].el.find('hr').remove();
		ribbon.app.win.setRibbonContent($$.Tools.autoAppend(ribbon.elements.items[key]));
		$.each(ribbon.elements.items[key],function(itemKey,item){
			if(itemKey === 'el'){return;}
			item.el.after('<hr>');
			item.el.on('click',function(){
				if(!item.el.attr('data-noactive')){
					ribbon.elements.items[key].el.find('.active').removeClass('active');
					item.el.addClass('active');
				}
				item.callback.call(ribbon.app)
			});
		})
	}
}

