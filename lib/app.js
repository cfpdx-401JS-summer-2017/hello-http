const makeGreeting = require('./greeting');
const rollFact = require('./fact').rollFact;
const {makeLog, getAllLogs, getLog} = require('./log.js');

function app(req,res) {

    let slashSplitUrl = req.url.split('/');
    let name = 'stranger';
    let salutation = 'hello';

    if(slashSplitUrl[2]) {
        let url = slashSplitUrl[2].split('?salutation=');
        name = url[0];
        url[1] ? salutation = url[1] : null;
    }

    let route = slashSplitUrl[1];
    let timeStamp = slashSplitUrl[2];

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
        res.end(`CANNOT ${req.method} ${route}`);
    }

}

module.exports = app;