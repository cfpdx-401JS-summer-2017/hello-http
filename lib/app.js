const server = require('../server');
const url = require('url');

function app() {
	console.log('yo: ', server);

	function listen(server) {
		console.log('i hear you');
	}
	function greeting(urlToParse) {
		const urlToParse = 'http://www.google.com';
		const parsedUrl = url.parse(JSON.stringify(urlToParse));
	}
	function randomFacts() {}
	function error() {}
	function otherRoutes() {}
	module.exports = app;
}
