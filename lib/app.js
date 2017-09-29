const { makeLog, getAllLogs, getLog } = require('./log');
const rollFact = require('./fact').rollFact;
const makeGreeting = require('./greeting');



function app(req, res) {
    let splitUrl = req.url.split('/');
    let name = 'Stranger';
    let salutation = 'Howdy';

    if (splitUrl[2]) {
        let url = splitUrl[2].split('?salutation=');
        name = url[0];
        url[1] ? salutation = url[1] : null;
    }

    let route = splitUrl[1];
    let timeStamp = splitUrl[2];

    if (req.method === 'GET' && route === 'greeting') {
        res.end(makeGreeting(name, salutation));
    }
    else if (req.method === 'GET' && route === 'fact') {
        res.end(rollFact());
    }

    else if (req.method === 'POST' && route === 'logs') {
        let body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
        });
        res.end(makeLog(body));
    }

    else if (req.method === 'GET' && route === 'logs' && timeStamp) {
        getLog(res, timeStamp);
    }

    else if (req.method === 'GET' && route === 'logs') {
        getAllLogs(res);
    }

    else if (req.method !== 'GET') {
        res.statusCode = 404;
        res.end(`Cannot ${req.method} ${route}`);
    }
}



module.exports = app;