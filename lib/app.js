const url = require('url');
const path = require('path');
const greeting = require('./greeting');
const fact = require('./fact');
const Log = require('./log');
const getlogs = require('./getlogs');
const cowsay = require('cowsay');

function app(req, res) {

    const parsedUrl = url.parse(req.url, {
        parseQueryString: true
    });
    const dir = parsedUrl.pathname.split('/')[1] || null;
    const logDir = path.join(__dirname, '../logs');

    let statement = '';

    if (req.method === 'GET') {
        if (dir === 'greeting') {
            statement = greeting(parsedUrl);
        } else if (dir === 'fact') {
            statement = fact();
        } else if (dir === 'logs') {
            // getlogs(logDir, (err, newArr) => {
            // statement = newArr.length;
            // });
            statement = 'foo';
        } else {
            statement = `cannot GET ${dir}`;
        }
        res.end(cowsay.say({ text: statement }));
    } else if (req.method === 'POST') {
        let body = '';
        req.on('data', data => {
            body += data;
        });
        req.on('end', () => {
            const log = new Log(logDir);
            log.save({ content: body }, (err, newLog) => {
                // statement = newLog.content;
                statement = 'bar';
                res.end(cowsay.say({ text: statement }));
            });
        });
    } else {
        statement = `cannot ${req.method} ${dir}`;
        res.end(cowsay.say({ text: statement }));
    }
}

module.exports = app;