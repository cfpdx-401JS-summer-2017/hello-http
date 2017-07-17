const url = require('url');

function app(req, res) {
    if (req.method === 'GET') {
        const parsedUrl = url.parse(req.url, {
            parseQueryString: true
        });
        // console.log(JSON.stringify(parsedUrl));
        const msg = parsedUrl.query.salutation || 'Hello';
        
        const name = parsedUrl.pathname.split('/')[2] || 'stranger'; 

        res.end(`${msg} ${name}`);
    }
}

module.exports = app;