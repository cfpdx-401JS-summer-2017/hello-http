//if statmet may not be best
const greeting = require('./greeting');
const url = require('url');
//app takes request and responce 
function app (req, res) {
    //I split the URL itslef into an array of strigns by /
    let slashUrl = req.url.split('/');
    //I split the URL itself into an array of strings by the ? query symbol
    let queUrl = req.url.split('?');
    // if the request methond is a type GET I start the greeting if test
    if(req.method === 'GET') {
        //the greeting if test staarting with generic greeting and going to greeting function if more complex
        if(slashUrl.length <= 2) res.end('Hello Stranger');
        if(queUrl.length >= 2 || slashUrl.length > 2) res.end(greeting(req));
        

        

    }

}
module.exports = app;