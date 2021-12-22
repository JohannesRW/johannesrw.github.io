export default class Window {
	id = '';
	resizeHandles={};
	mousePosition = {}
	options = {
		appname:'undefined',
		maximized: false,
		minimized: false,
		resizable:true,
		draggable:true,
		status:true,
		title: 'Neues Fenster',
		icon:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxLjQxNDIxOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzk3IDM0NyIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyZWN0IGhlaWdodD0iMzQ2LjU3NiIgaWQ9Il8xOS4tU2l0ZS1jbG9uaW5nIiBzdHlsZT0iZmlsbDpub25lOyIgd2lkdGg9IjM5NS4zNDUiIHg9IjAuOTg3IiB5PSIwLjMyMiIvPjxnIGlkPSJHcm91cC0xLWNvcHkiPjxwYXRoIGQ9Ik0zODEuNzI0LDEyNS45MTdjMCwtOC4yNzggLTYuNzIyLC0xNSAtMTUsLTE1bC0yNTAuOTE1LDBjLTguMjc5LDAgLTE1LDYuNzIyIC0xNSwxNWwwLDE5My42NTJjMCw4LjI3OCA2LjcyMSwxNSAxNSwxNWwyNTAuOTE1LDBjOC4yNzgsMCAxNSwtNi43MjIgMTUsLTE1bDAsLTE5My42NTJaIiBpZD0iUm91bmRlZC1SZWN0YW5nbGUtMS1jb3B5LTMiIHN0eWxlPSJmaWxsOiNjY2U2ZmY7ZmlsbC1vcGFjaXR5OjAuMTYwNzg0OyIvPjxwYXRoIGQ9Ik0zNjAuMTQ5LDk5LjU4MmMwLC04LjI3OSAtNi43MjIsLTE1IC0xNSwtMTVsLTI0Ny45NDQsMGMtOC4yNzksMCAtMTUsNi43MjEgLTE1LDE1bDAsMTkxLjIyYzAsOC4yNzkgNi43MjEsMTUgMTUsMTVsMjQ3Ljk0NCwwYzguMjc4LDAgMTUsLTYuNzIxIDE1LC0xNWwwLC0xOTEuMjJaIiBpZD0iUm91bmRlZC1SZWN0YW5nbGUtMS1jb3B5LTIiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjEpOyIvPjxwYXRoIGQ9Ik05NS4zOCwxMjcuMDM5bDI0OC41NTUsMGwwLDE1Ni4zNTVjMCw0Ljc3NCAtMy44Nyw4LjY0NCAtOC42NDQsOC42NDRsLTIyOC4wMjYsMGMtNi41NjQsMCAtMTEuODg1LC01LjMyMSAtMTEuODg1LC0xMS44ODVsMCwtMTUzLjExNFoiIGlkPSJSb3VuZGVkLVJlY3RhbmdsZS0yLWNvcHkiIHN0eWxlPSJmaWxsOiNmZmY7Ii8+PGNsaXBQYXRoIGlkPSJfY2xpcDIiPjxwYXRoIGQ9Ik05NS4zOCwxMjcuMDM5bDI0OC41NTUsMGwwLDE1Ni4zNTVjMCw0Ljc3NCAtMy44Nyw4LjY0NCAtOC42NDQsOC42NDRsLTIyOC4wMjYsMGMtNi41NjQsMCAtMTEuODg1LC01LjMyMSAtMTEuODg1LC0xMS44ODVsMCwtMTUzLjExNFoiIGlkPSJSb3VuZGVkLVJlY3RhbmdsZS0yLWNvcHkxIi8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjX2NsaXAyKSI+PHJlY3QgaGVpZ2h0PSI0MS40MjgiIGlkPSJSZWN0YW5nbGUtMS1jb3B5IiBzdHlsZT0iZmlsbDojZTVmMWZmOyIgd2lkdGg9IjE5OS43NDciIHg9IjExNS45MzUiIHk9IjEzOS4wMDkiLz48cmVjdCBoZWlnaHQ9IjM0LjQ3MyIgaWQ9IlJlY3RhbmdsZS0yLWNvcHktNSIgc3R5bGU9ImZpbGw6I2U1ZjFmZjsiIHdpZHRoPSI2My44NDciIHg9IjExNy41MjIiIHk9IjE4OS4wMTMiLz48cmVjdCBoZWlnaHQ9IjQyLjAwMiIgaWQ9IlJlY3RhbmdsZS0yLWNvcHktNCIgc3R5bGU9ImZpbGw6I2U1ZjFmZjsiIHdpZHRoPSIxMzQuNjg0IiB4PSIxMTcuNTIyIiB5PSIyMzcuNDY0Ii8+PHJlY3QgaGVpZ2h0PSI0Mi4wMDIiIGlkPSJSZWN0YW5nbGUtMi1jb3B5LTMiIHN0eWxlPSJmaWxsOiNlNWYxZmY7IiB3aWR0aD0iNTQuODY2IiB4PSIyNjAuMzA5IiB5PSIyMzcuNDY0Ii8+PHJlY3QgaGVpZ2h0PSIxMi4zNTgiIGlkPSJSZWN0YW5nbGUtMy1jb3B5IiBzdHlsZT0iZmlsbDojZTVmMWZmOyIgd2lkdGg9IjU1LjM3MyIgeD0iMTkwLjU4NyIgeT0iMTg5LjI0OSIvPjxyZWN0IGhlaWdodD0iMTMuMjM1IiBpZD0iUmVjdGFuZ2xlLTQtY29weSIgc3R5bGU9ImZpbGw6I2U1ZjFmZjsiIHdpZHRoPSIxMjUuNzAzIiB4PSIxOTAuMTE0IiB5PSIyMTAuNDE5Ii8+PC9nPjxjaXJjbGUgY3g9IjEyOC4yMDgiIGN5PSIxMDQuOTI0IiBpZD0iRWxsaXBzZS0xLWNvcHktNSIgcj0iNy4wNzQiIHN0eWxlPSJmaWxsOiMwMDg0ZmY7Ii8+PGNpcmNsZSBjeD0iMTA3Ljg0OSIgY3k9IjEwNC45MjQiIGlkPSJFbGxpcHNlLTEtY29weS00IiByPSI3LjA3NCIgc3R5bGU9ImZpbGw6IzU1ZDdmZjsiLz48Y2lyY2xlIGN4PSIxNDguNTM0IiBjeT0iMTA0LjkyNCIgaWQ9IkVsbGlwc2UtMS1jb3B5LTMiIHI9IjcuMDc0IiBzdHlsZT0iZmlsbDojMGJiYzAwOyIvPjxwYXRoIGQ9Ik0zMDAuNjkxLDEwNC40NTJjMCwtMy41ODcgLTIuOTEzLC02LjUgLTYuNSwtNi41bC02OC4wMzMsMGMtMy41ODgsMCAtNi41LDIuOTEzIC02LjUsNi41bDAsMS4wNDZjMCwzLjU4NyAyLjkxMiw2LjUgNi41LDYuNWw2OC4wMzMsMGMzLjU4NywwIDYuNSwtMi45MTMgNi41LC02LjVsMCwtMS4wNDZaIiBpZD0iUm91bmRlZC1SZWN0YW5nbGUtMy1jb3B5IiBzdHlsZT0iZmlsbDojZTVmMWZmOyIvPjxwYXRoIGQ9Ik0zNDUuNjk4LDEwNC4zOThjMCwtMy42MTQgLTIuOTM0LC02LjU0NyAtNi41NDcsLTYuNTQ3bC05LjAyMiwwYy0zLjYxMywwIC02LjU0NywyLjkzMyAtNi41NDcsNi41NDdsMCwxLjA1M2MwLDMuNjEzIDIuOTM0LDYuNTQ3IDYuNTQ3LDYuNTQ3bDkuMDIyLDBjMy42MTMsMCA2LjU0NywtMi45MzQgNi41NDcsLTYuNTQ3bDAsLTEuMDUzWiIgaWQ9IlJvdW5kZWQtUmVjdGFuZ2xlLTMtY29weS0zIiBzdHlsZT0iZmlsbDojZTVmMWZmOyIvPjwvZz48ZyBpZD0iR3JvdXAtMSI+PHBhdGggZD0iTTM0NC45ODksNzcuMjk3YzAsLTguMjc4IC02LjcyMiwtMTUgLTE1LC0xNWwtMjUwLjkxNSwwYy04LjI3OSwwIC0xNSw2LjcyMiAtMTUsMTVsMCwxOTMuNjUyYzAsOC4yNzkgNi43MjEsMTUgMTUsMTVsMjUwLjkxNSwwYzguMjc4LDAgMTUsLTYuNzIxIDE1LC0xNWwwLC0xOTMuNjUyWiIgaWQ9IlJvdW5kZWQtUmVjdGFuZ2xlLTEtY29weS0zMSIgc3R5bGU9ImZpbGw6I2NjZTZmZjtmaWxsLW9wYWNpdHk6MC4xNjA3ODQ7Ii8+PHBhdGggZD0iTTMzMC45NzcsNjMuOTI3YzAsLTguMjc5IC02LjcyMiwtMTUgLTE1LC0xNWwtMjQ3Ljk0NCwwYy04LjI3OSwwIC0xNSw2LjcyMSAtMTUsMTVsMCwxOTEuMjJjMCw4LjI3OSA2LjcyMSwxNSAxNSwxNWwyNDcuOTQ0LDBjOC4yNzgsMCAxNSwtNi43MjEgMTUsLTE1bDAsLTE5MS4yMloiIGlkPSJSb3VuZGVkLVJlY3RhbmdsZS0xLWNvcHktMjEiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjMpOyIvPjxwYXRoIGQ9Ik02Ni4yMDksOTEuMzg0bDI0OC41NTQsMGwwLDE1Ni4zNTZjMCw0Ljc3MyAtMy44Nyw4LjY0MyAtOC42NDQsOC42NDNsLTIyOC4wMjYsMGMtNi41NjMsMCAtMTEuODg0LC01LjMyMSAtMTEuODg0LC0xMS44ODVsMCwtMTUzLjExNFoiIGlkPSJSb3VuZGVkLVJlY3RhbmdsZS0yLWNvcHkyIiBzdHlsZT0iZmlsbDojZmZmOyIvPjxjbGlwUGF0aCBpZD0iX2NsaXA0Ij48cGF0aCBkPSJNNjYuMjA5LDkxLjM4NGwyNDguNTU0LDBsMCwxNTYuMzU2YzAsNC43NzMgLTMuODcsOC42NDMgLTguNjQ0LDguNjQzbC0yMjguMDI2LDBjLTYuNTYzLDAgLTExLjg4NCwtNS4zMjEgLTExLjg4NCwtMTEuODg1bDAsLTE1My4xMTRaIiBpZD0iUm91bmRlZC1SZWN0YW5nbGUtMi1jb3B5MyIvPjwvY2xpcFBhdGg+PGcgY2xpcC1wYXRoPSJ1cmwoI19jbGlwNCkiPjxyZWN0IGhlaWdodD0iNDEuNDI4IiBpZD0iUmVjdGFuZ2xlLTEtY29weTEiIHN0eWxlPSJmaWxsOiNlNWYxZmY7IiB3aWR0aD0iMTk5Ljc0NyIgeD0iODYuNzYzIiB5PSIxMDMuMzU0Ii8+PHJlY3QgaGVpZ2h0PSIzNC40NzMiIGlkPSJSZWN0YW5nbGUtMi1jb3B5LTUxIiBzdHlsZT0iZmlsbDojZTVmMWZmOyIgd2lkdGg9IjYzLjg0NyIgeD0iODguMzUiIHk9IjE1My4zNTgiLz48cmVjdCBoZWlnaHQ9IjQyLjAwMiIgaWQ9IlJlY3RhbmdsZS0yLWNvcHktNDEiIHN0eWxlPSJmaWxsOiNlNWYxZmY7IiB3aWR0aD0iMTM0LjY4NCIgeD0iODguMzUiIHk9IjIwMS44MDkiLz48cmVjdCBoZWlnaHQ9IjQyLjAwMiIgaWQ9IlJlY3RhbmdsZS0yLWNvcHktMzEiIHN0eWxlPSJmaWxsOiNlNWYxZmY7IiB3aWR0aD0iNTQuODY2IiB4PSIyMzEuMTM3IiB5PSIyMDEuODA5Ii8+PHJlY3QgaGVpZ2h0PSIxMi4zNTgiIGlkPSJSZWN0YW5nbGUtMy1jb3B5MSIgc3R5bGU9ImZpbGw6I2U1ZjFmZjsiIHdpZHRoPSI1NS4zNzMiIHg9IjE2MS40MTUiIHk9IjE1My41OTUiLz48cmVjdCBoZWlnaHQ9IjEzLjIzNSIgaWQ9IlJlY3RhbmdsZS00LWNvcHkxIiBzdHlsZT0iZmlsbDojZTVmMWZmOyIgd2lkdGg9IjEyNS43MDMiIHg9IjE2MC45NDIiIHk9IjE3NC43NjUiLz48L2c+PGNpcmNsZSBjeD0iOTkuMDM2IiBjeT0iNjkuMjciIGlkPSJFbGxpcHNlLTEtY29weS01MSIgcj0iNy4wNzQiIHN0eWxlPSJmaWxsOiMwMDg0ZmY7Ii8+PGNpcmNsZSBjeD0iNzguNjc3IiBjeT0iNjkuMjciIGlkPSJFbGxpcHNlLTEtY29weS00MSIgcj0iNy4wNzQiIHN0eWxlPSJmaWxsOiM1NWQ3ZmY7Ii8+PGNpcmNsZSBjeD0iMTE5LjM2MiIgY3k9IjY5LjI3IiBpZD0iRWxsaXBzZS0xLWNvcHktMzEiIHI9IjcuMDc0IiBzdHlsZT0iZmlsbDojMGJiYzAwOyIvPjxwYXRoIGQ9Ik0yNzEuNTE5LDY4Ljc5N2MwLC0zLjU4NyAtMi45MTMsLTYuNSAtNi41LC02LjVsLTY4LjAzMywwYy0zLjU4OCwwIC02LjUsMi45MTMgLTYuNSw2LjVsMCwxLjA0NmMwLDMuNTg4IDIuOTEyLDYuNSA2LjUsNi41bDY4LjAzMywwYzMuNTg3LDAgNi41LC0yLjkxMiA2LjUsLTYuNWwwLC0xLjA0NloiIGlkPSJSb3VuZGVkLVJlY3RhbmdsZS0zLWNvcHkxIiBzdHlsZT0iZmlsbDojZTVmMWZmOyIvPjxwYXRoIGQ9Ik0zMTYuNTI2LDY4Ljc0M2MwLC0zLjYxMyAtMi45MzQsLTYuNTQ3IC02LjU0NywtNi41NDdsLTkuMDIyLDBjLTMuNjEzLDAgLTYuNTQ2LDIuOTM0IC02LjU0Niw2LjU0N2wwLDEuMDUzYzAsMy42MTQgMi45MzMsNi41NDcgNi41NDYsNi41NDdsOS4wMjIsMGMzLjYxMywwIDYuNTQ3LC0yLjkzMyA2LjU0NywtNi41NDdsMCwtMS4wNTNaIiBpZD0iUm91bmRlZC1SZWN0YW5nbGUtMy1jb3B5LTMxIiBzdHlsZT0iZmlsbDojZTVmMWZmOyIvPjwvZz48cGF0aCBkPSJNMzA4LjI1NCw0Ny4wNDVjMCwtOC4yNzkgLTYuNzIyLC0xNSAtMTUsLTE1bC0yNTAuOTE1LDBjLTguMjc5LDAgLTE1LDYuNzIxIC0xNSwxNWwwLDE5My42NTFjMCw4LjI3OSA2LjcyMSwxNSAxNSwxNWwyNTAuOTE1LDBjOC4yNzgsMCAxNSwtNi43MjEgMTUsLTE1bDAsLTE5My42NTFaIiBpZD0iUm91bmRlZC1SZWN0YW5nbGUtMS1jb3B5IiBzdHlsZT0iZmlsbDojY2NlNmZmO2ZpbGwtb3BhY2l0eTowLjE2MDc4NDsiLz48cGF0aCBkPSJNMjk0LjI0MiwzMy42NzVjMCwtOC4yNzkgLTYuNzIyLC0xNSAtMTUsLTE1bC0yNDcuOTQ0LDBjLTguMjc5LDAgLTE1LDYuNzIxIC0xNSwxNWwwLDE5MS4yMmMwLDguMjc5IDYuNzIxLDE1IDE1LDE1bDI0Ny45NDQsMGM4LjI3OCwwIDE1LC02LjcyMSAxNSwtMTVsMCwtMTkxLjIyWiIgaWQ9IlJvdW5kZWQtUmVjdGFuZ2xlLTEiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjUpOyIvPjxwYXRoIGQ9Ik0yOS40NzQsNjEuMTMybDI0OC41NTQsMGwwLDE1Ni4zNTVjMCw0Ljc3NCAtMy44Nyw4LjY0NCAtOC42NDQsOC42NDRsLTIyOC4wMjYsMGMtNi41NjMsMCAtMTEuODg0LC01LjMyMSAtMTEuODg0LC0xMS44ODVsMCwtMTUzLjExNFoiIGlkPSJSb3VuZGVkLVJlY3RhbmdsZS0yIiBzdHlsZT0iZmlsbDojZmZmOyIvPjxjbGlwUGF0aCBpZD0iX2NsaXA2Ij48cGF0aCBkPSJNMjkuNDc0LDYxLjEzMmwyNDguNTU0LDBsMCwxNTYuMzU1YzAsNC43NzQgLTMuODcsOC42NDQgLTguNjQ0LDguNjQ0bC0yMjguMDI2LDBjLTYuNTYzLDAgLTExLjg4NCwtNS4zMjEgLTExLjg4NCwtMTEuODg1bDAsLTE1My4xMTRaIi8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjX2NsaXA2KSI+PHJlY3QgaGVpZ2h0PSI0MS40MjgiIGlkPSJSZWN0YW5nbGUtMSIgc3R5bGU9ImZpbGw6I2U1ZjFmZjsiIHdpZHRoPSIyMzAuMjAzIiB4PSI0MC42NjkiIHk9IjczLjEwMiIvPjxyZWN0IGhlaWdodD0iMzQuNDczIiBpZD0iUmVjdGFuZ2xlLTIiIHN0eWxlPSJmaWxsOiNlNWYxZmY7IiB3aWR0aD0iNzMuNTgzIiB4PSI0Mi40OTgiIHk9IjEyMy4xMDYiLz48cmVjdCBoZWlnaHQ9IjQyLjAwMiIgaWQ9IlJlY3RhbmdsZS0yLWNvcHkiIHN0eWxlPSJmaWxsOiNlNWYxZmY7IiB3aWR0aD0iMTU1LjIyIiB4PSI0Mi40OTgiIHk9IjE3MS41NTciLz48cmVjdCBoZWlnaHQ9IjQyLjAwMiIgaWQ9IlJlY3RhbmdsZS0yLWNvcHktMiIgc3R5bGU9ImZpbGw6I2U1ZjFmZjsiIHdpZHRoPSI2My4yMzIiIHg9IjIwNy4wNTciIHk9IjE3MS41NTciLz48cmVjdCBoZWlnaHQ9IjEyLjM1OCIgaWQ9IlJlY3RhbmdsZS0zIiBzdHlsZT0iZmlsbDojZTVmMWZmOyIgd2lkdGg9IjYzLjgxNiIgeD0iMTI2LjcwNCIgeT0iMTIzLjM0MiIvPjxyZWN0IGhlaWdodD0iMTMuMjM1IiBpZD0iUmVjdGFuZ2xlLTQiIHN0eWxlPSJmaWxsOiNlNWYxZmY7IiB3aWR0aD0iMTQ0Ljg2OSIgeD0iMTI2LjE1OSIgeT0iMTQ0LjUxMiIvPjwvZz48Y2lyY2xlIGN4PSI2Mi4zMDEiIGN5PSIzOS4wMTciIGlkPSJFbGxpcHNlLTEiIHI9IjcuMDc0IiBzdHlsZT0iZmlsbDojMDA4NGZmOyIvPjxjaXJjbGUgY3g9IjQxLjk0MiIgY3k9IjM5LjAxNyIgaWQ9IkVsbGlwc2UtMS1jb3B5IiByPSI3LjA3NCIgc3R5bGU9ImZpbGw6IzU1ZDdmZjsiLz48Y2lyY2xlIGN4PSI4Mi42MjciIGN5PSIzOS4wMTciIGlkPSJFbGxpcHNlLTEtY29weS0yIiByPSI3LjA3NCIgc3R5bGU9ImZpbGw6IzBiYmMwMDsiLz48cGF0aCBkPSJNMjM0Ljc4NCwzOC41NDVjMCwtMy41ODcgLTIuOTEzLC02LjUgLTYuNSwtNi41bC02OC4wMzMsMGMtMy41ODgsMCAtNi41LDIuOTEzIC02LjUsNi41bDAsMS4wNDZjMCwzLjU4NyAyLjkxMiw2LjUgNi41LDYuNWw2OC4wMzMsMGMzLjU4NywwIDYuNSwtMi45MTMgNi41LC02LjVsMCwtMS4wNDZaIiBpZD0iUm91bmRlZC1SZWN0YW5nbGUtMyIgc3R5bGU9ImZpbGw6I2U1ZjFmZjsiLz48cGF0aCBkPSJNMjc5Ljc5MSwzOC40OTJjMCwtMy42MTQgLTIuOTM0LC02LjU0OCAtNi41NDksLTYuNTQ4bC05LjAxOCwwYy0zLjYxNCwwIC02LjU0OCwyLjkzNCAtNi41NDgsNi41NDhsMCwxLjA1YzAsMy42MTQgMi45MzQsNi41NDkgNi41NDgsNi41NDlsOS4wMTgsMGMzLjYxNSwwIDYuNTQ5LC0yLjkzNSA2LjU0OSwtNi41NDlsMCwtMS4wNVoiIGlkPSJSb3VuZGVkLVJlY3RhbmdsZS0zLWNvcHktMiIgc3R5bGU9ImZpbGw6I2U1ZjFmZjsiLz48cGF0aCBkPSJNMTgzLjIxOCwyMjAuMTM2Yy0yLjYyLDAgLTUuMTQxLDEuMjI5IC02LjEzLDIuOTgzYy0wLjY2NSwxLjE4MyAtMC41NTYsMi41MTIgMC4zMzMsNC4wNjFjMy4zMTgsNS43NjkgNi4wMDgsMTIuMjA1IDguODU4LDE5LjAxOWMzLjIwNiw3LjY2NiA2LjUxOSwxNS41OTUgMTEuMTUyLDIzLjcxNWM1LjgzOSwxMC4yNDEgOC43NzcsMTUuOTU2IDEwLjE3MSwxOC44MzJsNDIuMzAyLC0wLjAwOGMxLjI4MSwtMi4zNDEgMy43LC02LjU5MSA4LjM1MSwtMTQuNjUzYzkuMzk4LC0xNi4yOTUgOS4wMTQsLTMyLjkzNSA5LjAwOSwtMzMuMTAxbC0wLjAzNywtMTUuOTg1YzAsLTAuMTIxIDAuMDA2LC0wLjIzNiAwLjAxNiwtMC4zNTRjMC4wMjMsLTAuMzE1IDAuNTU0LC04LjEzMyAtNC45MjksLTkuMzc2Yy0wLjQ0OSwtMC4xMDIgLTAuODcxLC0wLjE1MiAtMS4yNDcsLTAuMTUyYy0wLjYyOSwwIC0yLjUyNiwwIC0zLjU0NCw0LjAzYy0wLjE4NSwxLjMyMSAtMC4zODMsMi4xNDggLTAuMzgzLDIuMTQ4Yy0wLjQ4NSwxLjk5NyAtMi40MDIsMy4yNzkgLTQuMzg0LDIuOTYyYy0xLjk5NywtMC4zMyAtMy40MDksLTIuMTUgLTMuMjUxLC00LjE5NWMwLjAxMywtMC4xODEgMC4wOTUsLTEuMTA0IDAuMzg2LC0yLjM3NWMwLjQ2OSwtMy44MiAtMC4wMzMsLTcuMDc0IC0xLjM1NSwtOC43MjNjLTAuNTE4LC0wLjY1IC0xLjQ3NywtMS41MjMgLTMuODA2LC0xLjY5MWMtMy4xMTUsLTAuMjE1IC01LjI0NCwwLjMzOCAtNS42NjQsNC4zNmwwLjE1MiwzLjgxMmMwLjA4MywyLjA1OCAtMS40MDYsMy44MzggLTMuNDIyLDQuMDc0Yy0yLjAwNywwLjI4MSAtMy44NjcsLTEuMTMgLTQuMjU2LC0zLjE1NmMtMC4wNDcsLTAuMjM2IC0wLjQyOCwtMi4zMTUgLTAuMjQ1LC00LjkxNmwtMC4wOTgsLTIuNDY3Yy0wLjAxNSwtMC4zODEgMC4wMjYsLTAuNzYxIDAuMTE2LC0xLjEyOGMwLDAgMC42MzksLTMuMDEgLTAuNzI5LC00Ljc5Yy0xLjE0NywtMS40ODQgLTMuNjEzLC0xLjgxOSAtNS40ODEsLTEuODRsLTAuMDAzLDBjLTIuNDczLDAgLTQuNzU0LDAuNjE5IC01LjUxNiw1LjAwNWwwLjIxMyw3LjgyNmMwLjA1NywyLjA0MiAtMS40MjQsMy43ODggLTMuNDE2LDQuMDNjLTIuMDAyLDAuMjc1IC0zLjgzNywtMS4xMDQgLTQuMjU0LC0zLjEwMmMtMC4wMzcsLTAuMTkxIC0wLjkzMywtNC41ODUgLTAuMzE1LC05LjI0N2wtMC43NTcsLTI3LjgzM2MtMC4wMDYsLTAuMTI2IC0wLjAwMywtMC4yNSAwLjAwNSwtMC4zNzNjMC4wNTEsLTAuOTczIC0wLjEzMiwtMy45MTEgLTEuNTkzLC01LjUwNmMtMC43NTcsLTAuODIzIC0xLjg2NSwtMS4yMzcgLTMuMzkxLC0xLjI1NmMtNS41MTYsMCAtNS44MzYsNi4zOTggLTUuODU3LDcuMTI5bC0wLjU2MSw0OC4wMDNjLTAuMDI0LDEuODkxIC0xLjM2MSwzLjUgLTMuMTksMy44MzljLTEuODE5LDAuMzIyIC0zLjYzNiwtMC42OTUgLTQuMzA2LC0yLjQ1OWMtMi40NDgsLTYuNDQ1IC03LjA3LC03LjE0MiAtOC45NDQsLTcuMTQybDAsMFoiIGlkPSJTaGFwZS0xLWNvcHktMiIgc3R5bGU9ImZpbGw6IzcwZDFmZjtmaWxsLW9wYWNpdHk6MC41Mjk0MTI7Ii8+PHBhdGggZD0iTTE4MS43NTEsMjEyLjEyOWMtMi4yMjMsMCAtNC4zNiwxLjAzOSAtNS4yLDIuNTIxYy0wLjU2MywwLjk5OSAtMC40NzIsMi4xMjIgMC4yODIsMy40MzFjMi44MTUsNC44NzMgNS4wOTcsMTAuMzEgNy41MTQsMTYuMDY3YzIuNzE5LDYuNDc3IDUuNTMsMTMuMTc1IDkuNDYsMjAuMDM0YzQuOTUzLDguNjUyIDcuNDQ0LDEzLjQ4MSA4LjYyNywxNS45MWwzNS44ODEsLTAuMDA2YzEuMDg2LC0xLjk3OCAzLjEzOCwtNS41NjkgNy4wODQsLTEyLjM4YzcuOTcsLTEzLjc2NiA3LjY0NSwtMjcuODI0IDcuNjQsLTI3Ljk2NGwtMC4wMywtMTMuNTA0YzAsLTAuMTAyIDAuMDA0LC0wLjE5OSAwLjAxMywtMC4yOTljMC4wMiwtMC4yNjYgMC40NywtNi44NzEgLTQuMTgxLC03LjkyMWMtMC4zOCwtMC4wODYgLTAuNzM5LC0wLjEyOCAtMS4wNTgsLTAuMTI4Yy0wLjUzMywwIC0yLjE0MiwwIC0zLjAwNSwzLjQwNGMtMC4xNTcsMS4xMTcgLTAuMzI2LDEuODE0IC0wLjMyNiwxLjgxNGMtMC40MTEsMS42ODggLTIuMDM3LDIuNzcxIC0zLjcxOCwyLjUwM2MtMS42OTQsLTAuMjc5IC0yLjg5MSwtMS44MTYgLTIuNzU4LC0zLjU0NGMwLjAxMSwtMC4xNTIgMC4wODEsLTAuOTMyIDAuMzI4LC0yLjAwNmMwLjM5OCwtMy4yMjggLTAuMDI4LC01Ljk3NyAtMS4xNSwtNy4zNjljLTAuNDM5LC0wLjU1IC0xLjI1MiwtMS4yODggLTMuMjI4LC0xLjQyOWMtMi42NDIsLTAuMTgyIC00LjQ0OCwwLjI4NiAtNC44MDQsMy42ODNsMC4xMjksMy4yMjFjMC4wNywxLjczOSAtMS4xOTMsMy4yNDIgLTIuOTAyLDMuNDQyYy0xLjcwMywwLjIzNyAtMy4yODEsLTAuOTU1IC0zLjYxMSwtMi42NjdjLTAuMDQsLTAuMTk5IC0wLjM2MywtMS45NTYgLTAuMjA4LC00LjE1M2wtMC4wODMsLTIuMDg0Yy0wLjAxMywtMC4zMjEgMC4wMjIsLTAuNjQzIDAuMDk5LC0wLjk1M2MwLDAgMC41NDIsLTIuNTQyIC0wLjYxOSwtNC4wNDZjLTAuOTcyLC0xLjI1NCAtMy4wNjQsLTEuNTM3IC00LjY0OSwtMS41NTVsLTAuMDAyLDBjLTIuMDk4LDAgLTQuMDMyLDAuNTIzIC00LjY3OSw0LjIyOGwwLjE4MSw2LjYxMmMwLjA0OCwxLjcyNSAtMS4yMDgsMy4yIC0yLjg5OCwzLjQwNGMtMS42OTgsMC4yMzMgLTMuMjU1LC0wLjkzMiAtMy42MDgsLTIuNjJjLTAuMDMxLC0wLjE2MiAtMC43OTIsLTMuODc0IC0wLjI2NywtNy44MTJsLTAuNjQzLC0yMy41MTRjLTAuMDA0LC0wLjEwNyAtMC4wMDIsLTAuMjExIDAuMDA1LC0wLjMxNWMwLjA0MywtMC44MjIgLTAuMTEyLC0zLjMwNCAtMS4zNTEsLTQuNjUxYy0wLjY0MywtMC42OTYgLTEuNTgyLC0xLjA0NiAtMi44NzYsLTEuMDYxYy00LjY4LDAgLTQuOTUxLDUuNDA1IC00Ljk2OCw2LjAyMmwtMC40NzcsNDAuNTU0Yy0wLjAxOSwxLjU5NyAtMS4xNTQsMi45NTcgLTIuNzA2LDMuMjQzYy0xLjU0MywwLjI3MiAtMy4wODQsLTAuNTg3IC0zLjY1MiwtMi4wNzhjLTIuMDc2LC01LjQ0NCAtNS45OTcsLTYuMDM0IC03LjU4NiwtNi4wMzRsMCwwWiIgaWQ9IlNoYXBlLTEtY29weSIgc3R5bGU9ImZpbGw6I2ZmZjsiLz48cGF0aCBkPSJNMjAwLjM0NiwyNzYuNzU3Yy0xLjMzNSwwIC0yLjUzNywtMC44MTcgLTMuMDQyLC0yLjA2N2MtMC4wMzcsLTAuMDg4IC0xLjczOCwtNC4xNDggLTkuMTg2LC0xNy4xNjFjLTQuMTMzLC03LjIxNiAtNy4xNTgsLTE0LjQxOSAtOS44MjUsLTIwLjc3MmMtMi4zMzIsLTUuNTU3IC00LjUzMywtMTAuODA0IC03LjEzOCwtMTUuMzA5Yy0xLjkzNywtMy4zNTQgLTIuMDQ4LC03LjAzOSAtMC4zMSwtMTAuMTE0YzIuMDE3LC0zLjU2NiA2LjI5NiwtNS44NyAxMC45MDYsLTUuODdjMi43NDMsMCA1LjI4NSwwLjc3MSA3LjQ3NSwyLjE5NmwwLjM3MSwtMzEuMzQyYzAuMTE0LC00LjM3NyAyLjY0OSwtMTIuNTY1IDExLjQzOCwtMTIuNTY1YzMuMzEzLDAuMDQ4IDUuOTUxLDEuMTY1IDcuODI5LDMuMjI5YzMuMTI1LDMuNDM1IDMuMTIzLDguMjg4IDMuMDc3LDkuNDEzbDAuMzgzLDE0LjAzOWMxLjQyMiwtMC42MjcgMy4wNDgsLTAuOTUgNC44NTQsLTAuOTVjNC42MDksMC4wNTEgNy45MDksMS40NTMgOS45NzUsNC4xNzdjMC40NjgsMC42MTQgMC44MzcsMS4yNTIgMS4xMjUsMS44OTRjMS43MTIsLTAuNzggMy42ODgsLTEuMTIxIDYuMTA3LC0wLjk0MWMzLjMsMC4yMzQgNi4wMTksMS41NyA3Ljg2NiwzLjg2MmMwLjg1NywxLjA3IDEuNDY5LDIuMjY2IDEuODk1LDMuNTA1YzEuNzgyLC0wLjgwMiAzLjg3OCwtMC45NzcgNi4xMjQsLTAuNDdjOC4xMjYsMS44MzQgOS42NDYsMTAuNDE5IDkuMzE1LDE0Ljg0OWwwLjAyOSwxMy4yNzRjMC4wMTcsMC41NTYgMC4zNzgsMTYuMDQxIC04LjU0MiwzMS40NDRjLTYuMDg0LDEwLjUwOSAtNy40MjIsMTIuOTgxIC03LjcxMywxMy41NDRjLTAuMTI0LDAuMzMgLTAuMzA2LDAuNjQ0IC0wLjUzNywwLjkyOGMtMC42NjUsMC44MDggLTEuNzAxLDEuMjc2IC0yLjczLDEuMjAxbC0zOS43NDYsMC4wMDZsMCwwWm0tMTguNTk1LC02NC42MjhjLTIuMjIzLDAgLTQuMzYsMS4wMzkgLTUuMiwyLjUyMWMtMC41NjMsMC45OTkgLTAuNDcyLDIuMTIyIDAuMjgyLDMuNDMxYzIuODE1LDQuODczIDUuMDk3LDEwLjMxIDcuNTE0LDE2LjA2N2MyLjcxOSw2LjQ3NyA1LjUzLDEzLjE3NSA5LjQ2LDIwLjAzNGM0Ljk1Myw4LjY1MiA3LjQ0NCwxMy40ODEgOC42MjcsMTUuOTFsMzUuODgxLC0wLjAwNmMxLjA4NiwtMS45NzggMy4xMzgsLTUuNTY5IDcuMDg0LC0xMi4zOGM3Ljk3LC0xMy43NjYgNy42NDUsLTI3LjgyNCA3LjY0LC0yNy45NjRsLTAuMDMsLTEzLjUwNGMwLC0wLjEwMiAwLjAwNCwtMC4xOTkgMC4wMTMsLTAuMjk5YzAuMDIsLTAuMjY2IDAuNDcsLTYuODcxIC00LjE4MSwtNy45MjFjLTAuMzgsLTAuMDg2IC0wLjczOSwtMC4xMjggLTEuMDU4LC0wLjEyOGMtMC41MzMsMCAtMi4xNDIsMCAtMy4wMDUsMy40MDRjLTAuMTU3LDEuMTE3IC0wLjMyNiwxLjgxNCAtMC4zMjYsMS44MTRjLTAuNDExLDEuNjg4IC0yLjAzNywyLjc3MSAtMy43MTgsMi41MDNjLTEuNjk0LC0wLjI3OSAtMi44OTEsLTEuODE2IC0yLjc1OCwtMy41NDRjMC4wMTEsLTAuMTUyIDAuMDgxLC0wLjkzMiAwLjMyOCwtMi4wMDZjMC4zOTgsLTMuMjI4IC0wLjAyOCwtNS45NzcgLTEuMTUsLTcuMzY5Yy0wLjQzOSwtMC41NSAtMS4yNTIsLTEuMjg4IC0zLjIyOCwtMS40MjljLTIuNjQyLC0wLjE4MiAtNC40NDgsMC4yODYgLTQuODA0LDMuNjgzbDAuMTI5LDMuMjIxYzAuMDcsMS43MzkgLTEuMTkzLDMuMjQyIC0yLjkwMiwzLjQ0MmMtMS43MDMsMC4yMzcgLTMuMjgxLC0wLjk1NSAtMy42MTEsLTIuNjY3Yy0wLjA0LC0wLjE5OSAtMC4zNjMsLTEuOTU2IC0wLjIwOCwtNC4xNTNsLTAuMDgzLC0yLjA4NGMtMC4wMTMsLTAuMzIxIDAuMDIyLC0wLjY0MyAwLjA5OSwtMC45NTNjMCwwIDAuNTQyLC0yLjU0MiAtMC42MTksLTQuMDQ2Yy0wLjk3MiwtMS4yNTQgLTMuMDY0LC0xLjUzNyAtNC42NDksLTEuNTU1bC0wLjAwMiwwYy0yLjA5OCwwIC00LjAzMiwwLjUyMyAtNC42NzksNC4yMjhsMC4xODEsNi42MTJjMC4wNDgsMS43MjUgLTEuMjA4LDMuMiAtMi44OTgsMy40MDRjLTEuNjk4LDAuMjMzIC0zLjI1NSwtMC45MzIgLTMuNjA4LC0yLjYyYy0wLjAzMSwtMC4xNjIgLTAuNzkyLC0zLjg3NCAtMC4yNjcsLTcuODEybC0wLjY0MywtMjMuNTE0Yy0wLjAwNCwtMC4xMDcgLTAuMDAyLC0wLjIxMSAwLjAwNSwtMC4zMTVjMC4wNDMsLTAuODIyIC0wLjExMiwtMy4zMDQgLTEuMzUxLC00LjY1MWMtMC42NDMsLTAuNjk2IC0xLjU4MiwtMS4wNDYgLTIuODc2LC0xLjA2MWMtNC42OCwwIC00Ljk1MSw1LjQwNSAtNC45NjgsNi4wMjJsLTAuNDc3LDQwLjU1NGMtMC4wMTksMS41OTcgLTEuMTU0LDIuOTU3IC0yLjcwNiwzLjI0M2MtMS41NDMsMC4yNzIgLTMuMDg0LC0wLjU4NyAtMy42NTIsLTIuMDc4Yy0yLjA3NiwtNS40NDQgLTUuOTk3LC02LjAzNCAtNy41ODYsLTYuMDM0bDAsMFoiIGlkPSJTaGFwZS0xIiBzdHlsZT0iZmlsbDojMDA4NGZmOyIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEuNDg5NzllLTE0LDI0My4zMDEsLTI0My4zMDEsMS40ODk3OWUtMTQsMzU0LjAzOCwxNzEuMzU0KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJfTGluZWFyMSIgeDE9IjAiIHgyPSIxIiB5MT0iMCIgeTI9IjAiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I2VmZjZmZjtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I2MzZGFmNjtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMS41ODQ3NWUtMTQsMjU4LjgwOSwtMjU4LjgwOSwxLjU4NDc1ZS0xNCwzMjUuMDIyLDEwMS44MjYpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9Il9MaW5lYXIzIiB4MT0iMCIgeDI9IjEiIHkxPSIwIiB5Mj0iMCI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojZGZlZmZmO3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojOGNjM2ZjO3N0b3Atb3BhY2l0eToxIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxLjE4Njg1ZS0xNCwxOTMuODI3LC0xOTMuODI3LDEuMTg2ODVlLTE0LDI1MS4xNTksMTQzLjM4NCkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iX0xpbmVhcjUiIHgxPSIwIiB4Mj0iMSIgeTE9IjAiIHkyPSIwIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNjY2U2ZmY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMxZDk4ZmY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=',
		windowIcon:true,
		invertIcon:false,
		top: {
			current:0
		},
		left: {
			current:0
		},
		width:{
			min:350,
			max:600,
			default:350,
			current:350
		},
		height:{
			min:300,
			max:500,
			default:300,
			current:300,
		}
	}
	constructor(options={}) {
		let win = this;
		$.extend(win.options, options);
		nos.System.addCSS('window');
		win.create();
		win.register();
		win.listen();
		win.bringToFront();
	}
	create(){
		let win = this;
		win.el = $('<window/>',{'data-app':win.options.appname});
		win.resizeHandles = {
			left: {el:$('<resizehandle/>',{'data-direction':'w',css:{display:(!win.options.resizable?'none':'')}})},
			top: {el:$('<resizehandle/>',{'data-direction':'n',css:{display:(!win.options.resizable?'none':'')}})},
			right: {el:$('<resizehandle/>',{'data-direction':'e',css:{display:(!win.options.resizable?'none':'')}})},
			bottom: {el:$('<resizehandle/>',{'data-direction':'s',css:{display:(!win.options.resizable?'none':'')}})},
			topLeft: {el:$('<resizehandle/>',{'data-direction':'nw',css:{display:(!win.options.resizable?'none':'')}})},
			topRight: {el:$('<resizehandle/>',{'data-direction':'ne',css:{display:(!win.options.resizable?'none':'')}})},
			bottomLeft: {el:$('<resizehandle/>',{'data-direction':'sw',css:{display:(!win.options.resizable?'none':'')}})},
			bottomRight: {el:$('<resizehandle/>',{'data-direction':'se',css:{display:(!win.options.resizable?'none':'')}})},
		}
		win.topbar = {
			el:$('<topbar/>'),
			icon:{
				el:$('<img/>',{src:win.options.icon})
			},
			title:{
				el:$('<title/>',{html:win.options.title})
			},
			buttons:{
				el:$('<buttons/>'),
				minimize:{
					el:$('<div/>',{'data-window':'minimize'})
				},
				maximize:{
					el:$('<div/>',{'data-window':'maximize',css:{display:(nos.System.isMobile()||!win.options.resizable?'none':'')}})
				},
				close:{
					el:$('<div/>',{'data-window':'close'})
				}
			}
		}
		win.content = {
			el:$('<content/>'),
			left:{
				el:$('<left/>')
			},
			center:{
				el:$('<center/>')
			},
			right:{
				el:$('<right/>')
			}
		}
		win.status = {
			el:$('<status/>',{html:'<appname>'+win.options.appname+'</appname><version>v'+win.options.version+'</version>'})
		}
		//append elements
		if(win.options.windowIcon) {win.topbar.el.append(win.topbar.icon.el);}
		win.topbar.el.append(win.topbar.title.el);
		win.topbar.el.append(win.topbar.buttons.el);
		win.topbar.buttons.el.append(win.topbar.buttons.minimize.el);
		win.topbar.buttons.el.append(win.topbar.buttons.maximize.el);
		win.topbar.buttons.el.append(win.topbar.buttons.close.el);
		win.content.el.append(win.content.left.el);
		win.content.el.append(win.content.center.el);
		win.content.el.append(win.content.right.el);
		win.el.append(win.topbar.el);
		win.el.append(win.content.el);
		if(win.options.status) {win.el.append(win.status.el);}
		$.each(win.resizeHandles,function(key,handle){
			win.el.append(handle.el);
		})
		if(win.options.invertIcon){
			win.topbar.icon.el.css({filter:'invert('+win.options.invertIcon+')'});
		}
		//append window to desktop
		nos.UI.Desktop.el.append(win.el);
		win.applySize();
		win.applyPosition();
		if(win.options.minimized){win.minimize();}
		nos.System.log('Window loaded');
	}
	applySize(){
		let win = this;
		if(win.options.maximized || nos.System.isMobile()){
			win.el.css({width: nos.UI.Desktop.width()+'px',height: nos.UI.Desktop.height()+'px'});
		}
		else {
			win.el.css({width: win.options.width.current+'px',height: win.options.height.current+'px'});
		}
	}
	applyPosition(){
		let win = this;
		if(win.options.maximized || nos.System.isMobile()){
			win.el.css({top: 0,left: 0});
		}
		else {
			win.el.css({top: win.options.top.current+'px',left: win.options.left.current+'px'});
		}
	}
	listen(){
		let win = this;
		win.el.on('mousedown',function(){win.bringToFront.call(win)});
		win.topbar.buttons.close.el.on('click',function(){win.close.call(win)});
		win.topbar.buttons.minimize.el.on('click',function(){win.minimize.call(win)});
		win.topbar.buttons.maximize.el.on('click',function(){win.maximize.call(win)});
		win.topbar.el.on('dblclick',function(){win.maximize.call(win)});
		win.topbar.el.on('mousedown',function(event){win.drag.call(win,event)});
		$.each(win.resizeHandles,function(key,handle){
			handle.el.on('mousedown',function(event){win.resize.call(win,event,handle)});
		})
	}
	resize(event,handle){
		let win = this;
		if(!win.options.resizable || win.options.maximized){return;}
		let direction = handle.el.data('direction');
		win.mousePosition.x = event.clientX;
		win.mousePosition.y = event.clientY;
		win.options.top.start = win.options.top.current;
		win.options.left.start = win.options.left.current;
		win.options.width.start = win.options.width.current;
		win.options.height.start = win.options.height.current;
		$(document).on('mousemove.window',function(event){
			let offsetX = event.clientX - win.mousePosition.x;
			let offsetY = event.clientY - win.mousePosition.y;
			if(direction[0] === 'n' || direction[1] === 'n'){
				win.options.top.current = win.options.top.start+offsetY;
				win.options.height.current = win.options.height.start-offsetY;
				//prevent resize out of desktop
				if(win.options.top.current < 0){win.options.height.current += win.options.top.current;win.options.top.current = 0;}
				//check min height
				if(win.options.height.current <= win.options.height.min){win.options.top.current -= win.options.height.min-win.options.height.current;win.options.height.current = win.options.height.min;}
				//check max height
				else if(win.options.height.current >= win.options.height.max){win.options.top.current -= win.options.height.max-win.options.height.current;win.options.height.current = win.options.height.max;}
			}
			if(direction[0] === 'e' || direction[1] === 'e'){
				win.options.width.current = win.options.width.start+offsetX;
				//prevent resize out of desktop
				if(win.options.left.current+win.options.width.current >= nos.UI.Desktop.width()){win.options.width.current = nos.UI.Desktop.width()-win.options.left.current;}
				//check min width
				if(win.options.width.current <= win.options.width.min){win.options.width.current = win.options.width.min;}
				//check max width
				else if(win.options.width.current >= win.options.width.max){win.options.width.current = win.options.width.max;}
			}
			if(direction[0] === 's' || direction[1] === 's'){
				win.options.height.current = win.options.height.start+offsetY;
				//prevent resize out of desktop
				if(win.options.top.current+win.options.height.current >= nos.UI.Desktop.height()){win.options.height.current = nos.UI.Desktop.height()-win.options.top.current;}
				//check min height
				if(win.options.height.current <= win.options.height.min){win.options.height.current = win.options.height.min;}
				//check max height
				else if(win.options.height.current >= win.options.height.max){win.options.height.current = win.options.height.max;}
			}
			if(direction[0] === 'w' || direction[1] === 'w'){
				win.options.left.current = win.options.left.start+offsetX;
				win.options.width.current = win.options.width.start-offsetX;
				//prevent resize out of desktop
				if(win.options.left.current < 0){win.options.width.current += win.options.left.current;win.options.left.current = 0;}
				//check min width
				if(win.options.width.current <= win.options.width.min){win.options.left.current -= win.options.width.min-win.options.width.current;win.options.width.current = win.options.width.min;}
				//check max width
				else if(win.options.width.current >= win.options.width.max){win.options.left.current -= win.options.width.max-win.options.width.current;win.options.width.current = win.options.width.max;}
			}
			//apply changes
			win.applyPosition();
			win.applySize();
		})
		$(document).one('mouseup',function(){
			$(document).off('mousemove.window');
			win.save();
		})
	}
	drag(event){
		let win = this;
		if(!win.options.draggable || win.options.maximized){return;}
		win.mousePosition.x = event.clientX;
		win.mousePosition.y = event.clientY;
		win.options.top.start = win.options.top.current;
		win.options.left.start = win.options.left.current;
		$(document).on('mousemove.window',function(event){
			let offsetX = event.clientX - win.mousePosition.x;
			let offsetY = event.clientY - win.mousePosition.y;
			win.options.top.current = win.options.top.start+offsetY;
			win.options.left.current = win.options.left.start+offsetX;
			//prevent moving out of desktop
			if(win.options.top.current < 0){win.options.top.current = 0;}
			else if(win.options.top.current+win.options.height.current >= nos.UI.Desktop.height()) {win.options.top.current = nos.UI.Desktop.height() - win.options.height.current;}
			if(win.options.left.current < 0){win.options.left.current = 0;}
			else if(win.options.left.current+win.options.width.current >= nos.UI.Desktop.width()){win.options.left.current = nos.UI.Desktop.width()-win.options.width.current}
			win.applyPosition();
		})
		$(document).one('mouseup',function(){
			$(document).off('mousemove.window');
			win.save();
		})
	}
	bringToFront(){
		let win = this;
		nos.UI.Taskbar.removeActive();
		win.taskbarIcon.addClass('active');
		if(win.el.css('z-index') != nos.UI.zindex){
			win.el.css({zIndex:++nos.UI.zindex});
		}
	}
	close(){
		let win = this;
		nos.Apps.kill(win.options.appname);
		win.el.remove();
		win.taskbarIcon.remove();
	}
	minimize(){
		let win = this;
		win.options.minimized = true;
		win.el.css({display:'none'});
		win.save();
	}
	restore(){
		let win = this;
		if(!win.options.resizable){return;}
		win.options.maximized = false;
		win.options.minimized = false;
		win.el.css({display:'grid'});
		win.applySize();
		win.applyPosition();
		win.bringToFront();
		win.save();
	}
	maximize(){
		let win = this;
		if(win.options.maximized){win.restore();}
		else {
			win.options.maximized = true;
			win.applySize();
			win.applyPosition();
			win.save();
		}
	}
	toggle(){
		let win = this;
		if(win.el.css('display') == 'none' || win.el.css('z-index') != nos.UI.zindex){
			win.restore();
		}
		else {
			win.minimize();
		}
	}
	register(){
		let win = this;
		win.taskbarIcon = nos.UI.Taskbar.add(win.options.icon,win.options.title);
		win.taskbarIcon.on('click',function(){win.toggle()});
	}
	save(){
		let win = this;
		let appname = win.options.appname;
		if(appname !== 'undefined'){
			let options = {
				maximized:win.options.maximized,
				minimized:win.options.minimized,
				height:{current:win.options.height.current},
				width:{current:win.options.width.current},
				top:{current:win.options.top.current},
				left:{current:win.options.left.current},
			}
			$.post( 'user/app/'+appname+'/save', options );
		}
	}
	setContent(el){
		let win = this;
		win.content.center.el.append(el);
	}
	setLeft(el){
		let win = this;
		win.content.left.el.append(el);
	}
	setRight(el){
		let win = this;
		win.content.right.el.append(el);
	}
}
