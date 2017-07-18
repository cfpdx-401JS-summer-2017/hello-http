Hello HTTP
===

July 17, 2017

## Description:

Use the Node.js http module to create an http server.

To use this app, [Postman](https://www.getpostman.com) is recommended.

The only acceptable verb is GET. Two paths are possible:

* Fact (such as `http://localhost:3000/fact`) will generate a random fact about REST and HTTP.

* Greeting (such as `http://localhost:3000/greeting`) will generate a greeting.
  
  * Adding a name to the URL (such as `http://localhost:3000/greeting/Joe`) will customize the name.
  
  * Adding a salutation parameter to the url (such as `http://localhost:3000/greeting?salutation=Hey`) will customize the salutation.
  
  * Try customizing both! (Such as `http://localhost:3000/greeting/Jane?salutation=Welcome`)