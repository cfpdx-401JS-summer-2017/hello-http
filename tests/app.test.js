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
                    assert.equal(res.text, 'Hello stranger');
                    done();
                });
        });

        it('/greeting/christy', done => {
            request.get('/greeting/christy')
                .end((err, res) => {
                    if (err) return done(err);
                    assert.equal(res.text, 'Hello christy');
                    done();
                });
        });
    });

    describe('facts', ()=> {
        it('/fact', done => {
            request.get('/fact')
                .end((err, res) => {
                    if (err) return done(err);
                    assert.equal(res.text, 'random http fact');
                    done();
                });
        });
    });

});
