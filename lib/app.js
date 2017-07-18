function app(server) {
	const server = require('../server');
	const url = require('url');

	console.log('yo: ', server);

	function listen(server) {
		server.listen(port, err => {
			console.log('server listening on port: ', server.address());
			if (err) {
				return console.log('there was an error', err);
			}
		});
	}
	function greeting(urlToParse) {
		const urlToParse = 'http://www.google.com';
		const parsedUrl = url.parse(JSON.stringify(urlToParse));
	}
	function randomFacts() {}
	function error() {}
	function otherRoutes() {}
}

module.exports = app;
