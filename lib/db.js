const path = require('path');
const mkdirp = require('mkdirp');
const Log = require('../lib/log');

module.exports = {
    rootDir: __dirname,
    createTable(table, callback){
        const dir = path.join(this.rootDir, table);
        mkdirp(dir, err => {
            if(err) return callback(err);
            const log = new Log(dir);
            callback(null, log);
        });
    }
};