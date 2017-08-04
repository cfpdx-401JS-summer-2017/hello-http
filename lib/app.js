const makeGreeting = require('./greeting.js');
const url = require('url');

function app(req,res) {
    // let parsedUrl = url.parse(req.url, {
    //     parseQueryString: true
    // });

    let url = req.url.split('/');
    let greeting = url[1];
    let name = url[2];

    if (req.method === 'GET') {
        console.log(url);

        if (greeting === 'greeting' && !name) {
            res.end('hello stranger');
        } else if (greeting === 'greeting') {
            res.end('hello ' + name);
        }
    }
}

module.exports = app;