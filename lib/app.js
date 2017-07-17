const greeting = require('./greeting');

function app(req, res) {
    let url = req.url.split('/');
    let path = url[1];
    let name = url[2];

    if (req.method === 'GET') {
        if (path === 'greeting') {
            res.end(greeting(name));
        } else if (path === 'fact') {

            res.end('random http fact');

        } else {
            res.end('hello world');
        }

    }
}

module.exports = app;
