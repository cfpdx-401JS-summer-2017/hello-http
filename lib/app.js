
const url = require('url');
const randomFacts = require('./random.facts.js');

function app(req, res) {

    if (req.method === 'GET') {

        var tempPath;
        var tempSubPath;
        var tempName;
        var tempSal;
        var response;

        tempPath = req.url.split('/');
        tempPath.shift();

        if (tempPath[0] === 'greeting') {

            if (tempPath.length === 1) {

                tempSal = 'hello';
                tempName = 'stranger';

            } else {

                tempSubPath = tempPath[1].split('?');

                if (tempSubPath.length === 1) {

                    tempSal = 'hello';
                    tempName = tempSubPath[0];

                } else {

                    tempName = tempSubPath[0];
                    tempSal = tempSubPath[1].split('=').pop();
                }
            }

            response = tempSal + ' ' + tempName;
        }

        else if (tempPath[0] === 'fact') {

            response = randomFacts();

        }

        res.end(response);
    }


    else {

        res.statusCode = 404;
        res.statusMessage = 'Not Found';
        res.end(`CANNOT ${req.method} ${req.url}`);

    }

}

module.exports = app;