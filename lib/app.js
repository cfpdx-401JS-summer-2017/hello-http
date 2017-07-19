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
    if(req.method === 'GET' && slashUrl[1] == 'greeting') {
        //the greeting if test staarting with generic greeting and going to greeting function if more complex
        
        if(slashUrl.length <= 2) res.end('Hello Stranger');
        if(slashUrl[1] == 'greeting' && queUrl.length >= 2 || slashUrl.length > 2 && slashUrl[1] == 'greeting') res.end(greeting(req));
        //slashUrl[1] == 'greeting' &&

        

    }
    else if(slashUrl[1] == 'fact') console.log('placeholder');

    else if(req.method !== 'GET'){ 
        res.statusCode = 404;
        res.statusMessage = 'Oh No!';
        res.end('Warning!');

    }

}
module.exports = app;