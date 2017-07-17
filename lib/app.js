const url = require('url');
const factArray = [
    'REST (Representational State Transfer) was introduced and defined in 2000 by Roy Fielding in his doctoral dissertation.',
    'Postman has an intuitive user interface to send requests, save responses, add tests, and create workflows',
    'URLs have a simple structure that consists of the following components: protocol, host, port, resource path, query'
];

function app(req, res) {
    if (req.method === 'GET') {
        const parsedUrl = url.parse(req.url, {
            parseQueryString: true
        });
        
        const path = parsedUrl.pathname.split('/')[1];
        
        if (path === 'greeting') {
            const msg = parsedUrl.query.salutation || 'Hello';
            const name = parsedUrl.pathname.split('/')[2] || 'stranger'; 
            res.end(`${msg} ${name}`);
        } else if (path === 'fact') {
            const fact = factArray[Math.round(Math.random()*factArray.length)];
            res.end(fact);
        }
    }
}

module.exports = app;