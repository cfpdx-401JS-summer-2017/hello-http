const fs = require('fs');

function facts (callback) {
  fs.readFile('./lib/http-facts.json', (err, data) => {
    if(err) return callback(err);
    const factList = JSON.parse(data);
    callback(null, factList[Math.floor(Math.random()*2) + 1].fact);
  });

}

module.exports = facts;