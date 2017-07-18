const url = require('url');
const greeting = require('./greeting');
const fact = require('./fact');
const cowsay = require('cowsay');

function app(req, res) {

    const parsedUrl = url.parse(req.url, {
        parseQueryString: true
    });

    const path = parsedUrl.pathname.split('/')[1] || null;

    let statement = '';

    if (req.method === 'GET') {

        if (path === 'greeting') {

            statement = greeting(parsedUrl);

        } else if (path === 'fact') {

            statement = fact();

        } else {

            statement = `cannot GET ${path}`;

        }
    } else {

        statement = `cannot ${req.method} ${path}`;

    }

    res.end(cowsay.say({text: statement}));
}

module.exports = app;