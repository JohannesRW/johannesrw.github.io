export default class Apps {
	src = {};
	running = {};
	constructor() {
		let apps = this;
	}
	addCSS(fileName){
		if(!$('#nodeos_appcss_'+fileName).length){ //prevent multiple
			$('head').append($('<link/>',{id:'nodeos_appcss_'+fileName,rel:'stylesheet',href:'/assets/css/apps/'+fileName+'.css'}));
		}
	}
	removeCSS(fileName){
		$('#nodeos_appcss_'+filename).remove();
	}
	addToStartmenu(){
		nos.UI.Startmenu.add('folder','Logs','logs')
		nos.UI.Startmenu.add('folder','Info','info')
		nos.UI.Startmenu.add('folder','Settings','settings')
		nos.UI.Startmenu.add('folder','Calculator','calc')
		nos.UI.Startmenu.add('folder','Games','games')
	}
	run(appname,hash=false){
		let apps = this;
		if(!apps.running[appname]){ //if App is NOT started
			if(!apps.src[appname]){ //if AppSrc is NOT set
				$.getScript( 'assets/js/apps/'+appname+'.js', function(data) { //get AppSrc
					let md5hash = md5(data);
					if(hash){ //if hash
						if(hash !== md5hash){ //if hash is invalid
							nos.System.log.error('<strong>hash check failed</strong><br>app		'+appname+'<br>expected	'+hash+'<br>hash		'+md5hash);
							return;
						}
						else { //if hash is valid
							nos.System.log.success('<strong>hash check successfull</strong><br>app		'+appname+'<br>hash		'+hash);
						}
					}
					else { //no hash provided
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
