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
            //sets the header for the html
            res.setHeader('Content-Type', 'application/json');
            //creates the file path where the object will be held
            const filename = path.join('./logs' , timeStamp + '.txt');
            console.log('filename = ',filename);

            //converts the JSON in the body to a string
            const strPost = JSON.stringify(body);
            //checking strPost in console
            console.log('stringifyed body = ',strPost);
            //parses the JSON
            const parsPost = JSON.parse(body);
            //checking parsPost in console
            console.log('parsPost = ',parsPost);
            //stringifys the parsed JSON
            const strParsPost = JSON.stringify(parsPost);
            console.log('strParsPost = ',strParsPost);
            //writeing the filename and object to a file
            fs.writeFileSync(filename, res.end(strPost),'utf8');
            res.end(qs.parse(body));

        });
        
        

    }
    else if(req.method !== 'GET' && parsedURL.pathname !== '/logs' ){ 
        res.statusCode = 404;
        res.statusMessage = 'CANNOT <METHOD> <path>';
        res.end('Warning!');

    }

}
module.exports = app;