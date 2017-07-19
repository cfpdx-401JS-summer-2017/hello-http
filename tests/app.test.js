const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const fact = require('../lib/fact');
const fsExtra = require('fs-extra');
const path = require('path');


const app = require('../lib/app');

// TODO later: change these into unit tests; only use integration tests to check
// if going to /greeting gives us 'salutation' 'name'
// also add unit tests for greeting and facts functions
describe('/greeting', () => {
    const request = chai.request(app);
    it('responds with hello stranger if no name or salutation given', done => {
        request.get('/greeting')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'Hello Stranger');
                done();
            });
    });

    it('responds with hello name if name but no salutation given', done => {
        request.get('/greeting/Steph')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'Hello Steph');
                done();
            });
    });

    it('responds with salutation if given', done => {
        request.get('/greeting/Steph?salutation=yo')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'yo Steph');
                done();
            });
    });

    it('responds with salutation if given with no name', done => {
        request.get('/greeting?salutation=yo')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'yo Stranger');
                done();
            });
    });

    it('gives an error if status code is not 200', done => {
        request.get('/puppies')
            .end((err, res) => {
                assert.equal(res.statusCode, 404);
                assert.equal(res.text, 'CANNOT GET /puppies');
                done();
            });
    });
});

describe('/fact', () => {
    const request = chai.request(app);
    it('is a valid path', done => {
        request.get('/fact')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.statusCode, 200);
                done();
            });
    });

    it('gives a fact from the array of facts', done => {
        request.get('/fact')
            .end((err, res) => {
                if (err) done(err);

                assert.include(fact.facts, res.text);
                done();
            });
    });
});

describe('/logs', () => {
    // adding this hook to limit the logs directory to two files
    // NOTE: if you test too rapidly, emptyDir seems to have troubles...
    before(() => {
        fsExtra.emptyDir(path.join(__dirname, '../logs/'), err => {
            if (err) return err;
            console.log('deleted extra files');
        });
    });

    const request = chai.request(app);
    const dataObj = { name: 'firstname', phone: '555-555-5555' };

    it('returns timestamp property', done => {
        request.post('/logs')
            .send(dataObj)
            .end((err, res) => {
                if (err) done(err);
                assert.include(res.text, 'timestamp');
                done();
            });
    });

    it('returns array of all filenames upon get of logs', done => {
        let testTimestamp = '';
        request.post('/logs')
            .send(dataObj)
            .end((err, res) => {
                if (err) done(err);
                testTimestamp = res.body.timestamp;
            });

        request.get('/logs')
            .end((err, res) => {
                if (err) done(err);
                const num = JSON.parse(res.text);
                assert.equal(num.length, 2);
                assert.include(res.text, testTimestamp);
                done();
            });
    });

    xit('returns contents of log for :timestamp', done => {
        request.get('/logs/:timestamp')
            .end((err, res) => {
                if (err) done(err);
                
                assert.include(res.body, res.body.timestamp);
                done();
            });
    });
});
