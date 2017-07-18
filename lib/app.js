const greet = require('./greeting');
const url = require('url');
const fact = require('./fact');
const store = require('./store');

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
            obj._id = new Date().toISOString();
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(obj)); // should return { timestamp: <timestamp> }

        });


    } else {
        res.statusCode = 404;
        res.end(`CANNOT ${req.method} /${path}`);
    }
}

module.exports = app;