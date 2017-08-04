const fs = require('fs');
const path = require('path');

const logs = {
  root: path.join(__dirname, '../log'),

  logIt: function(msg, callback) {
    const timeStamp = new Date().toISOString().replace(/:/g, '-');
    const filePath = path.join(this.root, timeStamp + '.json' );
    let logged = {
      time: timeStamp,
      path: filePath,
      body: msg
    };

    fs.writeFile(logged.path, JSON.stringify(logged), (err) =>{
      if(err) return callback(err);
      callback(null, JSON.stringify(logged));
    });
    // return JSON.stringify({ timestamp: logged.timestamp });
  },

  getIt: function(file, callback) {
    const filename = path.join(this.root, file + '.json');
    fs.readFile(filename, 'utf8', (err, data) => {
      if(err) return callback(err);
      callback(null, data);
    });

  }
};

module.exports = logs;