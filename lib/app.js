const url = require('url');
const { URLSearchParams } = require('url');
const factsModule = require('./facts-module');

module.exports = function app(req, res) {

  const parsedUrl = url.parse(req.url);
  const params = new URLSearchParams(parsedUrl.search);
  const name = params.get('name') || 'stranger';
  const salutation = params.get('salutation') || 'hello';
  const failMessage = 'Your request has failed.'
  const route = parsedUrl.pathname;

  if (route === '/greeting') {
    const greeting = greet(salutation, name);
    res.end(greeting);
  } else if (route === '/fact') {
    const facts = factsModule();
    res.end(facts);
  } else if (route === '/test1') {
    const other = otherRoutes();
    res.end(other);
  } else if (route === '/error') {
    const erroring = fail(failMessage);
    res.end(erroring);
  };

  function greet(salutation, name) {
    return salutation + ' ' + name;
  };

  function otherRoutes() {
    // return 'Welcome to other routes!';
  };

  function fail(failMessage) {
    return failMessage;
  };


}