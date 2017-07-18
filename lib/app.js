const server = require('../server');
const url = require('url');

module.exports = {
	listen() {
		console.log('i hear you');
	},
	greeting(urlToParse) {
		console.log('test it! ', urlToParse);
		const parsedUrl = url.parse(JSON.stringify(urlToParse));
	},
	randomFacts() {
		console.log('welcome to random facts!');
	},
	error() {},
	otherRoutes() {}
};
