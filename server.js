const http = require('http');
const app = require('./lib/app.js');

const server = http.createServer((request, response) => {
	console.log('yay! new server!'); //when i send a get this console.log fires twice
});
const port = 2000;

server.listen(port, err => {
	console.log('server listening on port: ', server.address());
	if (err) {
		return console.log('there was an error', err);
	}
});
