
const url = require('url');
const randomFacts = require('./random.facts.js');
const fs = require('fs');
const path = require('path');

function app(req, res) {

    if (req.method === 'POST') {

        let body = '';

        req.on('data', data => {

            body += data;
        });

        req.on('end', () => {

            let fileName = new Date().toISOString();
            const filePath = path.join('./logs', fileName + '.txt');
            fs.writeFileSync(filePath, body);
            res.end(body);

        });

    }

    else if (req.method === 'GET') {

        var tempPath;
        var response;
        tempPath = req.url.split('/');
        tempPath.shift();

        if (tempPath[0] === 'greeting') {
            var tempSubPath;
            var tempName;
            var tempSal;
            

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

        if (tempPath[0] === 'fact') {

            response = randomFacts();

        }

        if (tempPath[0] === 'logs') {

            res.setHeader('Content-Type', 'application/json');
            // let timestamps = [];
            let logFiles = fs.readdirSync('./logs');
            const timestamps = logFiles.map(file => file.slice(0, -4));
            if(timestamps[0] == '.DS_S') timestamps.splice(0, 1);
            console.log(JSON.stringify(timestamps));

            response = JSON.stringify(timestamps);
            res.end(response);

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