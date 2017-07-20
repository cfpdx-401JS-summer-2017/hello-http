const fs = require('fs');
const path = require('path');

const logs = {
  root: path.join(__dirname, '../log'),

  logIt: function(msg, callback) {
    const timeStamp = new Date().toISOString().replace(/:/g, '-');
    const filename = path.join(this.root, timeStamp + '.json' );
    const logged = {
      timestamp: timeStamp,
      filename: filename,
      body: msg
    };

    fs.writeFile(filename, JSON.stringify(logged), (err, logged) =>{
      if(err) return callback(err);
      callback(null, logged.timestamp);
    });
    // return JSON.stringify({ timestamp: logged.timestamp });
  },

  getIt: function(file, callback) {
    const filename = path.join(this.root, file + '.json');
    fs.readFile(filename, (err, data) => {
      if(err) return callback(err);
      callback(null, JSON.stringify(data.body));
    });

  }
}

module.exports = logs;