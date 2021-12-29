export default class Form {
	options = {};
	elements = {}
	items = {};
	input = {};
	constructor(options = {}, items = {}, app) {
		let form = this;
		form.app = app;
		form.items = items;
		$.extend(true, form.options, options);
		form.build();
		form.preventSubmit();
	}
	preventSubmit() {
		let form = this;
		form.elements.el.on('submit', function (e) {
			e.preventDefault();
			return false;
		})
	}
	serialize() {
		let form = this;
		return form.elements.el.serializeArray()
	}
	get() {
		let form = this;
		return $$.Tools.autoAppend(form.elements);
	}
	build() {
		let form = this;
		form.elements.el = form.el = $('<form/>');
		form.elements.el.append(form.getInputs(form.items));
		if (form.options.buttons) {
			form.buildButtons();
		}
	}
	buildButtons() {
		let form = this;
		$.each(form.options.buttons, function (key, button) {
			let el = $('<button/>', {html: button.label});
			if (button.icon) {
				el.prepend('<i class="' + button.icon + '"></i> ');
			}
			el.on('click', function () {
				button.callback.call(form.app);
			});
			form.el.append(el)
		})
	}
	getInputs(obj, groupKey = 'root') {
		let form = this;
		let group = $('<group/>', {'data-group': groupKey});
		$.each(obj, function (key, item) {
			if (item.type) {
				if (groupKey !== 'root') {
					group.attr('data-hasinputgroups', true)
				}
				;
				let inputGroup = $('<group/>', {'data-group': key, 'data-hasinputs': true});
				let label = $('<label/>', {html: item.label ?? ''});
				let input = $('<input/>', {type: item.type, name: item.name ?? key, value: item.value ?? null});
				inputGroup.append(label);
				inputGroup.append(input);
				group.append(inputGroup);
				form.input[item.name ?? key] = input;
			} else {
				group.append(form.getInputs(item, key));
			}
		})
		return group;
	}
	set(name, value = null) {
		let form = this;
		if (typeof (name) === 'object') {
			$.each(name, function (_name, _value) {
				if (form.input[_name]) {
					form.input[_name].val(_value);
				}
			})
		} else {
			if (form.input[name]) {
				form.input[name].val(value);
			}
		}
	}
	reset() {
		let form = this;
		form.elements.trigger('reset');
	}
}

