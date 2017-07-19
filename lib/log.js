const fs = require('fs');
const path = require('path');


function log(req, res) {
    const timeStamp = new Date().toISOString();
    const fileName = path.join(__dirname, '../logs', timeStamp.replace(/:/g, '-') + '.txt' );

    fs.writeFile(fileName, err => {
        if(err) return(err);
    });
    
    res.end();
}

module.exports = log;

