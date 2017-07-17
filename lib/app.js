const url = require('url');
const greet = require('./greeting');

function app(req, res) {

  const parsedUrl = url.parse(req.url, {
    parseQueryString: true
  });

  const pathArray = parsedUrl.path.split('/');
  let path = pathArray[1];

  if( req.method === 'GET' ) {

    let name = pathArray[2];

    

    // if(req.query.salutation)
    if (path == 'greeting') {

      res.end(greet(name));

    } else {

      res.end('hello world');

    }

  } else {
    
    const reqMethod = req.method;
    const reqPath = req.url;
    res.statusCode = 404;
    res.end(`CANNOT ${reqMethod} ${reqPath}`);

  }

}

module.exports = app;