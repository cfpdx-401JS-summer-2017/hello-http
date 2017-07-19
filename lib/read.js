const fs = require('fs');
const path = require('path');

function read(callback) {
    const filename = path.join(__dirname, '../logs');
    let listArray = [];

    fs.readdir(filename, (err, filenames) => {
        if (err) return err;
        if (filenames.length === 0) return [];
        listArray = filenames.map(name => name.replace('.txt',''));
        callback(listArray);
    });
}

module.exports = read;