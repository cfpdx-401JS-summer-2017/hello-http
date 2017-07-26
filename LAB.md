<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Hello HTTP
======

Use the Node.js `http` module to create an http server. 

## Directions

Your server should:
* Respond with a greeting if the method is `GET` and url (path) is `/greeting/<name>`
  * If query string specifies a `salutation` like `/greeting/jane?salutation=yo`, use that
    for the greeting salutation, otherwise `hello`
  * If name is not included, use `stranger`, otherwise use name in greeting
* Responds with one of (at least) three interesting facts about http (up to you) when method is 
GET and the url (path) is `/fact`
* You can add other routes if you like
* Any other request that doesn't match a defined `METHOD` and url `path` should return status code 404 Not Found 
and include the text: `CANNOT <METHOD> <path>`
* Add a `README.md` that describes how to use your API 

### Architecture and Design
* Define the listening function for your server in `lib/app.js`, but export it and create the server and listen 
in a `server.js` file at the root of your project.
* Use 'extract' function to not have all of your code live in the listening function. Try and TDD these functions first.

## Testing
* Unit test your functions when you can
* Use chai-http to test the API.

## Bonus

Feel free to add a library like `cowsay` or `figlet` to enhance your response if supplied as `?format=cowsay` query. :) 
No test necessary for these options.

## Rubric

* HTTP Path and Verb: `2pts`
* 404: `1pt`
* Query Handling: `2pts`
* Tests: `2pts`
* Meets Functional Requirements: `2pt`
