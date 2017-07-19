const fs = require('fs');
const path = require('path');

module.exports = class Log {
    constructor(root) {
        this.root = root;
    }

    save(data, callback) {
        const timestamp = new Date().toISOString();
        const timestampObj = `{ timestamp: ${timestamp} }`;
        const filename = path.join(__dirname, '../logs', timestamp + '.txt');
        
        // fs.readFile(filename, (err, buffer) => {
        //     console.log('readFile', buffer.length);
        // });

        // const stream = fs.createReadStream(body);

        // let length = 0;
        // stream.on('data', buffer => {
        //     length += buffer.length;
        //     console.log('chunk', buffer.length);
        // });
        // stream.on('end', data => {
        //     console.log('total', length);
        // });


        fs.writeFile(filename, data, err => {
            if (err) return callback(err);
            callback(null, timestampObj);
        });
    }
};
