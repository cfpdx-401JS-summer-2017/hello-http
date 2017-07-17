
function app(req, res) {

  if( req.method === 'GET' ) {

    if (req.url === '/greeting') {
      console.log(req.method);
      res.statusCode = 200;
      res.end('hello stranger');

    } else if (req.url === '/error') {

      res.statusCode = 400;
      res.statusMessage = 'Oh No!';
      res.end('Warning!');

    } else {

      res.end('hello world');

    } 
  } else {
    
    const reqMethod = req.method;
    const reqPath = req.url;
    res.statusCode = 404;
    res.text = `CANNOT ${reqMethod} ${reqPath}`;
    res.end(`CANNOT ${reqMethod} ${reqPath}`);

  }

}

module.exports = app;