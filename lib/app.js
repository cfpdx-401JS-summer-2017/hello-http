//if statmet may not be best
//url.parse() might be able to help
const url = require('url');
funciton greeting (req, res)
function app (req, res) {
    var parsedURL = url.parse(req.url,{parseQueryString : true});
    //console.log(parsedURL);
    console.log('parsedURl.query : ',parsedURL.query);
    let slashUrl = req.url.split('/');
    let queUrl = req.url.split('?');
    let howUrl = req.url.split('=');
    let newGreeting;
    console.log('queUrl = ',queUrl);
    let name = slashUrl[2];
    let stranger = 'Stranger';
    let greet = 'Hello';
    if (queUrl.length >= 2 ) {
        newGreeting = queUrl[1].split('=');
    }
    
    if(req.method === 'GET') {
        if (slashUrl.length > 2) res.end(`Hello ${name||stranger}`);

        //if(queUrl.length >= 2) res.end(`${newGreeting[1]||greet}${name||stranger}`);

        res.end('Hello Stranger');

    }

}
module.exports = app;