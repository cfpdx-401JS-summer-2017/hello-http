const fs = require('fs');
const path = require('path');

function log(msg, callback) {
  const timeStamp = new Date().toISOString();
  const filename = path.join(__dirname, '../log', timeStamp.replace(/:/g, '-') + '.json' );
  const logged = {
    timestamp: timeStamp,
    filename: filename,
    body: msg
  };

  fs.writeFile(filename, JSON.stringify(logged), err =>{
    if(err) return callback(err);
    callback(null, logged);
  });
  return JSON.stringify(logged);
}


module.exports = log;