const greeting = require('./greeting');


function app(req, res) {
    if (req.method === 'GET') {
        let url = req.url.split('/');   // gives out an array of strings
        if (url[1] === 'greeting') res.end(greeting.greet(url));

    }
}

module.exports = app;