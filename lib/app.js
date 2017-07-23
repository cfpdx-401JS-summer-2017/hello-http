const url = require('url');
const promisify = require("util").promisify;
const { URLSearchParams } = require('url');

module.exports = function app(req, res) {
  // handle all the http stuff
  // 1. determine what route, params, etc.
  // 2. call the right handler
  // 3. do the http work to send the result back over the res
  const params = new URLSearchParams(url.parse(req.url).search);
  const name = params.get('name') || 'stranger';
  const salutation = params.get('salutation') || 'hello';

  res.write(salutation + ' ' + name);
  res.end(
    function greet() {
      return salutation + ' ' + name;
    }

  );

  const errororing = res.end(error());

  function randomFacts() {
    console.log('welcome to random facts!');
  }

  function error() { }

  function otherRoutes() { }
};
