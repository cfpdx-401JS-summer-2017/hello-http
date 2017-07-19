const greet = require('./greeting');
const url = require('url');
const fact = require('./fact');
const write = require('./write');

function app(req, res) {
    const parsedUrl = url.parse(req.url, {
        parseQueryString: true
    });
    const parsedPath = parsedUrl.pathname.split('/');
    const path = parsedPath[1];

    if (req.method === 'GET' && path === 'greeting') {

        const salutation = parsedUrl.query.salutation;
        const name = parsedPath[2];
        res.end(greet(salutation, name));

    } else if (req.method === 'GET' && path === 'fact') {

        res.end(fact.giveFact());

    } else if (req.method === 'POST' && path === 'logs') {
        let body = '';

        req.on('data', data => {
            body += data;
        });

        req.on('end', () => {
            const obj = JSON.parse(body);
            res.setHeader('Content-Type', 'application/json');
            const timestamp = write(obj);
            res.end(JSON.stringify(timestamp));
        });

    } else if (req.method === 'GET' && path === 'logs') {
        res.end();
    } else {
        res.statusCode = 404;
        res.end(`CANNOT ${req.method} /${path}`);
    }
}

module.exports = app;