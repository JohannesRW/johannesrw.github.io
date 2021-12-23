const logging = true;
let logs={
	info:[],
	debug:[],
	warn:[],
	error:[],
	success:[]
};
export default class System {
	elements = {
		status:{
			mongodb:{
				el:$('<img/>'),
				success:'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNHB4IiBoZWlnaHQ9IjEwMjRweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgPGNpcmNsZSBjeD0iNTEyIiBjeT0iNTEyIiByPSI1MTIiIHN0eWxlPSJmaWxsOiMxM2FhNTIiLz4KICAgPHBhdGggZD0iTTY0OC44NiA0NDkuNDRjLTMyLjM0LTE0Mi43My0xMDguNzctMTg5LjY2LTExNy0yMDcuNTktOS0xMi42NS0xOC4xMi0zNS4xNS0xOC4xMi0zNS4xNS0uMTUtLjM4LS4zOS0xLjA1LS42Ny0xLjctLjkzIDEyLjY1LTEuNDEgMTcuNTMtMTMuMzcgMzAuMjktMTguNTIgMTQuNDgtMTEzLjU0IDk0LjIxLTEyMS4yNyAyNTYuMzctNy4yMSAxNTEuMjQgMTA5LjI1IDI0MS4zNiAxMjUgMjUyLjg1bDEuNzkgMS4yN3YtLjExYy4xLjc2IDUgMzYgOC40NCA3My4zNEg1MjZhNzI2LjY4IDcyNi42OCAwIDAgMSAxMy03OC41M2wxLS42NWEyMDQuNDggMjA0LjQ4IDAgMCAwIDIwLjExLTE2LjQ1bC43Mi0uNjVjMzMuNDgtMzAuOTMgOTMuNjctMTAyLjQ3IDkzLjA4LTIxNi41M2EzNDcuMDcgMzQ3LjA3IDAgMCAwLTUuMDUtNTYuNzZ6TTUxMi4zNSA2NTkuMTJzMC0yMTIuMTIgNy0yMTIuMDhjNS40NiAwIDEyLjUzIDI3My42MSAxMi41MyAyNzMuNjEtOS43Mi0xLjE3LTE5LjUzLTQ1LjAzLTE5LjUzLTYxLjUzeiIgc3R5bGU9ImZpbGw6I2ZmZiIvPgo8L3N2Zz4K',
				error:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjEwMjRweCIKICAgaGVpZ2h0PSIxMDI0cHgiCiAgIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzgzOCIKICAgc29kaXBvZGk6ZG9jbmFtZT0ibW9uZ29kYl9lcnIuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjEuMSAoM2JmNWFlMGQyNSwgMjAyMS0wOS0yMCkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczg0MiIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9Im5hbWVkdmlldzg0MCIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIwLjc5MDAzOTA2IgogICAgIGlua3NjYXBlOmN4PSI1MTIiCiAgICAgaW5rc2NhcGU6Y3k9IjUxMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnODM4IiAvPgogIDxjaXJjbGUKICAgICBjeD0iNTEyIgogICAgIGN5PSI1MTIiCiAgICAgcj0iNTEyIgogICAgIHN0eWxlPSJmaWxsOiNiZTAwMDA7ZmlsbC1vcGFjaXR5OjEiCiAgICAgaWQ9ImNpcmNsZTgzNCIgLz4KICA8cGF0aAogICAgIGQ9Ik02NDguODYgNDQ5LjQ0Yy0zMi4zNC0xNDIuNzMtMTA4Ljc3LTE4OS42Ni0xMTctMjA3LjU5LTktMTIuNjUtMTguMTItMzUuMTUtMTguMTItMzUuMTUtLjE1LS4zOC0uMzktMS4wNS0uNjctMS43LS45MyAxMi42NS0xLjQxIDE3LjUzLTEzLjM3IDMwLjI5LTE4LjUyIDE0LjQ4LTExMy41NCA5NC4yMS0xMjEuMjcgMjU2LjM3LTcuMjEgMTUxLjI0IDEwOS4yNSAyNDEuMzYgMTI1IDI1Mi44NWwxLjc5IDEuMjd2LS4xMWMuMS43NiA1IDM2IDguNDQgNzMuMzRINTI2YTcyNi42OCA3MjYuNjggMCAwIDEgMTMtNzguNTNsMS0uNjVhMjA0LjQ4IDIwNC40OCAwIDAgMCAyMC4xMS0xNi40NWwuNzItLjY1YzMzLjQ4LTMwLjkzIDkzLjY3LTEwMi40NyA5My4wOC0yMTYuNTNhMzQ3LjA3IDM0Ny4wNyAwIDAgMC01LjA1LTU2Ljc2ek01MTIuMzUgNjU5LjEyczAtMjEyLjEyIDctMjEyLjA4YzUuNDYgMCAxMi41MyAyNzMuNjEgMTIuNTMgMjczLjYxLTkuNzItMS4xNy0xOS41My00NS4wMy0xOS41My02MS41M3oiCiAgICAgc3R5bGU9ImZpbGw6I2ZmZiIKICAgICBpZD0icGF0aDgzNiIgLz4KPC9zdmc+Cg==',
			}
		}
	}
	constructor() {
		let system = this;
		if(system.isMobile()){
			$('body').addClass('mobile');
		}
	}
	addCSS(fileName){
		if(!$('#nodeos_systemcss_'+fileName).length){ //prevent multiple
			$('head').append($('<link/>',{id:'nodeos_systemcss_'+fileName,rel:'stylesheet',href:'/assets/css/modules/'+fileName+'.css'}));
		}
	}
	removeCSS(fileName){
		$('#nodeos_systemcss_'+filename).remove();
	}
	log = {
		info: function(msg){logs.info.push(msg);if(nos.Apps.running.logs){nos.Apps.running.logs.update();}},
		debug: function(msg,force=false){if(logging || force){logs.debug.push(msg);if(nos.Apps.running.logs){nos.Apps.running.logs.update();}}},
		warn: function(msg){logs.warn.push(msg);if(nos.Apps.running.logs){nos.Apps.running.logs.update();}},
		error: function(msg){logs.error.push(msg);if(nos.Apps.running.logs){nos.Apps.running.logs.update();}},
		success: function(msg){logs.success.push(msg);if(nos.Apps.running.logs){nos.Apps.running.logs.update();}}
	}
	isMobile(){
		return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
			|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))
	}
	getLogs(key=false){
		if(key){
			return logs[key];
		}
		return logs;
	}
	checkConnection(){
		let system = this;
		nos.UI.Taskbar.elements.info.el.append(system.elements.status.mongodb.el);
		$.getJSON( '/status/mongodb').done(function() {
			system.log.success('Database connection established.')
			system.elements.status.mongodb.el.attr('src',system.elements.status.mongodb.success);
			system.elements.status.mongodb.el.attr('title','Database connection established.');
		}).fail(function() {
			system.log.error('Database connection failed.')
			system.elements.status.mongodb.el.attr('src',system.elements.status.mongodb.error);
			system.elements.status.mongodb.el.attr('title','Database connection failed.');
		});
	}
}
