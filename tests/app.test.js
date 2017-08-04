const chai = require('chai');
const http = require('http');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);
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
            });
    });
});