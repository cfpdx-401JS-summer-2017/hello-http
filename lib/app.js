const url = require('url');

function app(req, res) {
    const parsedUrl = url.parse(req.url, {
         parseQueryString: true
     });

    if (req.method === 'GET' && req.url === '/greeting') {
        let url = req.url.split('/');
        res.end('hello world');
    } 
    else if (req.method === 'GET' && req.url === '/greeting/stranger') {
        let url = req.url.split('/');
        let name = url[2];
       res.end('hello ' + name); 
    } 
    else if (req.method === 'GET' && req.url === '/fact') {
        let url = req.url.split('/');
        let fact = ['Fact 1: stateless', 'Fact 2: protocol', 'Fact 3: transfer'];
        let factRandom = fact[Math.floor(fact.length * Math.random())];
       res.end(factRandom);
    } 
    else if (req.url === '/error') {
        res.statusCode = 400;
        res.statusMessage = 'Oh No!';
        res.end('Warning!');
    } else {
        res.end('hello world');
    }
}

module.exports = app;