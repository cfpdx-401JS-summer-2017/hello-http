# hello-http

### HTTP Server
* This API creates an HTTP server that will return a greeting to the user at a specific path. 
* If the user puts in a request to head to 'localhost:3000/greeting/user', the API will return 'hello user'. 
* 'Hello' is the default greeting. 
* You can also create your own greeting by using a query, for example: 'localhost:3000/greeting/user?salutation=yo' will return 'yo user'.
* It will also return random facts about HTTP if the user goes to the route '/fact'
* This API uses Mocha, Chai and Chai-Http
