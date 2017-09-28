const fs = require('fs');

const path = `${process.cwd()}/logs`;

function makeLog(body) {
    const timeStamp = new Date().toISOString();
    const filepath = `${path}/${timeStamp}.txt`;
    fs.writeFile(filepath, body, function(err){
        if (err) return err;
    });
    return JSON.stringify({timeStamp});
}

function getAllLogs(res) {
    fs.readdir(path, function(err, files){
        if (err) return err;

        const fileNames = files.map(fileName => {
            return fileName.split('.txt')[0];
        });

        console.log(fileNames);
        res.end(JSON.stringify(fileNames));
    });
}

function getLog(res, timeStamp) {
    const logPath = `${path}/${timeStamp}.txt`;
    fs.readFile(logPath, 'utf8', (err, data) => {
        if (err) return err;
        console.log(data);
        res.end(data);
    });
}

module.exports = {makeLog, getAllLogs, getLog};