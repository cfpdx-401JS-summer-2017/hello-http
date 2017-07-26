### Simple HTTP server that handles GET requests to just three routes.

### `GET /greeting`

Greeting takes two parameters, a name and a salutation. The values can be passed in either as a query string or as path variables.

If the values aren't set, salutation defaults to 'hello' and name defaults to 'stranger'.

Usage examples:
```
/greeting?name=Lois
```
returns 'hello Lois'

```
/greeting?salutation=Howdy
```
returns 'Howdy stranger'

```
/greeting/:name/:salutation
```

variables can also be passed in as an HTTP query object. For example:

```
{name: 'Charlie', salutation :'Greetings Earthling'}
```


### `GET /facts`

Simply returns a random fact about HTTP. Veracity of facts is not guaranteed.

### `GET /error`

Returns an error message 'Your request has failed.'