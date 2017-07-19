const fs = require('fs');

function getlogs(logDir, callback) {
    fs.readdir(logDir, (err, files) => {
        if (err) return callback(err);
        
        var files2 = files.filter(function(filename){
            return filename.indexOf('.txt') >= 0;
        });
        
        var filenamelist = files2.map(function(filename) {
            return filename.replace('.txt', '');
        });

        callback(null, filenamelist);
    });
}

module.exports = getlogs;