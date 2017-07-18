
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
    }


    response = tempSal + ' ' + tempName;
    res.end(response);
}

module.exports = app;