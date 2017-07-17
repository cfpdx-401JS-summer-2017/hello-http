const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../lib/app');

describe('app', () => {
    const request = chai.request(app);
    
    it('greets a stranger', done => {
        request.get('/greeting')
            .end((err, res) => {
                assert.equal(res.text, 'hello stranger');
                done();
            });
    });
    it('greets by name', done => {
        request.get('/greeting/joe')
            .end((err, res) => {
                assert.equal(res.text, 'hello Joe');
                done();
            });
    });
});
