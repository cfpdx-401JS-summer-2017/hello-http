# Hello-HTTP Lab

## About this API

* If you try to GET at /greeting, you will see the text 'Hello Stranger'
* If you try to GET at /greeting/name, you will see the text 'Hello name'
* If you try to GET at /greeting/name?salutation=yo, you will see the text 'yo name'
* If you try to GET at /greeting/salutation=yo, you will see the text 'yo Stranger'
* If you try any other METHOD at a different url, you will get a 404 status code and see the text 'CANNOT <METHOD> <path>'

Note: use npm install to install all the packages

TODO: switch the integration tests into unit tests and do proper E2E tests instead of what I've got