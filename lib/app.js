const url = require('url');

module.exports = function app(req, res) {
	// handle all the http stuff
	// 1. determine what route, params, etc.
	// 2. call the right handler
	// 3. do the http work to send the result back over the res
	const parsedUrl = url.parse(req.url);
	// console.log(parsedUrl);
	const greeting = res.end(greet(parsedUrl));
	const errororing = res.end(error(parsedUrl));
	// const name = figureOutNameFrom(parseUrl);
	// const salutation = figureOutSalutationFrom(parseUrl.query);
	// console.log('g: ', greet);
};

function listen() {
	console.log('i hear you');
}

function greet(parsedUrl) {
	const queryArr = decodeURI(parsedUrl.query).split('&');
	const goBack = { name: 'stranger', salutation: 'hello' };
	queryArr.forEach(function(el) {
		goBack[el.split('=')[0]] = el.split('=')[1];
	});
	return JSON.stringify(goBack);
}

function randomFacts() {
	console.log('welcome to random facts!');
}
function error(parsedUrl) {}

function otherRoutes() {}
