const fs = require('fs');
const path = require('path');

class Log {
    constructor(root) {
        this.root = root;
    }

    save(object, callback) {
        object.timestamp = new Date().toISOString();
        const filename = path.join(this.root, object.timestamp + '.txt');
        const contents = JSON.stringify(object);
        
        fs.writeFile(filename, contents, err => {
            if (err) return callback(err);
            callback(null, object);
        });
    }
    
}

module.exports = Log;