const url = require('url');
const greet = require('./greeting');
const facts = require('./facts.js');
const log = require('./log.js');

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

    res.end(facts(fact => fact));

  } else if (req.method === 'POST' && path === 'log') {
    
    let body = '';

    req.on('data', data => {
      body += data;
    });

    req.on('end', () => {
      res.setHeader('Content-Type', 'application/json');
      // res.end(log.logIt(JSON.stringify(body), logged => logged));
      log.logIt(JSON.stringify(body), logged => res.end(logged));
    });

  } else if (req.method === 'GET' && path === 'log') {

    log.getIt(pathArray[2], data => res.end({timestamp: data.timestamp}));

  } else {

    res.statusCode = 404;
    res.end(`CANNOT ${req.method} /${path}`);

  }

}

module.exports = app;