const makeGreeting = require('./greeting.js');
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

    if (req.method === 'GET') {
        console.log('HERES THE URL', name, salutation);
        res.end(makeGreeting(name, salutation));
    }
}

module.exports = app;