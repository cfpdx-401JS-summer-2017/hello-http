const url = require('url');
const figlet = require('figlet');
const greeting = require('./greeting');
const fact = require('./fact');

function app(req, res) {
    let parsedUrl = url.parse(req.url, { parseQueryString: true });
    let pathname = parsedUrl.pathname.split('/');
    let path = pathname[1];
    let personName = pathname[2];
    let salutation = parsedUrl.query.salutation;
    let format = parsedUrl.query.format;

    if (req.method === 'GET') {
        let response = '';
        if (path === 'greeting') {
            response = greeting(personName, salutation);
        } else if (path === 'fact') {
            response = fact();
        } else {
            response = 'Hello World!';
        }

        if (format === 'figlet') {
            res.end(figlet.textSync(response, 'small'));
        } else {
            res.end(response);
        }

    } else {
        res.statusCode = 400;
        res.statusMessage = 'Not Found';
        res.end(`CANNOT ${req.method} ${path}`);
    }
}

module.exports = app;
