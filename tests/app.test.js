const chai = require('chai');
const factObj = require('../lib/fact');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;


const app = require('../lib/app');

describe('/greeting', () => {
    const request = chai.request(app);

    it('returns greeting with no name', done => {
        request.get('/greeting')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'hello stranger');
                done();
            });
    });

    it('returns greeting with name', done => {
        request.get('/greeting/joe')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'hello joe');
                done();
            });
    });

    it('returns greeting and salutation', done => {
        request.get('/greeting/joe?salutation=hola')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'hola joe');
                done();
            });
    });

    it('facts are there', done => {
        request.get('/fact')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.statusCode, 200);
                done();
            });
    });

    it('returns a random fact', done => {
        request.get('/fact')
            .end((err, res) => {
                if (err) done(err);
                assert.include(factObj.arrayOfFacts, res.text);
                done();
            });
    });

    it('returns 404 not found', done => {
        request.get('/foo')
            .end((err, res) => {
                assert.equal(res.statusCode, 404);
                assert.equal(res.text, 'CANNOT GET /foo');
                done();
            });
    });

});