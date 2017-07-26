//if statmet may not be best
const greeting = require('./greeting');
const url = require('url');
const path = require('path');
const fs = require('fs');
const qs = require('querystring');
const mkdirp = require('mkdirp');
const randomFact = require('./randomFact');

//app takes request and responce 
function app (req, res) {
    //I split the URL itslef into an array of strigns by /
    let slashUrl = req.url.split('/');
    //I split the URL itself into an array of strings by the ? query symbol
    let queUrl = req.url.split('?');
    let sepfUrl = req.url.split(':');
    // if the request methond is a type GET I start the greeting if test
    var parsedURL = url.parse(req.url,{parseQueryString : true});
    if(req.method === 'GET' && slashUrl[1] == 'greeting') {
        //the greeting if test staarting with generic greeting and going to greeting function if more complex
        
        if(slashUrl.length <= 2) res.end('Hello Stranger');
        if(slashUrl[1] == 'greeting' && queUrl.length >= 2 || slashUrl.length > 2 && slashUrl[1] == 'greeting') res.end(greeting(req));
        //slashUrl[1] == 'greeting' &&

        

    }
    else if (req.method === 'GET' && slashUrl[1] == 'logs'&& slashUrl[2] == undefined) {
        let postLogs = fs.readdirSync('./logs');
        var cleanLogs = postLogs.map((title) => {
            let newTitl = title.split('.txt');
            return newTitl[0];
        });
        let stringLogs = JSON.stringify(cleanLogs);
        return res.end(stringLogs);
    }
    else if (req.method === 'GET' && slashUrl[1] == 'logs'&& sepfUrl[1]) {
        let log = sepfUrl[1];
        //console.log('dis log =>',log);
        let singlLog = fs.readFileSync(`./logs/${log}.txt`);
        let buff = JSON.parse(singlLog);
        let contence = JSON.stringify(buff);
        //console.log('dis contence =>',contence);
        return res.end(contence);

    }
    else if(slashUrl[1] == 'facts') res.end(randomFact());
        
       
    else if(req.method === 'POST' && parsedURL.pathname == '/logs') {
        let body = '';

        req.on('data', (data) => {
            body += data;
        });
        req.on('end', () => {
            //creates a timestamp object
            const timeStamp = new Date().toISOString().replace(/:/g, '-');
            //creates the file path where the object will be held './logs' ,
            const filename = path.win32.join('./logs' , timeStamp + '.txt');
            //crestes an object of the parsed body
            const obj = JSON.parse(body);
            //sets the header to the JSON content type
            res.setHeader('Content-Type', 'application/json');
            //writeing the filename and object to a file
            fs.writeFileSync(filename, JSON.stringify(obj),'utf8');
            //sends a final response of a stringified json object
            res.end(JSON.stringify(obj));
            //fs.unlinkSync(filename);
        });
    }
    else if(req.method !== 'GET' && parsedURL.pathname !== '/logs' ){ 
        res.statusCode = 404;
        res.statusMessage = 'CANNOT <METHOD> <path>';
        res.end('Warning!');
    }
}
module.exports = app;