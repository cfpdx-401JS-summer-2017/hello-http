const url = require('url');

module.exports = function app(req, res) {
	// handle all the http stuff
	// 1. determine what route, params, etc.
	// 2. call the right handler
	// 3. do the http work to send the result back over the res
	// console.log(req.url);
	// console.log(parsedUrl);

	const parsedUrl = url.parse(req.url);
	const route = parsedUrl.pathname;
	const greet = greeting(parsedUrl);
	// greeting(parsedUrl);
	// console.log(req);

	// const name = figureOutNameFrom(parseUrl);
	// const salutation = figureOutSalutationFrom(parseUrl.query);
	// const greeting = greet(saluation, name);
	res.end(greet);
	// res.end();
};

function listen() {
	console.log('i hear you');
}

function greeting(parsedUrl) {
	console.log('test it! ', parsedUrl);
	const end = 'hello';
	return end;
}

function randomFacts() {
	console.log('welcome to random facts!');
}
function error() {}

function otherRoutes() {}
