const fs = require('fs');
const path = require('path');

function getlogs(logDir) {
    const arr = [];
    let fileCount = 0;
    fs.readdir(logDir, (err, files) => {
        if (err) return callback(err);
        files.forEach(function (file) {
            const filename = path.join(logDir, file);
            fs.readFile(filename, (err, contents) => {
                if (err) return callback(err);
                arr.push(JSON.parse(contents));
                fileCount++;
                if (fileCount === files.length) {
                    callback(null, arr);
                }
            });
        });
    });
}

module.exports = getlogs;