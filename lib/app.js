const makeGreeting = require('./greeting');
const rollFact = require('./fact').rollFact;
const url = require('url');

function app(req,res) {
    // let parsedUrl = url.parse(req.url, {
    //     parseQueryString: true
    // });

    

    let slashSplitUrl = req.url.split('/');
    let name = 'stranger';
    let salutation = 'hello';

    if(slashSplitUrl[2]) {
        let url = slashSplitUrl[2].split('?salutation=');
        name = url[0];
        url[1] ? salutation = url[1] : null;
    }

    let route = slashSplitUrl[1];

    if (req.method === 'GET' && route === 'greeting') {
        res.end(makeGreeting(name, salutation));
    }

    if (req.method === 'GET' && route === 'fact') {
        res.end(rollFact());
    }

}

module.exports = app;