class Calc {
	previous='';
	current='';
	operator='';
	options={
		appname:'calc',
		icon:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmlld0JveD0iMCAwIDUxMS45OTk5OSA1MTEuOTk5OTkiCiAgIGhlaWdodD0iNTEyIgogICB3aWR0aD0iNTEyIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmcyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxK2RldmVsIHIxNDA1NSBjdXN0b20iCiAgIHNvZGlwb2RpOmRvY25hbWU9ImdjYWxjdWxhdG9yLnN2ZyI+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSI5NjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAwOCIKICAgICBpZD0ibmFtZWR2aWV3MjIiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOnpvb209IjAuNzQyMTg3NSIKICAgICBpbmtzY2FwZTpjeD0iMzA5Ljg5NDc0IgogICAgIGlua3NjYXBlOmN5PSIyNTYiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ijk2MCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMzIiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcyIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTgiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM2Ij4KICAgIDxmaWx0ZXIKICAgICAgIGhlaWdodD0iMS4wMzYiCiAgICAgICB5PSItMC4wMTc5OTk5OTkiCiAgICAgICB3aWR0aD0iMS4wMzYiCiAgICAgICB4PSItMC4wMTc5OTk5OTkiCiAgICAgICBpZD0iZmlsdGVyNDUwOCIKICAgICAgIHN0eWxlPSJjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6c1JHQiI+CiAgICAgIDxmZUdhdXNzaWFuQmx1cgogICAgICAgICBpZD0iZmVHYXVzc2lhbkJsdXI0NTEwIgogICAgICAgICBzdGREZXZpYXRpb249IjAuMzgxOTUxNzciIC8+CiAgICA8L2ZpbHRlcj4KICAgIDxmaWx0ZXIKICAgICAgIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIKICAgICAgIHN0eWxlPSJjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6c1JHQiIKICAgICAgIGlkPSJmaWx0ZXI0MTgzIgogICAgICAgeD0iLTAuMDM2MDMyODkzIgogICAgICAgd2lkdGg9IjEuMDcyMDY1OCIKICAgICAgIHk9Ii0wLjAzNTk2NzE2NyIKICAgICAgIGhlaWdodD0iMS4wNzE5MzQzIj4KICAgICAgPGZlR2F1c3NpYW5CbHVyCiAgICAgICAgIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIKICAgICAgICAgc3RkRGV2aWF0aW9uPSIzLjc0NTUxMjkiCiAgICAgICAgIGlkPSJmZUdhdXNzaWFuQmx1cjQxODUiIC8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+CiAgPHBhdGgKICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzU5NTk1OTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MjMuNDgzMDAzNjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5OjQ2Ljk2NjAwNjM1LCA0Ni45NjYwMDYzNTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgZD0ibSAyNTYuMDMxMjUsMzEuMDAwMDEgMCwyMjQuOTk0MTQgLTAuMDIxNSwwIDAsLTIyNC45NzQ2MDkgLTE4OC41NzQyMiwwIEMgNDguNjkzNDYsMzEuMTI2Mjg3IDMzLjM3NDU2LDQ1LjAyMjExMiAzMSw2My4xMjExMDQgbCAwLDE5Mi45MDQyOTYgMC4wNDEwMSwwIDAsMTg3LjkyNTc4IGMgMTBlLTYsMjAuNTAyNDYgMTYuNTA0ODgsMzcuMDA3ODEgMzcuMDA3ODEsMzcuMDA3ODEgbCAxODcuOTQxNDEsMCAwLDAuMDQxIDE4OC4yMzYzMywwIEMgNDY0LjQyOTkyLDQ4MC44OTA2NSA0ODAuNjc3NSw0NjQuNzU1NDcgNDgxLDQ0NC42MDU0OCBsIDAsLTE4OC42MTEzMyAtMC4xMTMyOCwwIDAsLTE4OC4wNDg4MjggYyAwLC0yMC4wNzUzMiAtMTUuODMyODgsLTM2LjI3NzI1NyAtMzUuNzQwMjQsLTM2Ljk0NTMxMiBsIC0xODkuMTE1MjMsMCB6IgogICAgIGlkPSJyZWN0NDE0OS04OSIKICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogIDxwYXRoCiAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICBpZD0icmVjdDQxNDktMSIKICAgICBkPSJtIDI1NS45ODk3OCwyNTUuOTk0OSAwLDIyNS4wMDUxIDE4OC4yMzc1NywwIEMgNDY0LjQzMDcxLDQ4MC44OTA2NCA0ODAuNjc3NSw0NjQuNzU2MyA0ODEsNDQ0LjYwNjMxIGwgMCwtMTg4LjYxMTQxIC0yMjUuMDEwMjIsMCB6IgogICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojNjU2NTY1O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoyMy40ODMwMDM2MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6NDYuOTY2MDA2MzUsIDQ2Ljk2NjAwNjM1O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICA8cGF0aAogICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgaWQ9InJlY3Q0MTQ5LTMiCiAgICAgZD0ibSAzMS4wNDA4ODEsMjU2LjAxNTMxIDAsMTg3LjkzNjkyIGMgNWUtNiwyMC41MDI0NiAxNi41MDQ3OTgsMzcuMDA2ODQgMzcuMDA3NzI0LDM3LjAwNjg0IGwgMTg3Ljk2MTYxNSwwIDAsLTIyNC45NDM3NiAtMjI0Ljk2OTMzOSwwIHoiCiAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiM4YzhjOGM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjIzLjQ4MzAwMzYyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTo0Ni45NjYwMDYzNSwgNDYuOTY2MDA2MzU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiAvPgogIDxwYXRoCiAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiM1OTU5NTk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjIzLjQ4MzAwMzYyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTo0Ni45NjYwMDYzNSwgNDYuOTY2MDA2MzU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIgogICAgIGQ9Ik0gMzEgMjQ2LjAyNTM5IEwgMzEgMjU2LjAyNTM5IEwgMzEuMDQxMDE2IDI1Ni4wMjUzOSBMIDMxLjA0MTAxNiAyNDYuMDI1MzkgTCAzMSAyNDYuMDI1MzkgeiBNIDMxLjA0MTAxNiA0MzMuOTUxMTcgTCAzMS4wNDEwMTYgNDQzLjk1MTE3IEMgMzEuMDQxMDI2IDQ2NC40NTM2MyA0Ny41NDU4OTggNDgwLjk1ODk4IDY4LjA0ODgyOCA0ODAuOTU4OTggTCAyNTUuOTkwMjMgNDgwLjk1ODk4IEwgMjU1Ljk5MDIzIDQ4MSBMIDQ0NC4yMjY1NiA0ODEgQyA0NjQuNDI5OTMgNDgwLjg5MDY2IDQ4MC42Nzc0OSA0NjQuNzU1NDYgNDgxIDQ0NC42MDU0NyBMIDQ4MSA0MzQuNjA1NDcgQyA0ODAuNjc3NDkgNDU0Ljc1NTQ2IDQ2NC40Mjk5MyA0NzAuODkwNjYgNDQ0LjIyNjU2IDQ3MSBMIDI1NS45OTAyMyA0NzEgTCAyNTUuOTkwMjMgNDcwLjk1ODk4IEwgNjguMDQ4ODI4IDQ3MC45NTg5OCBDIDQ3LjU0NTg5OCA0NzAuOTU4OTggMzEuMDQxMDI2IDQ1NC40NTM2MyAzMS4wNDEwMTYgNDMzLjk1MTE3IHogIgogICAgIGlkPSJyZWN0NDE0OS04OS0yLTEiIC8+CiAgPGVsbGlwc2UKICAgICBjeT0iMzY2LjcwMTI2IgogICAgIGN4PSIzNjguMDYzMTciCiAgICAgaWQ9InBhdGgzMzUyLTQiCiAgICAgc3R5bGU9Im9wYWNpdHk6MC42O2ZpbGw6IzMwMzAzMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjE7ZmlsdGVyOnVybCgjZmlsdGVyNDE4MykiCiAgICAgcng9IjEyNC43MzY0NiIKICAgICByeT0iMTI0Ljk2NDQiIC8+CiAgPGNpcmNsZQogICAgIGN5PSIzNjYuNzAxMjYiCiAgICAgY3g9IjM2OC4wNjMxNyIKICAgICBpZD0icGF0aDMzNDAiCiAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNiYTE3NGU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE5LjM0ODc1MTA3O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTozOC42OTc1MDI1LCAzOC42OTc1MDI1O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICByPSIxMjMuMTcxNSIgLz4KICA8cGF0aAogICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgaWQ9InJlY3Q0MTQ5LTgiCiAgICAgZD0iTSA2Ny40MzUzODMsMzEuMDIwNDYgQyA0OC42OTMzMDMsMzEuMTI3MjA2IDMzLjM3NDU2MSw0NS4wMjI2ODQgMzEuMDAwMDAyLDYzLjEyMTY3NiBsIDAsMTkyLjkwMzg4NCAyMjUuMDEwMjE4LDAgMCwtMjI1LjAwNTEgLTE4OC41NzQ4MzcsMCB6IgogICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojYTZhNmE2O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoyMy40ODMwMDM2MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6NDYuOTY2MDA2MzUsIDQ2Ljk2NjAwNjM1O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICA8ZwogICAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMDAwMDExNCwwLDAsMC45OTk5ODg2MSw4LDgpIgogICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6MTUzLjQ5MzYwNjU3cHg7bGluZS1oZWlnaHQ6MTI1JTtmb250LWZhbWlseTpTYW5zOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J1NhbnMsIEJvbGQnO3RleHQtYWxpZ246c3RhcnQ7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOnN0YXJ0O29wYWNpdHk6MC4yO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6NS4yMzI3MzY1OXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgaWQ9InRleHQ0MjUyLTYiPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBkPSJtIDE1Mi40MjIzLDk1LjQwNzk1NCAwLDM5LjI3Mjc3NiAzOS4xMjI4OCwwIDAsMTcuNjg3NzQgLTM5LjEyMjg4LDAgMCwzOS4yNzI3OCAtMTcuODM3NjQsMCAwLC0zOS4yNzI3OCAtMzkuMTIyODgyLDAgMCwtMTcuNjg3NzQgMzkuMTIyODgyLDAgMCwtMzkuMjcyNzc2IDE3LjgzNzY0LDAgeiIKICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjUuMjMyNzM2NTlweCIKICAgICAgIGlkPSJwYXRoNDIwMS01IiAvPgogIDwvZz4KICA8ZwogICAgIHRyYW5zZm9ybT0ic2NhbGUoMS4wMDAwMTE0LDAuOTk5OTg4NjEpIgogICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6MTUzLjQ5MzYwNjU3cHg7bGluZS1oZWlnaHQ6MTI1JTtmb250LWZhbWlseTpTYW5zOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J1NhbnMsIEJvbGQnO3RleHQtYWxpZ246c3RhcnQ7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOnN0YXJ0O2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6NS4yMzI3MzY1OXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgaWQ9InRleHQ0MjUyIj4KICAgIDxwYXRoCiAgICAgICBkPSJtIDE1Mi40MjIzLDk1LjQwNzk1NCAwLDM5LjI3Mjc3NiAzOS4xMjI4OCwwIDAsMTcuNjg3NzQgLTM5LjEyMjg4LDAgMCwzOS4yNzI3OCAtMTcuODM3NjQsMCAwLC0zOS4yNzI3OCAtMzkuMTIyODgyLDAgMCwtMTcuNjg3NzQgMzkuMTIyODgyLDAgMCwtMzkuMjcyNzc2IDE3LjgzNzY0LDAgeiIKICAgICAgIHN0eWxlPSJzdHJva2Utd2lkdGg6NS4yMzI3MzY1OXB4IgogICAgICAgaWQ9InBhdGg0MjAxIiAvPgogIDwvZz4KICA8ZwogICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuODI3NTkyMjUsMCwwLDEuMjA4MzI0NSw4LDgpIgogICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6MTI3LjAyODY4NjUycHg7bGluZS1oZWlnaHQ6MTI1JTtmb250LWZhbWlseTpTYW5zOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J1NhbnMsIEJvbGQnO3RleHQtYWxpZ246c3RhcnQ7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOnN0YXJ0O29wYWNpdHk6MC4yO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6NC4zMzA1MjI1NHB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgaWQ9InRleHQ0MjUyLTQtMyI+CiAgICA8cGF0aAogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGQ9Im0gNDAzLjU2MDA3LDExNS43ODQzNiAxMTMuMzgzMDMsMCAwLDE2LjAwMjYzIC0xMTMuMzgzMDMsMCAwLC0xNi4wMDI2MyB6IgogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6NC4zMzA1MjI1NHB4IgogICAgICAgaWQ9InBhdGg0MjA0LTciIC8+CiAgPC9nPgogIDxnCiAgICAgdHJhbnNmb3JtPSJzY2FsZSgwLjgyNzU5MjI1LDEuMjA4MzI0NSkiCiAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZToxMjcuMDI4Njg2NTJweDtsaW5lLWhlaWdodDoxMjUlO2ZvbnQtZmFtaWx5OlNhbnM7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonU2FucywgQm9sZCc7dGV4dC1hbGlnbjpzdGFydDtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDt3cml0aW5nLW1vZGU6bHItdGI7dGV4dC1hbmNob3I6c3RhcnQ7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDo0LjMzMDUyMjU0cHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICBpZD0idGV4dDQyNTItNCI+CiAgICA8cGF0aAogICAgICAgZD0ibSA0MDMuNTYwMDcsMTE1Ljc4NDM2IDExMy4zODMwMywwIDAsMTYuMDAyNjMgLTExMy4zODMwMywwIDAsLTE2LjAwMjYzIHoiCiAgICAgICBzdHlsZT0ic3Ryb2tlLXdpZHRoOjQuMzMwNTIyNTRweCIKICAgICAgIGlkPSJwYXRoNDIwNCIgLz4KICA8L2c+CiAgPGcKICAgICB0cmFuc2Zvcm09InNjYWxlKDEuMDAwMDExNCwwLjk5OTk4ODYxKSIKICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpib2xkO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOjE1My40OTM2MDY1N3B4O2xpbmUtaGVpZ2h0OjEyNSU7Zm9udC1mYW1pbHk6U2FuczstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidTYW5zLCBCb2xkJzt0ZXh0LWFsaWduOnN0YXJ0O2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O3dyaXRpbmctbW9kZTpsci10Yjt0ZXh0LWFuY2hvcjpzdGFydDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjUuMjMyNzM2NTlweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxO29wYWNpdHk6MC4yIgogICAgIGlkPSJ0ZXh0NDI1Mi0yLTUiPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBkPSJtIDE5Ni42NDI1NiwzNDQuMDM4OTYgLTMyLjUyNzQ1LDMyLjUyNzQ1IDMyLjUyNzQ1LDMyLjM3NzU2IC0xMi41OTEyNywxMi41OTEyNyAtMzIuNTI3NDUsLTMyLjM3NzU2IC0zMi41Mjc0NiwzMi4zNzc1NiAtMTIuNTkxMjcsLTEyLjU5MTI3IDMyLjUyNzQ2LC0zMi4zNzc1NiAtMzIuNTI3NDYsLTMyLjUyNzQ1IDEyLjU5MTI3LC0xMi41OTEyNyAzMi41Mjc0NiwzMi41Mjc0NSAzMi41Mjc0NSwtMzIuNTI3NDUgMTIuNTkxMjcsMTIuNTkxMjcgeiIKICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjUuMjMyNzM2NTlweCIKICAgICAgIGlkPSJwYXRoNDIxMC04IiAvPgogIDwvZz4KICA8ZwogICAgIHRyYW5zZm9ybT0ic2NhbGUoMS4wMDAwMTE0LDAuOTk5OTg4NjEpIgogICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6MTUzLjQ5MzYwNjU3cHg7bGluZS1oZWlnaHQ6MTI1JTtmb250LWZhbWlseTpTYW5zOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J1NhbnMsIEJvbGQnO3RleHQtYWxpZ246c3RhcnQ7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOnN0YXJ0O2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6NS4yMzI3MzY1OXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgaWQ9InRleHQ0MjUyLTIiPgogICAgPHBhdGgKICAgICAgIGQ9Im0gMTg4LjY0MjY0LDMzNi4wMzg4OCAtMzIuNTI3NDUsMzIuNTI3NDUgMzIuNTI3NDUsMzIuMzc3NTYgLTEyLjU5MTI3LDEyLjU5MTI3IC0zMi41Mjc0NSwtMzIuMzc3NTYgLTMyLjUyNzQ2LDMyLjM3NzU2IC0xMi41OTEyNjksLTEyLjU5MTI3IDMyLjUyNzQ1OSwtMzIuMzc3NTYgLTMyLjUyNzQ1OSwtMzIuNTI3NDUgMTIuNTkxMjY5LC0xMi41OTEyNyAzMi41Mjc0NiwzMi41Mjc0NSAzMi41Mjc0NSwtMzIuNTI3NDUgMTIuNTkxMjcsMTIuNTkxMjcgeiIKICAgICAgIHN0eWxlPSJzdHJva2Utd2lkdGg6NS4yMzI3MzY1OXB4IgogICAgICAgaWQ9InBhdGg0MjEwIiAvPgogIDwvZz4KICA8ZwogICAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMDAwMDExNCwwLDAsMC45OTk5ODg2MSw4LDgpIgogICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6MTUzLjQ5MzYwNjU3cHg7bGluZS1oZWlnaHQ6MTI1JTtmb250LWZhbWlseTpTYW5zOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J1NhbnMsIEJvbGQnO3RleHQtYWxpZ246c3RhcnQ7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOnN0YXJ0O29wYWNpdHk6MC4yO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6NS4yMzI3MzY1OXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgaWQ9InRleHQ0MjUyLTAtOCI+CiAgICA8cGF0aAogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGQ9Im0gMzIwLjAxNzI3LDM0MC43NzM0MSA5Ni4wODM0LDAgMCwxNy42MTI3OSAtOTYuMDgzNCwwIDAsLTE3LjYxMjc5IHogbSAwLDM0LjEwMTM2IDk2LjA4MzQsMCAwLDE3Ljc2MjY5IC05Ni4wODM0LDAgMCwtMTcuNzYyNjkgeiIKICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjUuMjMyNzM2NTlweCIKICAgICAgIGlkPSJwYXRoNDIwNy04IiAvPgogIDwvZz4KICA8ZwogICAgIHRyYW5zZm9ybT0ic2NhbGUoMS4wMDAwMTE0LDAuOTk5OTg4NjEpIgogICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6MTUzLjQ5MzYwNjU3cHg7bGluZS1oZWlnaHQ6MTI1JTtmb250LWZhbWlseTpTYW5zOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J1NhbnMsIEJvbGQnO3RleHQtYWxpZ246c3RhcnQ7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOnN0YXJ0O2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6NS4yMzI3MzY1OXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgaWQ9InRleHQ0MjUyLTAiPgogICAgPHBhdGgKICAgICAgIGQ9Im0gMzIwLjAxNzI3LDM0MC43NzM0MSA5Ni4wODM0LDAgMCwxNy42MTI3OSAtOTYuMDgzNCwwIDAsLTE3LjYxMjc5IHogbSAwLDM0LjEwMTM2IDk2LjA4MzQsMCAwLDE3Ljc2MjY5IC05Ni4wODM0LDAgMCwtMTcuNzYyNjkgeiIKICAgICAgIHN0eWxlPSJzdHJva2Utd2lkdGg6NS4yMzI3MzY1OXB4IgogICAgICAgaWQ9InBhdGg0MjA3IiAvPgogIDwvZz4KICA8cGF0aAogICAgIHN0eWxlPSJvcGFjaXR5OjAuMztmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjIzLjQ4MzAwMzYyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTo0Ni45NjYwMDYzNSwgNDYuOTY2MDA2MzUwMDAwMDA3Nzk7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIgogICAgIGQ9Ik0gMjU2LjAzMTI1IDMxIEwgMjU2LjAzMTI1IDQzIEwgNDQ1LjE0NjQ4IDQzIEMgNDY1LjA1Mzg0IDQzLjY2ODA2IDQ4MC44ODY3MiA1OS44Njk5OTIgNDgwLjg4NjcyIDc5Ljk0NTMxMiBMIDQ4MC44ODY3MiA2Ny45NDUzMTIgQyA0ODAuODg2NzIgNDcuODY5OTkyIDQ2NS4wNTM4NCAzMS42NjgwNiA0NDUuMTQ2NDggMzEgTCAyNTYuMDMxMjUgMzEgeiBNIDY3LjQzNTU0NyAzMS4wMTk1MzEgQyA0OC42OTM0NzcgMzEuMTI2MjgxIDMzLjM3NDU2IDQ1LjAyMjEwNCAzMSA2My4xMjEwOTQgTCAzMSA3NS4xMjEwOTQgQyAzMy4zNzQ1NiA1Ny4wMjIxMDQgNDguNjkzNDY3IDQzLjEyNjI4MSA2Ny40MzU1NDcgNDMuMDE5NTMxIEwgMjU2LjAwOTc3IDQzLjAxOTUzMSBMIDI1Ni4wMDk3NyAzMS4wMTk1MzEgTCA2Ny40MzU1NDcgMzEuMDE5NTMxIHogTSAyNTYuMDA5NzcgMjU1Ljk5NDE0IEwgMjU2LjAwOTc3IDI2Ny45OTQxNCBMIDI1Ni4wMzEyNSAyNjcuOTk0MTQgTCAyNTYuMDMxMjUgMjU1Ljk5NDE0IEwgMjU2LjAwOTc3IDI1NS45OTQxNCB6IE0gNDgwLjg4NjcyIDI1NS45OTQxNCBMIDQ4MC44ODY3MiAyNjcuOTk0MTQgTCA0ODEgMjY3Ljk5NDE0IEwgNDgxIDI1NS45OTQxNCBMIDQ4MC44ODY3MiAyNTUuOTk0MTQgeiAiCiAgICAgaWQ9InJlY3Q0MTQ5LTg5LTIiIC8+Cjwvc3ZnPgo=',
		windowIcon:false,
		title:'Rechner',
		version:'0.0.1',
		status:false,
		resizable:false,
		width:{current:320},
		height:{current:460}
	}
	constructor() {
		let app = this;
		app.win = new nos.Window(app.options);
		nos.Apps.addCSS('calc');
		app.setContent();
		app.listen();
	}
	listen(){
		let app = this;
		app.buttons[0].el.on('click',function(){app.current += '0';app.update();});
		app.buttons[1].el.on('click',function(){app.current += '1';app.update();});
		app.buttons[2].el.on('click',function(){app.current += '2';app.update();});
		app.buttons[3].el.on('click',function(){app.current += '3';app.update();});
		app.buttons[4].el.on('click',function(){app.current += '4';app.update();});
		app.buttons[5].el.on('click',function(){app.current += '5';app.update();});
		app.buttons[6].el.on('click',function(){app.current += '6';app.update();});
		app.buttons[7].el.on('click',function(){app.current += '7';app.update();});
		app.buttons[8].el.on('click',function(){app.current += '8';app.update();});
		app.buttons[9].el.on('click',function(){app.current += '9';app.update();});
		app.buttons.percent.el.on('click',function(){app.current = app.current/100;app.update();});
		app.buttons.decimal.el.on('click',function(){app.current += '.';app.update();});
		app.buttons.plusminus.el.on('click',function(){app.current = app.current*-1;app.update();});
		app.buttons.ce.el.on('click',function(){app.current = '';app.update();});
		app.buttons.c.el.on('click',function(){app.previous='';app.current = '';app.operator='';app.update();app.updateHistory()});
		app.buttons.back.el.on('click',function(){app.current = String (app.current).slice(0, -1);app.update();});
		app.buttons.plus.el.on('click',function(){app.previous = app.current;app.current='';app.operator='+';app.updateHistory();app.update();});
		app.buttons.minus.el.on('click',function(){app.previous = app.current;app.current='';app.operator='-';app.updateHistory();app.update();});
		app.buttons.times.el.on('click',function(){app.previous = app.current;app.current='';app.operator='&times;';app.updateHistory();app.update();});
		app.buttons.divide.el.on('click',function(){app.previous = app.current;app.current='';app.operator='&divide;';app.updateHistory();app.update();});
		app.buttons.equals.el.on('click',function(){app.calc();});
		app.buttons.divideBy.el.on('click',function(){app.previous=1;app.operator='/';app.calc()});
		app.buttons.square.el.on('click',function(){app.previous=app.current;app.current='';app.operator='²';app.calc()});
		app.buttons.squareRoot.el.on('click',function(){app.operator='²&radic;';app.calc()});
	}
	calc(){
		let app = this;
		let result = 0;
		switch (app.operator){
			case '+':
				result = (app.previous*1)+(app.current*1);
				break;
			case '-':
				result = (app.previous*1)-(app.current*1);
				break;
			case '&times;':
				result = (app.previous*1)*(app.current*1);
				break;
			case '&divide;':
				result = (app.previous*1)/(app.current*1);
				break;
			case '²':
				result = (app.previous*1)*(app.previous*1);
				break;
			case '²&radic;':
				result = Math.sqrt(app.current*1);
				break;
			case '/':
				result = 1/(app.current*1);
				break;
		}
		app.history.el.html(app.previous+app.operator+app.current);
		app.current = result;
		app.update();
	}
	update(){
		let app = this;
		app.display.el.html(app.current);
	}
	updateHistory(){
		let app = this;
		app.history.el.html(app.previous+app.operator);
	}
	setContent(){
		let app = this;
		app.history = {el:$('<history/>')};
		app.display = {el:$('<display/>')};
		app.mem = {el:$('<mem/>',{html:'<i>MC</i><i>MR</i><i>M+</i><i>M-</i><i>MS</i><i>M</i>'})};
		app.buttons = {
			el:$('<buttons/>'),
			percent:{el:$('<button/>',{html:'%'})},
			ce:{el:$('<button/>',{html:'CE'})},
			c:{el:$('<button/>',{html:'C'})},
			back:{el:$('<button/>',{html:'&#8592;'})},
			divideBy:{el:$('<button/>',{html:'1/x'})},
			square:{el:$('<button/>',{html:'x²'})},
			squareRoot:{el:$('<button/>',{html:'²&radic;x'})},
			divide:{el:$('<button/>',{html:'&divide;'})},
			7:{el:$('<button/>',{html:'7',type:'digit'})},
			8:{el:$('<button/>',{html:'8',type:'digit'})},
			9:{el:$('<button/>',{html:'9',type:'digit'})},
			times:{el:$('<button/>',{html:'&times;'})},
			4:{el:$('<button/>',{html:'4',type:'digit'})},
			5:{el:$('<button/>',{html:'5',type:'digit'})},
			6:{el:$('<button/>',{html:'6',type:'digit'})},
			minus:{el:$('<button/>',{html:'-'})},
			1:{el:$('<button/>',{html:'1',type:'digit'})},
			2:{el:$('<button/>',{html:'2',type:'digit'})},
			3:{el:$('<button/>',{html:'3',type:'digit'})},
			plus:{el:$('<button/>',{html:'+'})},
			plusminus:{el:$('<button/>',{html:'&plusmn;',type:'digit'})},
			0:{el:$('<button/>',{html:'0',type:'digit'})},
			decimal:{el:$('<button/>',{html:',',type:'digit'})},
			equals:{el:$('<button/>',{html:'='})},
		}
		app.buttons.el.append(app.buttons.percent.el);
		app.buttons.el.append(app.buttons.ce.el);
		app.buttons.el.append(app.buttons.c.el);
		app.buttons.el.append(app.buttons.back.el);
		app.buttons.el.append(app.buttons.divideBy.el);
		app.buttons.el.append(app.buttons.square.el);
		app.buttons.el.append(app.buttons.squareRoot.el);
		app.buttons.el.append(app.buttons.divide.el);
		app.buttons.el.append(app.buttons[7].el);
		app.buttons.el.append(app.buttons[8].el);
		app.buttons.el.append(app.buttons[9].el);
		app.buttons.el.append(app.buttons.times.el);
		app.buttons.el.append(app.buttons[4].el);
		app.buttons.el.append(app.buttons[5].el);
		app.buttons.el.append(app.buttons[6].el);
		app.buttons.el.append(app.buttons.minus.el);
		app.buttons.el.append(app.buttons[1].el);
		app.buttons.el.append(app.buttons[2].el);
		app.buttons.el.append(app.buttons[3].el);
		app.buttons.el.append(app.buttons.plus.el);
		app.buttons.el.append(app.buttons.plusminus.el);
		app.buttons.el.append(app.buttons[0].el);
		app.buttons.el.append(app.buttons.decimal.el);
		app.buttons.el.append(app.buttons.equals.el);

		app.win.setContent(app.history.el);
		app.win.setContent(app.display.el);
		app.win.setContent(app.mem.el);
		app.win.setContent(app.buttons.el);
	}

}
nos.Apps.src.calc = Calc;