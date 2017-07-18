const fs = require('fs');
const path = require('path');

module.exports = class Store {
    constructor(root) {
        this.root = root;
    }

    save(object, callback) {
        object._id = new Date().toISOString();
        const filename = path.join(this.root, object._id + '.txt');

        fs.writeFile(filename, JSON.stringify(object), err => {
            if(err) return callback(err);
            callback(null, object);
        });
    }

    get(id, callback) {
        const filename = path.join(this.root, id + '.txt');
        fs.readFile(filename, (err, data) => {
            if (err) {
                if (err.code === 'ENOENT') return callback(null, null);
                return callback(err );
            } 
            callback(null, JSON.parse(data));
        });
    }

    getAll(callback) {

        fs.readdir(this.root, (err, filenames) => {
            if (err) {
                if (err.code === 'ENOENT') return callback(null, null);
                return callback(err);
            }

            if (filenames.length === 0) return callback(null, []);

            let counter = filenames.length;
            let objArr = [];

            filenames.forEach(name => {
                let filename = path.join(this.root, name);

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
};