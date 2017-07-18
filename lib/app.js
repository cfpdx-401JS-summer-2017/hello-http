const url = require('url');
const path = require('path');
const greeting = require('./greeting');
const fact = require('./fact');
const Log = require('./log');
const cowsay = require('cowsay');

function app(req, res) {

    const parsedUrl = url.parse(req.url, {
        parseQueryString: true
    });
    const dir = parsedUrl.pathname.split('/')[1] || null;
    let statement = '';

    if (req.method === 'GET') {
        if (dir === 'greeting') {
            statement = greeting(parsedUrl);
        } else if (dir === 'fact') {
            statement = fact();
        } else {
            statement = `cannot GET ${dir}`;
        }
    } else if (req.method === 'POST') {
        const logDir = path.join(__dirname, '../logs');
        const log = new Log(logDir);
        log.save({ type: 'cat', name: 'garfield' }, (err, newLog) => {
            console.log('newLog = '+JSON.stringify(newLog));
            console.log('newLog.timestamp = '+newLog.timestamp);
            statement = newLog.timestamp;
            console.log('statement!!! ' + statement);
        });
    } else {
        statement = `cannot ${req.method} ${dir}`;
    }

    res.end(cowsay.say({ text: statement }));
}

module.exports = app;