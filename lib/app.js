//if statmet may not be best
const greeting = require('./greeting');
const url = require('url');
const path = require('path');
const fs = require('fs');
const qs = require('querystring');
const mkdirp = require('mkdirp');
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
    //else if(slashUrl[1] == 'fact') tempobj = 'placeholder';
    else if(req.method === 'POST' && parsedURL.pathname == '/logs') {
        let body = '';


        req.on('data', (data) => {
            body += data;
            console.log('body = ',body);
        });
        req.on('end', () => {
            //creates a timestamp object
            const timeStamp = new Date().toISOString();
            //creates the file path where the object will be held './logs' ,
            const filename = path.win32.join('./logs' , timeStamp + '.txt');
            //crestes an object of the parsed body
            const obj = JSON.parse(body);
            //sets the header to the JSON content type
            res.setHeader('Content-Type', 'application/json');
            //writeing the filename and object to a file<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< fs.writeFileSync breaks the test
            fs.writeFileSync(filename, JSON.stringify(obj));
            //sends a final response of a stringified json object
            res.end(JSON.stringify(obj));

        });
        
        

    }
    else if(req.method !== 'GET' && parsedURL.pathname !== '/logs' ){ 
        res.statusCode = 404;
        res.statusMessage = 'CANNOT <METHOD> <path>';
        res.end('Warning!');

    }

}
module.exports = app;