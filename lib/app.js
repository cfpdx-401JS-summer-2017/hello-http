
const url = require('url');

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


            console.log('tempPath[0]: ', tempPath[0]);
            
            response = randomFact();

        }
    }

    res.end(response);

}

function randomFact() {

    return 'random fact 1';

}

module.exports = app;