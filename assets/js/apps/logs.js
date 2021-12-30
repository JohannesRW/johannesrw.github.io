$$.Apps.src.logs = class {
	options = {
		appname: 'logs',
		title: 'Logs',
		version: '0.0.1',
		resizable: true,
		width: {current: 500},
		height: {current: 450},
	};
	currentType = 'info';
	elements = {
		ribbon: {
			logs: {
				title: 'Logs',
				items: {
					info: {
						title: 'Info',
						icon: 'fa-light fa-square-info',
						color: '#0193e6',
						callback: () => this.setLogs('info')
					},
					debug: {
						title: 'Debug',
						icon: 'fa-light fa-ban-bug',
						color: '#9a01e6',
						callback: () => this.setLogs('debug')
					},
					success: {
						title: 'Success',
						icon: 'fa-light fa-circle-check',
						color: '#068a00',
						callback: () => this.setLogs('success')
					},
					warn: {
						title: 'Warn',
						icon: 'fa-light fa-triangle-exclamation',
						color: '#d57a00',
						callback: () => this.setLogs('warn')
					},
					error: {
						title: 'Error',
						icon: 'fa-light fa-hexagon-exclamation',
						color: '#d70000',
						callback: () => this.setLogs('error')
					}
				}
			},
			tools: {
				title: 'Tools',
				items: {
					clear: {
						title: 'Clear',
						icon: 'fa-light fa-trash',
						noActive: true,
						callback: this.clearLogs
					}
				}
			}
		}
	}
	constructor(options = {}) {
		let app = this;
		$.extend(true, app.options, options);//extend default options with user options
		$$.Apps.addCSS('logs');//load css ("assets/css/apps/logs.css")
		app.win = new $$.Window(app.options);//create new window with current options
		app.init();//initialize app
	}
	init() {
		let app = this;
		app.setRibbon();//generate ribbons
		app.update();//update app
	}
	setRibbon() {
		let app = this;
		app.ribbon = new $$.Ribbon({}, app.elements.ribbon, app);//auto generate ribbon
	}
	setLogs(type) {
		let app = this;
		app.currentType = type; //set current type of logs
		app.win.setContent(); //clear window content
		$.each(app.logs[type], function (index, log) { //loop through each log of requested type
			let payloadHtml = '';
			$.each(log.payload, function (payloadKey, payload) {//add additional info to entry
				payloadHtml += '<br>' + (payloadKey + ':').padEnd(15, ' ') + JSON.stringify(payload);
			})
			//add entry to window content
			app.win.addContent('<pre class="' + type + '"><strong>' + log.msg + '</strong>' + payloadHtml + '<date>' + log.date + ' ' + log.time + '</date></pre><hr>');
		})
		app.win.scrollContent();//scroll down
	}
	clearLogs(type = null) {
		let app = this;
		type = type || app.currentType;//use given type or current type
		$$.System.clearLogs(type);//clear logs of type from system
		app.ribbon.set('logs');//set ribbon menu to "logs"
		app.update();//update app
	}
	update() {
		let app = this;
		app.logs = $$.System.getLogs();//get all logs from system
		$.each(app.ribbon.elements.items.logs,function(key,item){
			if(app.logs[key]) {
				$('badge', item.el).html(app.logs[key].length);//update badges
			}
		})
		app.setLogs(app.currentType);//output logs
	}
}