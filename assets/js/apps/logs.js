$$.Apps.src.logs = class {
	options={
		appname:'logs',
		title:'Logs',
		version:'0.0.1',
		resizable:true,
		icon:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iQ2FwYV8xIgogICB4PSIwcHgiCiAgIHk9IjBweCIKICAgdmlld0JveD0iMCAwIDM2MCAzNjAiCiAgIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2MCAzNjA7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSJsb2ctc3ZncmVwby1jb20uc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjEuMSAoM2JmNWFlMGQyNSwgMjAyMS0wOS0yMCkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnMKICAgaWQ9ImRlZnM5MDIiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBpZD0ibmFtZWR2aWV3OTAwIgogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMS4xMjM2MTExIgogICBpbmtzY2FwZTpjeD0iLTM2LjA0NDQ5OSIKICAgaW5rc2NhcGU6Y3k9IjE5MS43OTIzNCIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iQ2FwYV8xIiAvPgo8ZwogICBpZD0iWE1MSURfMjI3XyIKICAgc3R5bGU9ImZpbGw6I2RjYjkwMDtmaWxsLW9wYWNpdHk6MSI+Cgk8cGF0aAogICBpZD0iWE1MSURfMjI4XyIKICAgZD0iTTM0NC4yNTksMTI2LjY4M2gtNDguNTE4Vjc3LjgzNEwyMTIuNzE5LDBIMTUuNzQxdjM2MGgyODB2LTUwLjU5aDQ4LjUxOFYxMjYuNjgzeiBNMzE0LjI1OSwyNzkuNDFoLTIxMCAgIFYxNTYuNjgzaDIxMFYyNzkuNDF6IgogICBzdHlsZT0iZmlsbDojZGNiOTAwO2ZpbGwtb3BhY2l0eToxIiAvPgoJPHBvbHlnb24KICAgaWQ9IlhNTElEXzIzMV8iCiAgIHBvaW50cz0iMTcwLjg5MiwyMzQuOTQyIDEzOS4wMzUsMjM0Ljk0MiAxMzkuMDM1LDE4My4xMSAxMjYuODkyLDE4My4xMSAxMjYuODkyLDI0NS41OSAxNzAuODkyLDI0NS41OSAgICAgIgogICBzdHlsZT0iZmlsbDojZGNiOTAwO2ZpbGwtb3BhY2l0eToxIiAvPgoJPHBhdGgKICAgaWQ9IlhNTElEXzIzMl8iCiAgIGQ9Ik0xNzguOTQzLDIzNi4yMThjMi42NjksMi45NjMsNS44NjYsNS4zMzksOS41OTMsNy4xMjhjMy43MjUsMS43OSw3Ljg3NiwyLjY4NCwxMi40NTEsMi42ODQgICBjNC40LDAsOC40NzctMC44NjUsMTIuMjMyLTIuNTk2YzMuNzU0LTEuNzMsNi45OC00LjA0OCw5LjY4LTYuOTUyYzIuNjk4LTIuOTA0LDQuODExLTYuMjQ4LDYuMzM2LTEwLjAzMiAgIGMxLjUyNS0zLjc4NCwyLjI4OC03Ljc1OCwyLjI4OC0xMS45MjRjMC0zLjkzLTAuNzM0LTcuODAyLTIuMTk5LTExLjYxNmMtMS40NjgtMy44MTMtMy41MjEtNy4yMTYtNi4xNi0xMC4yMDggICBjLTIuNjQxLTIuOTkyLTUuODIzLTUuNDEyLTkuNTQ4LTcuMjZjLTMuNzI3LTEuODQ4LTcuODQ4LTIuNzcyLTEyLjM2NC0yLjc3MmMtNC40LDAtOC40NzksMC44NjYtMTIuMjMyLDIuNTk2ICAgYy0zLjc1NSwxLjczMi02Ljk5Niw0LjA2NC05LjcyNCw2Ljk5NmMtMi43MjksMi45MzUtNC44Nyw2LjMwNy02LjQyNCwxMC4xMmMtMS41NTYsMy44MTQtMi4zMzIsNy44MDMtMi4zMzIsMTEuOTY4ICAgYzAsMy45OTEsMC43MzMsNy44OTIsMi4yLDExLjcwNEMxNzQuMjA1LDIyOS44NjgsMTc2LjI3MywyMzMuMjU2LDE3OC45NDMsMjM2LjIxOHogTTE4NC4wNDgsMjA2LjczOCAgIGMwLjc5Mi0yLjQ5MywxLjk0OS00LjcyMiwzLjQ3Ni02LjY4OGMxLjUyNS0xLjk2NSwzLjQzMy0zLjU0OSw1LjcyMS00Ljc1MmMyLjI4OC0xLjIwMiw0Ljg5OC0xLjgwNCw3LjgzMi0xLjgwNCAgIGMyLjgxNSwwLDUuMzUyLDAuNTcyLDcuNjExLDEuNzE2YzIuMjU4LDEuMTQ0LDQuMTY1LDIuNjg0LDUuNzIxLDQuNjJjMS41NTQsMS45MzYsMi43NTcsNC4xNjYsMy42MDcsNi42ODggICBjMC44NSwyLjUyMywxLjI3Niw1LjEzNCwxLjI3Niw3LjgzMWMwLDIuNTgzLTAuMzk3LDUuMTE5LTEuMTg5LDcuNjEyYy0wLjc5MiwyLjQ5NC0xLjk2Niw0LjczOC0zLjUyLDYuNzMyICAgYy0xLjU1NiwxLjk5NS0zLjQ2MywzLjU5NC01LjcyMSw0Ljc5NmMtMi4yNTksMS4yMDMtNC44NTQsMS44MDQtNy43ODcsMS44MDRjLTIuODc2LDAtNS40NDItMC41ODYtNy43LTEuNzYgICBjLTIuMjYtMS4xNzMtNC4xNjYtMi43MjgtNS43Mi00LjY2NGMtMS41NTYtMS45MzYtMi43NDMtNC4xNjUtMy41NjQtNi42ODhjLTAuODIyLTIuNTIxLTEuMjMyLTUuMTMzLTEuMjMyLTcuODMyICAgQzE4Mi44NTksMjExLjc2OSwxODMuMjU2LDIwOS4yMzIsMTg0LjA0OCwyMDYuNzM4eiIKICAgc3R5bGU9ImZpbGw6I2RjYjkwMDtmaWxsLW9wYWNpdHk6MSIgLz4KCTxwYXRoCiAgIGlkPSJYTUxJRF8yMzZfIgogICBkPSJNMjQ1LjgyMywyMzYuNzljMi42NjksMi44NzUsNS44MDksNS4xMzQsOS40MTYsNi43NzZjMy42MDgsMS42NDMsNy40NjUsMi40NjQsMTEuNTcyLDIuNDY0ICAgYzYuNjI5LDAsMTIuNDM2LTIuNDkzLDE3LjQyNC03LjQ4djcuMDRoMTAuMDMydi0zMi4xMmgtMjIuNjE2djguODg4aDEyLjU4NHY0LjRjLTQuODcsNS42OTEtMTAuMzI2LDguNTM2LTE2LjM2OCw4LjUzNiAgIGMtMi42NCwwLTUuMDktMC41NDItNy4zNDgtMS42MjhjLTIuMjU5LTEuMDg1LTQuMjEtMi41NjYtNS44NTItNC40NDRjLTEuNjQ0LTEuODc3LTIuOTM1LTQuMDkyLTMuODcyLTYuNjQ0ICAgYy0wLjkzOS0yLjU1Mi0xLjQwOC01LjI5My0xLjQwOC04LjIyOGMwLTIuODE2LDAuNDI1LTUuNDg1LDEuMjc2LTguMDA4YzAuODUtMi41MjEsMi4wNTMtNC43NTIsMy42MDctNi42ODggICBjMS41NTQtMS45MzYsMy40MzItMy40NjEsNS42MzItNC41NzZjMi4yLTEuMTE0LDQuNjItMS42NzIsNy4yNjEtMS42NzJjMy4zNDQsMCw2LjQzOCwwLjgyMiw5LjI4MywyLjQ2NCAgIGMyLjg0NSwxLjY0NCw1LjA2MSw0LjAyLDYuNjQ1LDcuMTI4bDkuMDY0LTYuNjg4Yy0yLjExMS00LjE2NS01LjI2Ni03LjQ4LTkuNDYtOS45NDRjLTQuMTk1LTIuNDY0LTkuMjI2LTMuNjk2LTE1LjA5Mi0zLjY5NiAgIGMtNC4zNDIsMC04LjM2LDAuODM2LTEyLjA1NiwyLjUwOGMtMy42OTYsMS42NzItNi45MDgsMy45MzEtOS42MzcsNi43NzZjLTIuNzI4LDIuODQ3LTQuODcsNi4xNi02LjQyNCw5Ljk0NCAgIGMtMS41NTUsMy43ODQtMi4zMzIsNy44MTgtMi4zMzIsMTIuMWMwLDQuNTE4LDAuNzc3LDguNzI3LDIuMzMyLDEyLjYyOEMyNDEuMDQxLDIzMC41MjgsMjQzLjE1MywyMzMuOTE2LDI0NS44MjMsMjM2Ljc5eiIKICAgc3R5bGU9ImZpbGw6I2RjYjkwMDtmaWxsLW9wYWNpdHk6MSIgLz4KPC9nPgo8ZwogICBpZD0iZzg2OSI+CjwvZz4KPGcKICAgaWQ9Imc4NzEiPgo8L2c+CjxnCiAgIGlkPSJnODczIj4KPC9nPgo8ZwogICBpZD0iZzg3NSI+CjwvZz4KPGcKICAgaWQ9Imc4NzciPgo8L2c+CjxnCiAgIGlkPSJnODc5Ij4KPC9nPgo8ZwogICBpZD0iZzg4MSI+CjwvZz4KPGcKICAgaWQ9Imc4ODMiPgo8L2c+CjxnCiAgIGlkPSJnODg1Ij4KPC9nPgo8ZwogICBpZD0iZzg4NyI+CjwvZz4KPGcKICAgaWQ9Imc4ODkiPgo8L2c+CjxnCiAgIGlkPSJnODkxIj4KPC9nPgo8ZwogICBpZD0iZzg5MyI+CjwvZz4KPGcKICAgaWQ9Imc4OTUiPgo8L2c+CjxnCiAgIGlkPSJnODk3Ij4KPC9nPgo8L3N2Zz4K',
		width:{current:500},
		height:{current:450},
	};
	menu={
		el:$('<menu/>'),
		items:{
			info:{el:$('<item/>')},
			debug:{el:$('<item/>')},
			success:{el:$('<item/>')},
			warn:{el:$('<item/>')},
			error:{el:$('<item/>')},
		}
	};
	ribbons={
		buttons:{
			el:$('<menu/>'),
			logs:{el:$('<item/>',{html:'Logs'})}
		},
		content:{
			logs:{
				el:$('<menu/>'),
				info:{el:$('<item/>')},
				hr01:{el:$('<hr/>')},
				debug:{el:$('<item/>')},
				hr02:{el:$('<hr/>')},
				success:{el:$('<item/>')},
				hr03:{el:$('<hr/>')},
				warn:{el:$('<item/>')},
				hr04:{el:$('<hr/>')},
				error:{el:$('<item/>')},
				hr:{el:$('<hr/>')},
				clear:{el:$('<item/>',{html:'<i class="las la-trash"></i>Clear'})},
			}
		}
	}
	current = 'info';
	constructor(options={}) {
		let app = this;
		$.extend(true,app.options, options);
		app.win = new $$.Window(app.options);
		//app.win.setLeft($$.Tools.autoAppend(app.menu));
		app.generateRibbons();
		$$.Apps.addCSS('logs');
		app.listen();
		app.update();
	}

	generateRibbons(){
		let app = this;
		app.win.setRibbonButtons($$.Tools.autoAppend(app.ribbons.buttons));
		app.setRibbon('logs');
	}
	setRibbon(key){
		let app = this;
		app.ribbons.buttons.el.find('.active').removeClass('active');
		app.ribbons.buttons[key].el.addClass('active');
		app.win.setRibbonContent($$.Tools.autoAppend(app.ribbons.content[key]));
		app.listen();
	}
	update(){
		let app = this;
		app.logs = $$.System.getLogs();
		app.ribbons.content.logs.info.el.html('Info <badge>'+app.logs.info.length+'</badge>');
		app.ribbons.content.logs.debug.el.html('Debug <badge>'+app.logs.debug.length+'</badge>');
		app.ribbons.content.logs.success.el.html('Success <badge>'+app.logs.success.length+'</badge>');
		app.ribbons.content.logs.warn.el.html('Warn <badge>'+app.logs.warn.length+'</badge>');
		app.ribbons.content.logs.error.el.html('Error <badge>'+app.logs.error.length+'</badge>');
		app.ribbons.content.logs[app.current].el.click();
	}
	listen(){
		let app = this;
		$.each(app.ribbons.buttons,function(key,item){
			if(!item.el){return;}
			item.el.on('click',function(){
				app.setRibbon(key);
			})
		});

		$.each(app.ribbons.content.logs,function(key,item){
			if(!item.el){return;}
			item.el.on('click',function(){
				if(key === 'clear'){
					$$.System.clearLogs(app.current);
					app.update();
					console.log(123);
					return;
				}
				app.ribbons.content.logs.el.find('.active').removeClass('active');
				item.el.addClass('active');
				app.current = key;
				app.win.setContent();
				$.each(app.logs[key],function(index,log){
					let payloadHtml = '';
					$.each(log.payload,function(payloadKey,payload){
						payloadHtml += '<br>'+(payloadKey+':').padEnd(15,' ')+JSON.stringify(payload);
					})
					app.win.addContent('<pre class="'+key+'"><strong>'+log.msg+'</strong>'+payloadHtml+'<date>'+log.date+' '+log.time+'</date></pre><hr>');
				})
			})
		});
	}
}