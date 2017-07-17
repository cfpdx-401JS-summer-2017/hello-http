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
                assert.equal(res.text, 'Hello stranger');
                done();
            });
    });
    it('greets by name', done => {
        request.get('/greeting/Joe')
            .end((err, res) => {
                assert.equal(res.text, 'Hello Joe');
                done();
            });
    });
    it('greets a stranger', done => {
        request.get('/greeting?salutation=Hola')
            .end((err, res) => {
                assert.equal(res.text, 'Hola stranger');
                done();
            });
    });
    it('custom greets by name', done => {
        request.get('/greeting/Joe?salutation=Yo')
            .end((err, res) => {
                assert.equal(res.text, 'Yo Joe');
                done();
            });
    });
    it('asks for facts', done => {
        request.get('/fact')
            .end((err, res) => {
                assert.ok(res.text);
                done();
            });
    });
});
