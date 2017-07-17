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
 it('changes the greeting to a different name', done => {
        request.get('/greeting/joe')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'hello friend');
                done();
            });
    });
});
