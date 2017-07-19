const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

const app = require('../lib/app');

describe('app', () =>{
     const request = chai.request(app);
    it('works', done => {
    request.get('/greeting')
    .end((err, res) => {
        if (err) done(err);
        assert.equal(res.text, 'hello world');
        done();
    });
});
 it('changes the greeting to stranger', done => {
        request.get('/greeting/stranger')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'hello stranger');
                done();
            });
    });
    it('changes the path to an HTTP fact', done => {
        request.get('/fact')
            .end((err, res) => {
                if (err) done(err);
                assert.isOk(res.text);
                assert.include(res.text, 'Fact');
                done();
            });
    });
     it('uses a different salutation in the query', done => {
        request.get('/greeting/swaggy?salutation=hey')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'hello stranger');
                done();
            });
    });
     it.skip('changes the greeting to a different name', done => {
        request.delete('/greeting/stranger')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'hello stranger');
                done();
            });
    }); 
});
