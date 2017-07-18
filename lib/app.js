//if statmet may not be best
//url.parse() might be able to help
const url = require('url');
function app (req, res) {
    //parseing out the url to make a json object that can be manipulated
    var parsedURL = url.parse(req.url,{parseQueryString : true});
    //I split the pathname portion of the JSON object by its /
    let objToArray = parsedURL.pathname.split('/');
    //I split the URL itslef into an array of strigns by /
    let slashUrl = req.url.split('/');
    //I split the URL itself into an array of strings by the ? query symbol
    let queUrl = req.url.split('?');
    //I specify the index of the new array as an object
    let name = objToArray[2];
    //I make an greeting and person object for defalt use
    let stranger = 'Stranger';
    let greet = 'Hello';
    // if the request methond is a type GET I start the greeting if test
    if(req.method === 'GET') {
        //the greeting if test useing ether or logic to bypass nested ifs or 
        if(queUrl.length >= 2 || slashUrl.length > 2) res.end(`${parsedURL.query.salutation||greet} ${name||stranger}`);

        res.end('Hello Stranger');

    }

}
module.exports = app;