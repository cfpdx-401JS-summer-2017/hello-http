const http = require('http');
const app = require('./lib/app.js');

const server = http.createServer(app);

server.listen(port, () => {
    console.log('http server running on', server.address());
});