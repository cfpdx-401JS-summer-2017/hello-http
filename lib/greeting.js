const url = require('url');

function greeting (req) {
    //parseing out the url to make a json object that can be manipulated
    var parsedURL = url.parse(req.url,{parseQueryString : true});
    //I split the pathname portion of the JSON object by its /
    let objToArray = parsedURL.pathname.split('/');
    //I specify the index of the new array as an object
    let name = objToArray[2];
    //I make an greeting and person object for defalt use
    let stranger = 'Stranger';
    let greet = 'Hello';

    return `${parsedURL.query.salutation||greet} ${name||stranger}`;
}
module.exports = greeting;