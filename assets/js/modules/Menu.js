export default class Menu {
	options = {
		search:true,
	};
	elements={}
	items = {};
	constructor(options={},items={},app) {
		let menu = this;
		menu.app = app;
		menu.items = items;
		$.extend(true,menu.options, options);
		menu.build();
	}
	build() {
		let menu = this;
		menu.elements.el = menu.el = $('<menu/>');
		if(menu.options.search){
			menu.elements.search = {el: $('<input>', {type: 'text', class: 'search'})};
			menu.elements.el.append(menu.elements.search.el);
			menu.elements.search.el.on('keyup', function () {
				menu.search($(this).val());
			})
		}
		$.each(menu.items,function(key,item){
			let searchVal = item.search??item.title.replace(' ','').toLowerCase();
			menu.elements[key] = {el:$('<item/>', {html: item.title,'data-search':searchVal})};
			if(item.icon){
				menu.elements[key].el.prepend('<i class="'+item.icon+'"></i> ');
			}
			menu.elements.el.append(menu.elements[key].el);
			menu.elements[key].el.on('click',function(){
				menu.elements.el.find('.active').removeClass('active');
				menu.elements[key].el.addClass('active');
				item.callback.call(menu.app);
			});
		})
	}
	search(query) {
		let menu = this;
		let items = menu.elements.el.find('item');
		let count = items.length;
		let showing = 0;
		let clicked = false;
		query = query.replace(' ','').toLowerCase();
		$.each(items,function(key,item){
			item = $(item);
			if (item.data('search').search(query) !== -1) {
				item.css({display: 'flex'});
				if(!clicked){
					item.click();
					clicked=true;
				}
				showing++;
			} else {
				item.css({display: 'none'});
			}
		})
		menu.app.win.setStatus('Showing ' + showing + ' of ' + count + ' Items');
	}
}

