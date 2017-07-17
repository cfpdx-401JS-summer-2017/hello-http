
function app(req,res) {
    if (req.method === 'GET') {
        let url = req.url.split('/');
        res.end('hello world');
    }
}

module.exports = app;