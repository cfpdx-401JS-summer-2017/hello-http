Hello-Http
===
July 24th, 2017

## Description:
Combine a vanilla NodeJS with an http server to make a functioning url system

To use this app, [Postman](https://www.getpostman.com/) on localhost:3000 is recommended.

The currently acceptable verbs are GET, POST. 

* `GET /logs` - returns array of all of the logs
* `POST /logs` - inserts the supplied request body as a document into the logs collection
* `GET /dogs/:<TIMESTAMP>` -
    * <TIMESTAMP> should be the actual direct filename without .txt
    * returns the single object specified by the TIMESTAMP
* `GET /greeting` - returns a generalized greeting
* `GET /greeting/<NAME>` - 
    * <NAME> should be the name of the person who wishes to be greeted
    * returns a greeting with the inputted name
* `GET /GREETING/<NAME>?salutation=<SALUTATION>` - 
    * <SALUTATION> should be the alternate greeting for the person who wishes to be greeted
    * <NAME> should be the name of the person who wishes to be greeted
    * returns a greeting with the inputted name
* `GET /facts` - returns one of 3 facts about Http
    
    SIDE NOTE - if /facts doesn't return a new fact please try again as the random number generator can repeat itself

## IMPORTANT : 
If you do run the app.test.js file be sure to delete the test post created or you will make the it('Returns an array of all the timestamps') test fail due to increased length of the array.