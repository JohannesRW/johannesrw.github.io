export default class Apps {
	src = {};
	running = {};
	hashes={ //hashes for system apps (needs to be updated when changing apps)
		logs:'a021f96dfcf523f2ecba66c6429a672d',
		info:'372f8b7fbcaa3c85be7bbae6e3b2f772',
	}
	constructor() {}
	addCSS(fileName){
		if(!$('#nodeos_appcss_'+fileName).length){ //prevent multiple
			$('head').append($('<link/>',{id:'nodeos_appcss_'+fileName,rel:'stylesheet',href:'/assets/css/apps/'+fileName+'.css'}));
		}
	}
	removeCSS(fileName){
		$('#nodeos_appcss_'+filename).remove();
	}
	addToStartmenu(){
		nos.UI.Startmenu.add(null,'Logs','logs')
		nos.UI.Startmenu.add(null,'Info','info')
		nos.UI.Startmenu.add(null,'Settings','settings')
		nos.UI.Startmenu.add(null,'Calculator','calc')
		nos.UI.Startmenu.add(null,'Games','games')
	}
	run(appname){
		let apps = this;
		if(!apps.running[appname]){
			if(!apps.src[appname]){
				$.getScript( 'assets/js/apps/'+appname+'.js', function(data) {
					let md5hash = md5(data);
					if(apps.hashes[appname]){
						let hash = apps.hashes[appname];
						if(hash !== md5hash){
							nos.System.log.error('<strong>hash check failed</strong><br>app		'+appname+'<br>expected	'+hash+'<br>hash		'+md5hash);
							apps.src[appname] = null;
							return;
						}
						else {
							nos.System.log.success('<strong>hash check successfull</strong><br>app		'+appname+'<br>hash		'+hash);
						}
					}
					else {
						nos.System.log.warn('<strong>insecure app load - no hash provided</strong><br>app		'+appname+'<br>hash		'+md5hash);
					}
					apps.running[appname] = new apps.src[appname]();
				});
			}
			else {
				apps.running[appname] = new apps.src[appname]();
			}
		}
	}
	kill(appname){
		let apps = this;
		if(apps.running[appname]){
			if($.isFunction(apps.running[appname].exit)){
				apps.running[appname].exit();
			}
			apps.running[appname] = null;
		}
	}
}
