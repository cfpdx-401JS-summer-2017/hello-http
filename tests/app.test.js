const chai = require('chai');
const http = require('http');
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
                if(err) done(err);
                assert.equal(res.text, 'hello stranger');
                done();
            });
    });

    it('returns greeting with name', done => {
        request.get('/greeting/joe')
            .end((err, res) => {
                if(err) done(err);
                assert.equal(res.text, 'hello joe');
                done();
            });
    });

    it('returns greeting and salutation', done => {
        request.get('/greeting/joe?salutation=sup')
            .end((err, res) => {
                if(err) done(err);
                assert.equal(res.text, 'sup joe');
                done();
            });
    });

    it('spits a fact at you', done => {
        request.get('/fact')
            .end((err, res) => {
                if(err) done(err);
                assert.ok(res.text);
                assert.notEqual(facts.indexOf(res.text), -1);
                done();
            });
    });

    it('returns a 404 error if invalid request method', done => {
        request.put('/butt')
            .end((err, res) => {
                if(!err) done(err);
                assert.ok(err);
                assert.equal(res.statusCode, 404);
                assert.equal(res.text, 'CANNOT PUT butt');
                done();
            });
    });
});

describe('log requests', () => {

    before(() => {
        rimraf('./logs', () => {
            fs.mkdirSync('./logs');
        });
    });

    it('creates a log and tests for correct content', done => {
        request.post('/logs')
            .send('test')
            .end((err, res) => {
                if(err) done(err);
                assert.ok(res.text);
                request.get(`/logs/${JSON.parse(res.text).timeStamp}`)
                    .end((err, res) => {
                        if(err) done(err);
                        assert.equal(res.text, 'test');
                        done();
                    });
            });
    });

    it('gets all logs', done => {
        request.get('/logs')
            .end((err, res) => {
                if(err) done(err);
                assert.equal(JSON.parse(res.text).length, 1);
                done();
            });
    });
});