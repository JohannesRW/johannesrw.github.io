let i18n = {
	title:'Contacts',
	file:'Contact',
	contact:{
		website:'Website',
		street:'Street',
		number:'Number',
		zip:'Zip',
		city:'City',
		email:'E-Mail',
		phone:'Phone',
		mobile:'Mobile',
		name:{
			first:'First name',
			last:'Last name',
		},
	},
	actions:{
		add:'Add',
		edit:'Edit',
		copy:'Copy',
		share:'Share',
		delete:'Delete'
	},
	save:'Save',
	saveCopy:'Save copy'
}

$$.Apps.src.contacts = class {
	options = {
		appname: 'contacts',
		title: i18n.title,
		version: '0.0.1',
		resizable: true,
		icon:'fa-duotone fa-address-book',
		iconColor:'#0095ff',
		width: {current: 700},
		height: {current: 600},
		hasRight: false,
	};
	elements={
		menu: [],
		ribbon: [
			{
				title:i18n.file,
				items:[
					{title:i18n.actions.add,icon:'fa-light fa-plus',callback:this.addContact},
					{title:i18n.actions.edit,icon:'fa-light fa-pen',callback:this.editContact},
					{title:i18n.actions.copy,icon:'fa-light fa-copy',callback:()=>this.editContact(null,true)},
					{title:i18n.actions.share,icon:'fa-light fa-share-nodes',callback:this.shareContact},
					{title:i18n.actions.delete,icon:'fa-light fa-xmark',callback:this.deleteContact},
				]
			}
		],
		form: {
			id:{
				type:'hidden'
			},
			name: {
				first: {
					label:i18n.contact.name.first,
					type:'text',
					name:'name[first]'
				},
				last: {
					label:i18n.contact.name.last,
					type:'text',
					name:'name[last]'
				}
			},
			website: {
				label:i18n.contact.website,
				type:'text'
			},
			private: {
				address: {
					groupStreet:{
						street: {
							label:i18n.contact.street,
							type:'text',
							name:'private[address][street]'
						},
						number: {
							label:i18n.contact.number,
							type:'text',
							name:'private[address][number]'
						}
					},
					groupCity:{
						zip: {
							label:i18n.contact.zip,
							type:'text',
							name:'private[address][zip]'
						},
						city: {
							label:i18n.contact.city,
							type:'text',
							name:'private[address][city]'
						}
					}
				},
				contact: {
					mail: {
						label:i18n.contact.email,
						type:'text',
						name:'private[contact][mail]'
					},
					phone: {
						label:i18n.contact.phone,
						type:'text',
						name:'private[contact][phone]'
					},
					mobile: {
						label:i18n.contact.mobile,
						type:'text',
						name:'private[contact][mobile]'
					}
				}
			}
		},
	}

	constructor(options = {}) {
		let app = this;
		$.extend(true, app.options, options);
		$$.Apps.addCSS('contacts');
		app.win = new $$.Window(app.options);
		app.getContacts();
	}
	init() {
		let app = this;
		app.setMenu();
		app.setRibbon();
	}

	getContacts() {
		let app = this;
		let url = '/contacts/list';
		if (!$$.System.database || !$$.USERID) { //USE DEMO DATA IF NO DB CONNECTION OR NO LOGIN
			url = '/demo/contacts.json';
		}
		$.getJSON(url).done(function (data) {
			app.contacts = data;
		}).always(function () {
			app.init();
		});
	}
	setMenu(){
		let app = this;
		app.elements.menu = [];
		$.each(app.contacts,function(key,contact){
			app.elements.menu[key] = {title:contact.name.first+' '+contact.name.last,callback:()=>app.setContact(contact)}
		})
		app.menu = new $$.Menu({},app.elements.menu,app);
		app.win.setLeft(app.menu.el);
	}
	setRibbon(){
		let app = this;
		app.ribbon = new $$.Ribbon({},app.elements.ribbon,app);
	}

	setContact(contact) {
		let app = this;
		app.current = contact;
		let content = '<h1>' + contact.name.first + ' ' + contact.name.last + '</h1>' +
			'<h3>'+i18n.file+'</h3>' +
			contact.private.address.street + ' ' + contact.private.address.number + '<br>' +
			contact.private.address.zip + ' ' + contact.private.address.city + '<br><br>' +
			(contact.private.contact.mail ? '<strong>'+i18n.contact.email+'</strong><br><a href="mailto:' + contact.private.contact.mail + '">' + contact.private.contact.mail + '</a><br>' : '') +
			(contact.private.contact.phone ? '<strong>'+i18n.contact.phone+'</strong><br><a href="tel:' + contact.private.contact.phone + '">' + contact.private.contact.phone + '</a><br>' : '') +
			(contact.private.contact.mobile ? '<strong>'+i18n.contact.mobile+'</strong><br><a href="tel:' + contact.private.contact.mobile + '">' + contact.private.contact.mobile + '</a><br>' : '');
		$.each(contact.jobs, function (key, job) {
			content += '<hr><h2>' + job.title + '</h2>' +
				job.address.company + '<br>' +
				job.address.street + ' ' + job.address.number + '<br>' +
				job.address.zip + ' ' + job.address.city + '<br><br>' +
				(job.contact.mail ? '<strong>'+i18n.contact.email+'</strong><br><a href="mailto:' + job.contact.mail + '">' + job.contact.mail + '</a><br>' : '') +
				(job.contact.phone ? '<strong>'+i18n.contact.phone+'</strong><br><a href="tel:' + job.contact.phone + '">' + job.contact.phone + '</a><br>' : '') +
				(job.contact.mobile ? '<strong>'+i18n.contact.mobile+'</strong><br><a href="tel:' + job.contact.mobile + '">' + job.contact.mobile + '</a><br>' : '');
		})
		app.win.setContent(content);
	}
	editContact(contact=null,copy=false){
		let app = this;
		contact = contact||app.current;
		if(!contact){return;}
		let formValues = {
			'id':!copy?contact._id:null,
			'name[first]':contact.name.first,
			'name[last]':contact.name.last,
			'website':contact.website,
			'private[address][street]':contact.private.address.street,
			'private[address][number]':contact.private.address.number,
			'private[address][zip]':contact.private.address.zip,
			'private[address][city]':contact.private.address.city,
			'private[contact][mail]':contact.private.contact.mail,
			'private[contact][phone]':contact.private.contact.phone,
			'private[contact][mobile]':contact.private.contact.mobile,
		}
		let options = {
			buttons:{
				save:{label:!copy?i18n.save:i18n.saveCopy,icon:'las la-save',callback:app.saveContact}
			}
		}
		app.form = new $$.Form(options,app.elements.form,app);
		app.form.set(formValues);
		app.win.setContent(app.form.el);
	}
	addContact(){
		let app = this;
		let options = {
			buttons:{
				save:{label:i18n.save,icon:'las la-save',callback:app.saveContact}
			}
		}
		app.form = new $$.Form(options,app.elements.form,app);
		app.win.setContent(app.form.el);
	}

	saveContact(){
		let app = this;
		console.log(app.form.serialize());
	}
	shareContact(){
		let app = this;
	}
	deleteContact(){
		let app = this;
	}
}