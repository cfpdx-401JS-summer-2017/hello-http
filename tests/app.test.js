const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert; // require('assert');
const app = require('../lib/app');

describe('server', () => {
    const request = chai.request(app);

    describe('greetings', () => {
        it('says hello world', done => {
            request.get('/')
                .end((err, res) => {
                    if (err) return done(err);
                    assert.equal(res.text, 'hello world');
                    done();
                });
        });

        it('/greeting', done => {
            request.get('/greeting')
                .end((err, res) => {
                    if (err) return done(err);
                    assert.equal(res.text, 'Hello Stranger');
                    done();
                });
        });

        it('/greeting/christy', done => {
            request.get('/greeting/christy')
                .end((err, res) => {
                    if (err) return done(err);
                    assert.equal(res.text, 'Hello Christy');
                    done();
                });
        });

        it('/greeting/christy?salutation=hey', done => {
            request.get('/greeting/christy?salutation=hey')
                .end((err, res) => {
                    if (err) return done(err);
                    assert.equal(res.text, 'Hey Christy');
                    done();
                });
        });

        it('/greeting/?salutation=hi', done => {
            request.get('/greeting/?salutation=hi')
                .end((err, res) => {
                    if (err) return done(err);
                    assert.equal(res.text, 'Hi Stranger');
                    done();
                });
        });
    });

    describe('facts', ()=> {
        it('/fact', done => {
            request.get('/fact')
                .end((err, res) => {
                    if (err) return done(err);
                    assert.ok(res.text);
                    done();
                });
        });
    });

});
