function app(req, res) {
    if (req.method === 'GET' && req.url === '/greeting') {
        // let url = req.url.split('/');
        res.end('hello world');
    } 
    else if (req.method === 'GET' && req.url === '/greeting/stranger') {
        // let url = req.url.split('/greeting/stranger') 
       res.end('hello stranger'); 
    } else if (req.url === '/error') {
        res.statusCode = 400;
        res.statusMessage = 'Oh No!';
        res.end('Warning!');
    } else {
        res.end('hello world');
    }
}

module.exports = app;