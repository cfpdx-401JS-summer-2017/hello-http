const fs = require('fs');
const path = require('path');

function writeFile(object) {

    object._id = new Date().toISOString();
    const filename = path.join(__dirname, '../logs/', object._id + '.txt');
    const fileObj = {};
    fileObj.timestamp = object._id;

    fs.writeFile(filename, JSON.stringify(object), err => {
        if (err) return err;
    });
    console.log('fileObj timestamp is', fileObj);

    return fileObj;
}

module.exports = writeFile;