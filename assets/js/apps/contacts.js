$$.Apps.src.contacts = class {
	options = {
		appName: 'contacts',
		title: 'Contacts',
		version: '0.0.1',
		resizable: true,
		iconColor: '#0095ff',
		width: {current: 700},
		height: {current: 600},
	};
	templates = {
		contactDetails:(contact)=>`<h1>${contact.name.first} ${contact.name.last}</h1>
			<h3>Contact</h3>
			${contact.private.address.street} ${contact.private.address.number}<br>
			${contact.private.address.zip} ${contact.private.address.city}<br><br>
			${contact.private.contact.mail?`<strong>E-Mail</strong><br><a href="mailto:${contact.private.contact.mail}">${contact.private.contact.mail}</a><br>`:''}
			${contact.private.contact.phone?`<strong>Phone</strong><br><a href="tel:${contact.private.contact.phone}">${contact.private.contact.phone}</a><br>`:''}
			${contact.private.contact.mobile?`<strong>Mobile</strong><br><a href="tel:${contact.private.contact.mobile}">${contact.private.contact.mobile}</a><br>`:''}
			${Object.keys(contact.jobs).map(function (key) {
				return `<hr><h2>${contact.jobs[key].title}</h2>
				${contact.jobs[key].address.company}<br>
				${contact.jobs[key].address.street} ${contact.jobs[key].address.number}<br>
				${contact.jobs[key].address.zip} ${contact.jobs[key].address.city}<br><br>
				${contact.jobs[key].contact.mail?`<strong>E-Mail</strong><br><a href="mailto:${contact.jobs[key].contact.mail}">${contact.jobs[key].contact.mail}</a><br>`:''}
				${contact.jobs[key].contact.phone?`<strong>Phone</strong><br><a href="tel:${contact.jobs[key].contact.phone}">${contact.jobs[key].contact.phone}</a><br>`:''}
				${contact.jobs[key].contact.mobile?`<strong>Mobile</strong><br><a href="tel:${contact.jobs[key].contact.mobile}">${contact.jobs[key].contact.mobile}</a><br>`:''}`;
			}).join('')}`,
		ribbon: {
			contact: {
				title: 'Contact',
				items: {
					add: {title: 'Add', icon: 'fa-light fa-plus', callback: this.addContact},
					edit: {title: 'Edit', icon: 'fa-light fa-pen', callback: this.editContact},
					copy: {title: 'Copy', icon: 'fa-light fa-copy', callback: () => this.editContact(null, true)},
					share: {title: 'Share', icon: 'fa-light fa-share-nodes', callback: this.shareContact},
					delete: {title: 'Delete', noActive:true,icon: 'fa-light fa-xmark', callback: this.confirmDelete},
				}
			}
		},
		form: {
			_id: {
				type: 'hidden'
			},
			name: {
				first: {
					label: 'First name',
					type: 'text',
					name: 'name.first'
				},
				last: {
					label: 'Last name',
					type: 'text',
					name: 'name.last'
				}
			},
			website: {
				label: 'Website',
				type: 'text'
			},
			private: {
				address: {
					groupStreet: {
						street: {
							label: 'Street',
							type: 'text',
							name: 'private.address.street'
						},
						number: {
							label: 'Number',
							type: 'text',
							name: 'private.address.number'
						}
					},
					groupCity: {
						zip: {
							label: 'Zip',
							type: 'text',
							name: 'private.address.zip'
						},
						city: {
							label: 'City',
							type: 'text',
							name: 'private.address.city'
						}
					}
				},
				contact: {
					mail: {
						label: 'Mail',
						type: 'text',
						name: 'private.contact.mail'
					},
					phone: {
						label: 'Phone',
						type: 'text',
						name: 'private.contact.phone'
					},
					mobile: {
						label: 'Mobile',
						type: 'text',
						name: 'private.contact.mobile'
					}
				}
			}
		}
	}
	constructor(options = {}) {
		let app = this;
		$.extend(true, app.options, options);
		$$.Apps.addCSS('contacts');
		app.win = new $$.Window(app.options);
		app.ribbon = new $$.Ribbon({}, app.templates.ribbon, app);
		app.getContacts();
		app.disableRibbonElements();
	}
	getContacts() {
		let app = this;
		let url = ($$.System.database && $$.User.id)?'/contacts/list':'/demo/contacts.json';
		$.getJSON(url).done(function (data) {
			app.contacts = data;
			app.setMenu();
		}).fail(function () {
			app.win.close();
		});
	}
	setMenu() {
		let app = this;
		app.templates.menu = {};
		$.each(app.contacts, function (key, contact) {
			app.templates.menu[key] = {
				title: `${contact.name.first} ${contact.name.last}`,
				callback: () => app.setContact(contact)
			}
		})
		app.menu = new $$.Menu({sorted:true}, app.templates.menu, app);
		app.win.setLeft(app.menu.el);
	}
	disableRibbonElements(){
		let app = this;
		app.ribbon.elements.items.contact.edit.el.attr('disabled',true);
		app.ribbon.elements.items.contact.copy.el.attr('disabled',true);
		app.ribbon.elements.items.contact.share.el.attr('disabled',true);
		app.ribbon.elements.items.contact.delete.el.attr('disabled',true);
	}
	enableRibbonElements(editable=true){
		let app = this;
		if(editable){
			app.ribbon.elements.items.contact.edit.el.attr('disabled',false);
			app.ribbon.elements.items.contact.share.el.attr('disabled',false);
			app.ribbon.elements.items.contact.delete.el.attr('disabled',false);
		}
		app.ribbon.elements.items.contact.copy.el.attr('disabled',false);
	}
	setContact(contact) {
		let app = this;
		let editable = contact.permissions.owner===$$.User.id;
		app.current = contact;
		app.ribbon.clearActive();
		app.win.setContent(app.templates.contactDetails(contact));
		app.enableRibbonElements(editable);
	}
	editContact(contact = null, copy = false) {
		let app = this;
		contact = contact || app.current;
		if (!contact) {
			return;
		}
		let formValues = {
			'_id': !copy ? contact._id : null,
			'name.first': contact.name.first,
			'name.last': contact.name.last,
			'website': contact.website,
			'private.address.street': contact.private.address.street,
			'private.address.number': contact.private.address.number,
			'private.address.zip': contact.private.address.zip,
			'private.address.city': contact.private.address.city,
			'private.contact.mail': contact.private.contact.mail,
			'private.contact.phone': contact.private.contact.phone,
			'private.contact.mobile': contact.private.contact.mobile,
		}
		let options = {
			buttons: {
				save: {label: !copy ? 'Save' : 'Save copy', callback: app.saveContact}
			}
		}
		app.form = new $$.Form(options, app.templates.form, app);
		app.form.set(formValues);
		app.win.setContent(app.form.el);
	}
	addContact() {
		let app = this;
		let options = {
			buttons: {
				save: {label: 'Save', callback: app.saveContact}
			}
		}
		app.form = new $$.Form(options, app.templates.form, app);
		app.win.setContent(app.form.el);
	}
	saveContact() {
		let app = this;
		if (!$$.System.database || !$$.User.id) {return;}
		let url = 'contacts/save/';
		let formData = app.form.serialize();
		if(formData._id){
			url += formData._id;
		}
		delete formData._id;
		$.post(url,formData,function(data){
			app.contacts[data._id] = data;
			app.setMenu();
			app.menu.set(data._id);
		})
	}
	shareContact() {
		$$.NotImplemented('Share Contact');
	}
	confirmDelete() {
		let app = this;
		let contact = app.current;
		new $$.Alert({
			type:'delete',
			msg:'Permanently delete this contact?<br>'+contact.name.first+' '+contact.name.last,
			callback:()=>app.deleteContact(app.current),
		});
	}
	deleteContact(contact){
		let app = this;
		if (!$$.System.database || !$$.User.id) {return;}
		let url = 'contacts/delete/'+contact._id;
		$.get(url,function(){
			delete app.contacts[contact._id];
			app.setMenu();
			app.menu.clickFirst();
		})
	}
}