const url = require('url');
const { URLSearchParams } = require('url');

module.exports = function app(req, res) {
  // handle all the http stuff
  // 1. determine what route, params, etc.
  // 2. call the right handler
  // 3. do the http work to send the result back over the res
  //this is my router

  const parsedUrl = url.parse(req.url);
  const params = new URLSearchParams(parsedUrl.search);
  const name = params.get('name') || 'stranger';
  const salutation = params.get('salutation') || 'hello';

  const greeting = greet(salutation, name);
  res.end(greeting);

  function greet(saluation, name) {
    return salutation + ' ' + name;
  }


  // const errororing = res.end(
  //   function error() {
  //     console.log('how do i get here?')
  //   }
  // );

  function randomFacts() {
    console.log('welcome to random facts!');
  }

  function error() { }

  function otherRoutes() { }
};
