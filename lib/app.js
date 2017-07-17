
function app(req, res) {

  if( req.method === 'GET' && req.url === '/greeting' ) {

    res.statusCode = 200;
    res.end('hello stranger');

  } else if(req.url === '/error'){

    res.statusCode = 400;
    res.statusMessage = 'Oh No!';
    res.end('Warning!');

  } else {

    res.end('hello world');

  } 
}

module.exports = app;