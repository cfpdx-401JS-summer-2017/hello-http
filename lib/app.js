const path = require('path');
const log = require('./log');


function app(req, res) {
    if (req.method === 'GET') {
        let url = req.url.split('/');
        console.log(url);

        if (url[1] === 'greeting' && !url[2]) {
            res.end('hello stranger');
        } 
        else if (url[1] === 'greeting' && !url[3]) {
            res.end('hello ' + url[2]);
        }
        else if (req.method === 'POST' && path === 'log'){
            let body = '';
            req.on('data', data => {
                body += data;
            });
            req.on('end', () => {
                const obj = JSON.parse(body);
                res.setHeader('content-type', 'application/json');
                res.end(JSON.stringify(obj));
            });
            res.end(log());
        }
        else if (url[1] === 'greeting' && !url[4]) {
            res.end('hello ' + url[3]);
        }
        else {
            res.statusCode = 404;
            res.end(`CANNOT ${req.method} /${path}`);
        }
    }
}


module.exports = app;