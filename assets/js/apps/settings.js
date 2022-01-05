$$.Apps.src.settings = class {
	options={
		appName:'settings',
		invertIcon:0.5,
		title:'Settings',
		version:'0.0.1',
	}
	settings={
		appearance:{
			language:'en',
			darkMode:true,
		},
		taskbar:{
			showSeconds:false,
		}
	}
	templates = {
		menu: {
			appearance:{title:'Appearance',callback:()=>this.setContent(this.templates.form.appearance)},
			taskbar:{title:'Taskbar',callback:()=>this.setContent(this.templates.form.taskbar)},
		},
		form: {
			appearance:{
				label:'Appearance',
				//language:{},
				darkMode:{
					label:'DarkMode',
					type:'toggle',
					value:this.settings.appearance.darkMode,
					callback:(val)=>this.appearance.darkMode(val)
				}
			},
			taskbar: {
				label:'Taskbar',
				clock: {
					label:'Clock',
					showSeconds: {
						label: 'Show seconds',
						type: 'toggle',
						name: 'clock.showSeconds',
						value:this.settings.taskbar.showSeconds,
						callback:(val)=>this.taskbar.clock.showSeconds(val)
					},
				}
			}
		}
	}

	constructor(options={}) {
		let app = this;
		$.extend(true,app.options, options);
		app.win = new $$.Window(app.options);
		app.menu = new $$.Menu({},app.templates.menu,app);
		app.win.setLeft(app.menu.el);
		app.menu.clickFirst();
	}
	setContent(form){
		let app = this;
		app.form = new $$.Form({},form,app);
		app.win.setContent(app.form.el);
	}
	appearance={
		darkMode:(val)=>{
			this.settings.appearance.darkMode = val;
			$('body').attr('darkMode',val);
		}
	}
	taskbar = {
		clock: {
			showSeconds: (val)=>{
				this.settings.taskbar.showSeconds = val;
				$$.Taskbar.options.clock.seconds = val;
			}
		}

	}
}