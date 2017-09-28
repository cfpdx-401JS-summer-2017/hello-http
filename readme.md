# Hello-HTTP Lab

## About this API

* GET requests to the /greeting route will return 'Hello Stranger'
* GET requests to the /greeting/name route (where 'name' is a text string entered by the user) will return 'Hello name'
* GET requests to the /greeting/name?salutation=yo route will return 'yo name'
* GET requests to the /greeting/salutation=yo return 'yo Stranger'
* POST requests will create .txt files in the ./log directory with a date/timestamp naming convention 
* All other METHOD requests return a 404 status code and a status message of 'CANNOT <METHOD> <PATH>'

DEV DEPENDENCIES:
    "chai": "^4.1.0"
    "chai-http": "^3.0.0"
    "eslint": "^4.2.0"
    "mocha": "^3.4.2"
