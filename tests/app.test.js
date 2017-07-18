const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../lib/app');
const cowsay = require('cowsay');

describe('app', () => {
    const request = chai.request(app);
    
    it('greets a stranger', done => {
        request.get('/greeting')
            .end((err, res) => {
                assert.equal(res.text, cowsay.say({text: 'Hello stranger'}));
                done();
            });
    });
    it('greets by name', done => {
        request.get('/greeting/Joe')
            .end((err, res) => {
                assert.equal(res.text, cowsay.say({text: 'Hello Joe'}));
                done();
            });
    });
    it('greets a stranger', done => {
        request.get('/greeting?salutation=Hola')
            .end((err, res) => {
                assert.equal(res.text, cowsay.say({text: 'Hola stranger'}));
                done();
            });
    });
    it('custom greets by name', done => {
        request.get('/greeting/Joe?salutation=Yo')
            .end((err, res) => {
                assert.equal(res.text, cowsay.say({text: 'Yo Joe'}));
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
