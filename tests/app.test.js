const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../lib/app');
const cowsay = require('cowsay');

describe('app', () => {
    const request = chai.request(app);

    it('greets a stranger', done => {
        request.get('/greeting')
            .end((err, res) => {
                assert.equal(res.text, cowsay.say({ text: 'Hello stranger' }));
                done();
            });
    });
    it('greets by name', done => {
        request.get('/greeting/Joe')
            .end((err, res) => {
                assert.equal(res.text, cowsay.say({ text: 'Hello Joe' }));
                done();
            });
    });
    it('custom greets a stranger', done => {
        request.get('/greeting?salutation=Hola')
            .end((err, res) => {
                assert.equal(res.text, cowsay.say({ text: 'Hola stranger' }));
                done();
            });
    });
    it('custom greets by name', done => {
        request.get('/greeting/Joe?salutation=Yo')
            .end((err, res) => {
                assert.equal(res.text, cowsay.say({ text: 'Yo Joe' }));
                done();
            });
    });
    it('asks for facts', done => {
        request.get('/fact')
            .end((err, res) => {
                assert.include(res.text, 'FACT:');
                done();
            });
    });
    it('posts to logs', done => {
        request.post('/logs')
            .end((err, res) => {
                assert.equal(res.text, 'bar');
                done();
            });
    });
});
