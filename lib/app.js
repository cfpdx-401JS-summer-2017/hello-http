//if statmet may not be best
const greeting = require('./greeting');
const url = require('url');
const path = require('path');
const fs = require('fs');
const qs = require('querystring');
//app takes request and responce 
function app (req, res) {
    //I split the URL itslef into an array of strigns by /
    let slashUrl = req.url.split('/');
    //I split the URL itself into an array of strings by the ? query symbol
    let queUrl = req.url.split('?');
    // if the request methond is a type GET I start the greeting if test
    var parsedURL = url.parse(req.url,{parseQueryString : true});
    if(req.method === 'GET' && slashUrl[1] == 'greeting') {
        //the greeting if test staarting with generic greeting and going to greeting function if more complex
        
        if(slashUrl.length <= 2) res.end('Hello Stranger');
        if(slashUrl[1] == 'greeting' && queUrl.length >= 2 || slashUrl.length > 2 && slashUrl[1] == 'greeting') res.end(greeting(req));
        //slashUrl[1] == 'greeting' &&

        

    }
    else if(slashUrl[1] == 'fact') tempobj = 'placeholder';
    else if(req.method !== 'GET'){ 
        res.statusCode = 404;
        res.statusMessage = 'Oh No!';
        res.end('Warning!');

    }
    else if(req.method === 'POST') {
        let body = '';
        if(parsedURL.pathname == '/logs' ){

            req.on('data', (data) => {
                body += data;
                console.log('body = ',body);
            });
            req.on('end', () => {
                const timeStamp = new Date().toISOString();
                res.setHeader('Content-Type', 'application/json');
                const filePath = path.join('./logs' + timeStamp + '.txt');
                const obj = JSON.parse(body);
                fs.writeFileSync(filePath, res.end(body));
                console.log('parsed body = ',obj);
                res.end(qs.parse(body));

            });
        }
        

    }

}
module.exports = app;