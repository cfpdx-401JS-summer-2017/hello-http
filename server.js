const http = require('http');
const app = require('./lib/app.js');

const server = http.createServer(app);

// server.res.setHeader('Content-Type', 'application/json');

// server.res.statusCode = 200;
// server.res.statusMessage = 'success';
// if (server.req.url === 'error') {
// 	server.res.statusCode = 400;
// 	server.res.end('warning');
// }

const port = 2000;

server.listen(port, err => {
	console.log('server listening on port: ', server.address());
	if (err) {
		return console.log('there was an error', err);
	}
});
