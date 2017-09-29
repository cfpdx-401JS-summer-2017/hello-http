const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);
const facts = require('../lib/fact').facts;
const app = require('../lib/app');
const rimraf = require('rimraf');
const fs = require('fs');

const request = chai.request(app);

describe('server requests', () => {

    it('works without specification', done => {
        request.get('/greeting')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'Howdy Stranger');
                done();
            });
    });

    it('returns a greeting with a name', done => {
        request.get('/greeting/Meow')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'Howdy Meow');
                done();
            });
    });

    it('returns a greeting and a salutation', done => {
        request.get('/greeting/Meow?salutation=Herro')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'Herro Meow');
                done();
            });
    });

    it('returns a rando fact', done => {
        request.get('/fact')
            .end((err, res) => {
                if (err) done(err);
                assert.ok(res.text);
                assert.notEqual(facts.indexOf(res.text), -1);
                done();
            });
    });
});

describe('log library', () => {
    before(() => {
        rimraf('./logs', () => {
            fs.mkdirSync('./logs');
        });
    });

    it('create a log and test for content', done => {
        request.post('/logs')
            .send('test')
            .end((err, res) => {
                if (err) done(err);
                assert.ok(res.text);
                request.get(`/logs/${JSON.parse(res.text).timeStamp}`)
                    .end((err, res) => {
                        if (err) done(err);
                        assert.equal(res.text, 'test');
                        done();
                    });
            });
    });

    it('get all logs', done => {
        request.get('/logs')
            .end((err, res) => {
                if(err) done(err);
                assert.equal(JSON.parse(res.text).length, 1);
                done();
            });
    });
});
