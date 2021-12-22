class Settings {
	options={
		appname:'settings',
		icon:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iQ2FwYV8xIgogICB4PSIwcHgiCiAgIHk9IjBweCIKICAgd2lkdGg9IjUwNy40NTFweCIKICAgaGVpZ2h0PSI1MDcuNDVweCIKICAgdmlld0JveD0iMCAwIDUwNy40NTEgNTA3LjQ1IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDcuNDUxIDUwNy40NTsiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIHNvZGlwb2RpOmRvY25hbWU9InNldHRpbmdzLWNvZ3doZWVsLWJ1dHRvbl9pY29uLWljb25zLmNvbV83MjU1OS5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMS4xICgzYmY1YWUwZDI1LCAyMDIxLTA5LTIwKSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcwogICBpZD0iZGVmczkwMiIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgIGlkPSJuYW1lZHZpZXc5MDAiCiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgc2hvd2dyaWQ9ImZhbHNlIgogICBpbmtzY2FwZTp6b29tPSIxLjU5NDI0NTciCiAgIGlua3NjYXBlOmN4PSIyNTMuNzI1MDEiCiAgIGlua3NjYXBlOmN5PSIyNTMuNzI1MDEiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InNldHRpbmdzIiAvPgo8ZwogICBpZD0iZzg2NyI+Cgk8ZwogICBpZD0ic2V0dGluZ3MiPgoJCTxwYXRoCiAgIGQ9Ik00NDAuODEzLDI4MC41YzAtNy42NSwyLjU1LTE1LjMsMi41NS0yNS41czAtMTcuODUtMi41NS0yNS41bDUzLjU1LTQzLjM1YzUuMS01LjEsNS4xLTEwLjIsMi41NS0xNS4zbC01MS04OS4yNSAgICBjLTIuNTUtMi41NS03LjY0OS01LjEtMTUuMy0yLjU1bC02My43NSwyNS41Yy0xMi43NS0xMC4yLTI4LjA1LTE3Ljg1LTQzLjM1LTI1LjVsLTEwLjItNjYuM0MzMTUuODYzLDUuMSwzMDguMjEyLDAsMzAzLjExMywwICAgIGgtMTAyYy01LjEwMSwwLTEyLjc1LDUuMS0xMi43NSwxMC4ybC0xMC4yLDY4Ljg1Yy0xNS4zLDUuMS0yOC4wNSwxNS4zLTQzLjM1LDI1LjVsLTYxLjItMjUuNWMtNy42NS0yLjU1LTEyLjc1LDAtMTcuODUxLDUuMSAgICBsLTUxLDg5LjI1Yy0yLjU1LDIuNTUsMCwxMC4yLDUuMSwxNS4zbDUzLjU1LDQwLjhjMCw3LjY1LTIuNTUsMTUuMy0yLjU1LDI1LjVzMCwxNy44NSwyLjU1LDI1LjVsLTUzLjU1LDQzLjM1ICAgIGMtNS4xLDUuMTAxLTUuMSwxMC4yLTIuNTUsMTUuMzAxbDUxLDg5LjI1YzIuNTUsMi41NSw3LjY0OSw1LjEsMTUuMywyLjU1bDYzLjc1LTI1LjVjMTIuNzUsMTAuMiwyOC4wNSwxNy44NSw0My4zNSwyNS41ICAgIGwxMC4yLDY2LjNjMCw1LjEsNS4xLDEwLjIsMTIuNzUsMTAuMmgxMDJjNS4xMDEsMCwxMi43NS01LjEwMSwxMi43NS0xMC4ybDEwLjItNjYuM2MxNS4zLTcuNjUsMzAuNi0xNS4zLDQzLjM1LTI1LjVsNjMuNzUsMjUuNSAgICBjNS4xMDEsMi41NSwxMi43NSwwLDE1LjMwMS01LjEwMWw1MS04OS4yNWMyLjU1LTUuMSwyLjU1LTEyLjc1LTIuNTUxLTE1LjNMNDQwLjgxMywyODAuNXogTTI1Mi4xMTMsMzQ0LjI1ICAgIGMtNDguNDUsMC04OS4yNS00MC44LTg5LjI1LTg5LjI1czQwLjgtODkuMjUsODkuMjUtODkuMjVzODkuMjUsNDAuOCw4OS4yNSw4OS4yNVMzMDAuNTYzLDM0NC4yNSwyNTIuMTEzLDM0NC4yNXoiCiAgIGlkPSJwYXRoODY0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxIiAvPgoJPC9nPgo8L2c+CjxnCiAgIGlkPSJnODY5Ij4KPC9nPgo8ZwogICBpZD0iZzg3MSI+CjwvZz4KPGcKICAgaWQ9Imc4NzMiPgo8L2c+CjxnCiAgIGlkPSJnODc1Ij4KPC9nPgo8ZwogICBpZD0iZzg3NyI+CjwvZz4KPGcKICAgaWQ9Imc4NzkiPgo8L2c+CjxnCiAgIGlkPSJnODgxIj4KPC9nPgo8ZwogICBpZD0iZzg4MyI+CjwvZz4KPGcKICAgaWQ9Imc4ODUiPgo8L2c+CjxnCiAgIGlkPSJnODg3Ij4KPC9nPgo8ZwogICBpZD0iZzg4OSI+CjwvZz4KPGcKICAgaWQ9Imc4OTEiPgo8L2c+CjxnCiAgIGlkPSJnODkzIj4KPC9nPgo8ZwogICBpZD0iZzg5NSI+CjwvZz4KPGcKICAgaWQ9Imc4OTciPgo8L2c+Cjwvc3ZnPgo=',
		invertIcon:0.5,
		title:'Settings',
		version:'0.0.1',
	}
	constructor() {
		let app = this;
		app.win = new nos.Window(app.options);
		app.setContentStart();
	}
	setContentStart(){
		let app = this;
		app.win.setContent('Settings');
	}
}
nos.Apps.src.settings = Settings;