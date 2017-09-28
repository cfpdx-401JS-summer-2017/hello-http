const http = require('http');

const port = 2000;
const server = http.createServer();

server.listen(port, () => {
  console.log('Server listening on port ', port);
});