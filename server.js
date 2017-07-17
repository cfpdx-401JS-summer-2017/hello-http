
const http = require('http');
const url = require('url');
const app = require('app');

const server = http.createServer((req, res) => {


    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/error') {
        res.statusCode = 400;
        res.statusMessage = 'Oh No!';
        res.end('Warning!');
    }
    else {
        res.statusCode = 200;
        res.statusMessage = 'Okie Dokie';
        res.write('<h1>very simple http server</h1>');
        let response = '';

        if (req.method === 'GET') {
            response += `you wanted to get ${req.url}`;
        }
        else {            
            res.write('hello world');
        }
        response += 'have a nice day!';

        res.end(response);
    }
});

const port = 3000;
server.listen(port, () => {
    console.log('http server running on', server.address());
});