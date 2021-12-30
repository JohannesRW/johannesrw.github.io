$$.Apps.src.logs = class {
	options={
		appname:'logs',
		title:'Logs',
		version:'0.0.1',
		resizable:true,
		icon:'fa-duotone fa-file-waveform',
		width:{current:500},
		height:{current:450},
	};
	current = 'info';
	elements={
		ribbon: [
			{
				title:'Logs',
				items:[
					{title:'Info',icon:'fa-light fa-square-info',color:'#0193e6',callback:()=>this.setLogs('info')},
					{title:'Debug',icon:'fa-light fa-ban-bug',color:'#9a01e6',callback:()=>this.setLogs('debug')},
					{title:'Success',icon:'fa-light fa-circle-check',color:'#068a00',callback:()=>this.setLogs('success')},
					{title:'Warn',icon:'fa-light fa-triangle-exclamation',color:'#d57a00',callback:()=>this.setLogs('warn')},
					{title:'Error',icon:'fa-light fa-hexagon-exclamation',color:'#d70000',callback:()=>this.setLogs('error')}
				]
			},
			{
				title:'Tools',
				items:[
					{title:'Clear',icon:'fa-light fa-trash',noActive:true,callback:this.clearLogs}
				]
			}
		],
	}
	constructor(options={}) {
		let app = this;
		$.extend(true,app.options, options);
		$$.Apps.addCSS('logs');
		app.win = new $$.Window(app.options);
		app.init();
	}
	init(){
		let app = this;
		app.setRibbon();
		app.update();
	}

	setRibbon(){
		let app = this;
		app.ribbon = new $$.Ribbon({},app.elements.ribbon,app);
	}
	setLogs(key){
		let app = this;
		app.current = key;
		app.win.setContent();
		$.each(app.logs[key],function(index,log){
			let payloadHtml = '';
			$.each(log.payload,function(payloadKey,payload){
				payloadHtml += '<br>'+(payloadKey+':').padEnd(15,' ')+JSON.stringify(payload);
			})
			app.win.addContent('<pre class="'+key+'"><strong>'+log.msg+'</strong>'+payloadHtml+'<date>'+log.date+' '+log.time+'</date></pre><hr>');
		})
		app.win.scrollContent();
	}

	clearLogs(key=null){
		let app = this;
		key = key||app.current;
		$$.System.clearLogs(key);
		app.update();
	}
	update(){
		let app = this;
		app.logs = $$.System.getLogs();
		app.setLogs(app.current);
	}
}