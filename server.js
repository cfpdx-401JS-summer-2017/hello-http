const promisify = require('promisify').util();
const http = promisify(require('http'));
const server = promisify(http.createServer);
const listen = promisify(http.listen);
const app = require('./lib/app.js');

const port = 2000;
server(app).then(() => {
  return listen(port).then(err => { err; });
});
