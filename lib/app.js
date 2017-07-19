


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
        else if (url[1] === 'greeting' && !url[4]) {
            res.end('hello ' + url[3]);
        }
    }
}


module.exports = app;