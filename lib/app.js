const url = require('url');
const greeting = require('./greeting');
const fact = require('./fact');

function app(req, res) {
    let parsedUrl = url.parse(req.url, { parseQueryString: true });
    let pathname = parsedUrl.pathname.split('/');
    let path = pathname[1];
    let personName = pathname[2];
    let salutation = parsedUrl.query.salutation;

    if (req.method === 'GET') {
        if (path === 'greeting') {
            res.end(greeting(personName, salutation));
        } else if (path === 'fact') {
            res.end(fact());
        } else {
            res.end('hello world');
        }
    }
}

module.exports = app;
