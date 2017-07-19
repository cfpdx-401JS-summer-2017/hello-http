<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Hello HTTP
======

## save logs

* Add a route for a `POST` to `/logs`
  * Add a `logs` folder at the root of your project
  * Each time a post is made, write a file with the body contents to a new file in the `logs` directory
  * Use `new Date().toISOString()` (aka a "timestamp") to uniquely name the file (add a `.txt` file extension)
  * The response should be: `{ timestamp: <timestamp> }` (do not include `.txt` extension)
1. Add a route for a `GET` to `/logs`
  * Returns an array of all the **timestamps** (file names) in logs (without the `.txt` extension)

1. Add a route for a `GET` to `/logs/:timestamp`
  * Returns the contents of the log corresponding to :timestamp

* Remember to update your `README.md` that describes how to use your API 

## Testing

* Testing non-deterministic things like timestamps is hard. Length of logs in http response for GET all logs. 
* You should test content of GET for single log after POST

## Rubric

* Reading Request Body: `4pts`
* Log POST: `3pts`
* GET log: `1pts`
* GET log by id: `1pts`
* Tests: `1pts`
