const greet = require('./greeting');
const url = require('url');


function app(req, res) {
    if (req.method === 'GET') {

        const parsedUrl = url.parse(req.url, {
            parseQueryString: true
        });
        const salutation = parsedUrl.query.salutation;

        let name = parsedUrl.pathname.split('/')[2];

        res.end(greet(salutation, name));

    }
}

module.exports = app;