const fs = require('fs');
const path = require('path');

function getFile(callback) {
    const filepath = path.join(__dirname, '../logs');
    fs.readdir(filepath, (err, filenames) => {
        if (err) {
            if (err.code === 'ENOENT') return callback(null, null);
            return callback(err);
        }

        if (filenames.length === 0) return callback(null, []);

        let counter = filenames.length;
        let objArr = [];

        filenames.forEach(name => {
            const filename = path.join(__dirname, '../logs', name);

            fs.readFile(filename, (err, data) => {
                if (err) {
                    if (err.code === 'ENOENT') return callback(null, null);
                    return callback(err);
                }
                counter--;

                objArr.push(JSON.parse(data));
                if (counter === 0) callback(null, objArr);
            });
        });
    });
}

module.exports = getFile;