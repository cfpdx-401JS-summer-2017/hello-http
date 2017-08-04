const chai = require('chai');
const http = require('http');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);
const facts = require('../lib/fact').facts;
const app = require('../lib/app');

describe('server requests', () => {
    const request = chai.request(app);

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
                done();
            });
    });
});