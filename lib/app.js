//if statmet may not be best
function app (req, res) {
    if(req.method === 'GET') {
        let url = req.url.split('/'); // this lets us make urls into arrays

        res.end('hello world');

    }

}
module.exports = app;