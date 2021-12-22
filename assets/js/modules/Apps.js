export default class Apps {
	src = {};
	running = {};
	cssFiles={};
	constructor() {
		let apps = this;
	}
	addCSS(fileName){
		if(!$('#nodeos_appcss_'+fileName).length){ //prevent multiple
			$('head').append($('<link/>',{id:'nodeos_appcss_'+fileName,rel:'stylesheet',href:'/assets/css/apps/'+fileName+'.css'}));
			nos.System.log(fileName+' CSS loaded');
		}
	}
	removeCSS(fileName){
		$('#nodeos_appcss_'+filename).remove();
	}
	addToStartmenu(){
		nos.UI.Startmenu.add('folder','Info','info')
		nos.UI.Startmenu.add('folder','Settings','settings')
		nos.UI.Startmenu.add('folder','Rechner','calc')
		nos.UI.Startmenu.add('folder','Games','games')
	}
	run(appname,hash=false){
		let apps = this;
		if(!apps.running[appname]){ //if App is NOT started
			if(!apps.src[appname]){ //if AppSrc is NOT set
				$.getScript( 'assets/js/apps/'+appname+'.js', function(data) { //get AppSrc
					if(hash){ //if hash
						if(hash !== md5(data)){ //if hash is invalid
							nos.System.log('hash check failed for app: "'+appname+'" with hash: "'+hash+'" should be: "'+md5(data)+'"');
							return;
						}
						else { //if hash is valid
							nos.System.log('hash check successfull for app: "'+appname+'" with hash: "'+hash+'"');
						}
					}
					else { //no hash provided
						nos.System.log('insecure app load - please provide a hash for: "'+appname+'"');
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
