export default class Apps {
	options={
		throttle:{
			appOptions:2000
		}
	}
	src = {};
	running = {};
	hashes={ //hashes for system apps (needs to be updated when changing apps)
		logs:'',
		info:'',
	};
	appOptions= {};
	constructor() {}
	init(){
		$$.UI.Startmenu.add(null,'Logs','logs')
		$$.UI.Startmenu.add(null,'Info','info')
		$$.UI.Startmenu.add(null,'Settings','settings')
		$$.UI.Startmenu.add(null,'Calculator','calc')
		$$.UI.Startmenu.add(null,'Games','games')
		$$.UI.Startmenu.add(null,'Contacts','contacts')
	}
	addCSS(fileName){
		if(!$('#nodeos_appcss_'+fileName).length){ //prevent multiple
			$('head').append($('<link/>',{id:'nodeos_appcss_'+fileName,rel:'stylesheet',href:'/assets/css/apps/'+fileName+'.css'}));
		}
	}
	loadAppOptions(){
		if($$.System.database&&$$.USERID){
			let apps = this;
			let url = 'app/load';
			$.getJSON(url).done(function(data) {
				apps.appOptions = data;
				$$.System.log.debug('App options loaded',apps.appOptions);
				$.each(apps.appOptions,function(key,app){
					if(app.running==='true'){
						apps.run(key);
					}
				})
			});
		}
	}
	removeCSS(fileName){
		$('#nodeos_appcss_'+filename).remove();
	}
	setAppOptions(appname,options={}){
		let apps = this;
		apps.appOptions[appname]=options;
		$$.Tools.throttle('saveApps',apps.options.throttle.appOptions,()=>apps.saveAppOptions.call(apps));
	}
	saveAppOptions(){
		let apps = this;
		if($$.System.database&&$$.USERID){
			$.post( 'app/save', apps.appOptions );
			$$.System.log.debug('App options saved',apps.appOptions);
		}
	}
	run(appname){
		let apps = this;
		if(!apps.running[appname]){
			if(!apps.src[appname]){
				apps.loadSrc(appname);
			}
			else {
				if($$.System.database&&$$.USERID){
					let options = {};
					if(apps.appOptions[appname]){
						options = apps.appOptions[appname];
					}
					$$.System.log.debug('Running App',{app:appname});
					apps.running[appname] = new apps.src[appname](options);
				}
				else {
					$$.System.log.debug('Running App',{app:appname});
					apps.running[appname] = new apps.src[appname]();
				}
			}
		}
	}
	loadSrc(appname){
		let apps = this;
		$.getScript( 'assets/js/apps/'+appname+'.js', function(data) {
			let md5hash = md5(data);
			if(apps.hashes[appname]){
				let hash = apps.hashes[appname];
				if(hash !== md5hash){
					console.error('hash check failed: '+md5hash);
					$$.System.log.error('hash check failed',{app:appname,expected_hash:hash,hash:md5hash});
					apps.src[appname] = null;
					return;
				}
				else {
					$$.System.log.success('hash check successfull',{app:appname,hash:hash});
				}
			}
			else {
				$$.System.log.warn('insecure app load - no hash provided',{app:appname,hash:md5hash});
			}
			apps.run(appname);
		});
	}
	kill(appname){
		let apps = this;
		if(apps.running[appname]){
			if($.isFunction(apps.running[appname].exit)){
				apps.running[appname].exit();
			}
			apps.running[appname] = null;
			$$.System.log.debug('App exited',{app:appname});
		}
	}
}
