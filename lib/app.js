const url = require('url');
const greet = require('./greeting');

function app(req, res) {

  const parsedUrl = url.parse(req.url, {
    parseQueryString: true
  });

  const pathArray = parsedUrl.path.split('/');
  let path = pathArray[1];

  if( req.method === 'GET' && path === 'greeting') {

    let name = pathArray[2];
    
    res.end(greet(name));

  } else if (req.method === 'GET' && path === 'fact') {

  } else {

    res.statusCode = 404;
    res.end(`CANNOT ${req.method} /${path}`);

  }

}

module.exports = app;