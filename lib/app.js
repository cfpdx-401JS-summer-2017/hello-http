const url = require('url');
const greet = require('./greeting');
const facts = require('./facts.js');

function app(req, res) {

  const parsedUrl = url.parse(req.url, {
    parseQueryString: true
  });

  const pathArray = parsedUrl.pathname.split('/');
  let path = pathArray[1];

  if( req.method === 'GET' && path === 'greeting') {

    let name = pathArray[2];
    let salutation = parsedUrl.query.salutation;
    
    res.end(greet(name, salutation));

  } else if (req.method === 'GET' && path === 'fact') {

    res.end(facts());

  } else {

    res.statusCode = 404;
    res.end(`CANNOT ${req.method} /${path}`);

  }

}

module.exports = app;