const url = require('url');
const { URLSearchParams } = require('url');

module.exports = function app(req, res) {

  const parsedUrl = url.parse(req.url);
  const params = new URLSearchParams(parsedUrl.search);
  const name = params.get('name') || 'stranger';
  const salutation = params.get('salutation') || 'hello';
  const route = parsedUrl.pathname;
  // console.log(parsedUrl);
  // console.log(route);

  if (route === '/greeting') {
    const greeting = greet(salutation, name);
    res.end(greeting);
  } else if (route === '/fact') {
    const facts = randomFacts();
    res.end(facts);
  } else if (route === '/test1') {
    const other = otherRoutes();
    res.end(other);
  } else if (route === '/error') {
    const erroring = fail();
    res.end(fail);
  };

  function greet(salutation, name) {
    return salutation + ' ' + name;
  };

  function randomFacts() {
    return 'welcome to random facts!';
  };

  function otherRoutes() {
    return 'Welcome to other routes!';
  };

  function fail() {
    return 'Your request has failed.';

  };
}

    // function greet(salutation, name) {
    //   const msg = salutation + ' ' + name;
    //   console.log('in greet: ', msg);
    //   return msg;
    // }



    // function greet(salutation, name) {
    //   console.log('4');
    //   return salutation + ' ' + name;
    // };

    // function randomFacts() {
    //   res.end('welcome to random facts!');
    // };

    // function otherRoutes() {
    //   res.end('welcome to other routes!');
    // };

    // function fail() {
    //   res.end('Your request has failed.');

    // };



      // const greeting = greet(salutation, name);
    // const facts = randomFacts();
    // const other = otherRoutes();
    // const erroring = fail();



      // greet
      // const greeting = greet(salutation, name, (err, msg) => {
      //   console.log('cb on greeting: ', err, res);
      // });
      // res.end(greeting, function(err,));
      // greet(salutation, name, function (err, msg) {
      //   console.log(err, msg);

      // });

      // } else if (route === '/fact') {
      //   facts();
      // } else if (route === '/test1') {
      //   other();
      // } else if (route === '/error') {
      //   fail();
      // };