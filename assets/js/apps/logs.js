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
	templates = {
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
		},
		logs: (type, logs) =>
			`${Object.keys(logs).map(function (logKey) {
				return `<pre class="${type}"><strong>${logs[logKey].msg}</strong>
				${Object.keys(logs[logKey].payload).map(function (payloadKey) {
					return `<br>${(payloadKey + ':').padEnd(15, ' ') + JSON.stringify(logs[logKey].payload[payloadKey])}`;
				}).join('')}
				<date>${logs[logKey].date} ${logs[logKey].time}</date></pre><hr>`;
			}).join('')}`
	}
	constructor(options = {}) {
		let app = this;
		$.extend(true, app.options, options);
		$$.Apps.addCSS('logs');
		app.win = new $$.Window(app.options);
		app.ribbon = new $$.Ribbon({}, app.templates.ribbon, app);
		app.update();
	}
	setLogs(type) {
		let app = this;
		app.currentType = type;
		app.win.setContent(app.templates.logs(type, app.logs[type]));
		app.win.scrollContent();
	}
	clearLogs(type = null) {
		let app = this;
		type = type || app.currentType;
		$$.System.clearLogs(type);
		app.ribbon.set('logs');
		app.update();
	}
	update() {
		let app = this;
		app.logs = $$.System.getLogs();
		$.each(app.ribbon.elements.items.logs, function (key, item) {
			if (app.logs[key]) {
				$('badge', item.el).html(app.logs[key].length);
			}
		})
		app.setLogs(app.currentType);
	}
}