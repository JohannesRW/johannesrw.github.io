export default class Tools {
	static throttles = {};
	static autoAppend(obj,parentElement=false){
		let tools = this;
		let returnElement = obj.el||parentElement;
		$.each(obj,function(key,element){
			if(key == 'callback'){
				return;
			}
			if(key!=='el'){
				returnElement.append(tools.autoAppend(element,returnElement));
			}
		})
		return returnElement;
	}
	static throttle(id,time=1000,callback){
		let tools = this;
		if(tools.throttles[id]){
			let diff = new Date().getTime()-time-tools.throttles[id].lastExecution;
			clearTimeout(tools.throttles[id].timeout);
			tools.throttles[id].timeout = setTimeout(function(){
				tools.throttles[id].lastExecution= new Date().getTime();
				callback();
			},diff*-1);
		}
		else {
			tools.throttles[id] = {
				timeout:{},
				lastExecution: new Date().getTime()
			}
			callback();
		}
	}
}