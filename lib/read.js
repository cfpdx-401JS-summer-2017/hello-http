const fs = require('fs');
const path = require('path');

function read(callback) {
    const filename = path.join(__dirname, '../logs');

    fs.readdir(filename, (err, filenames) => {
        if (err) return err;
        if (filenames.length === 0) return [];
        
        callback(filenames);
    });
}

module.exports = read;