const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../lib/app');

xdescribe('greeting', () => {
    const request = chai.request(app);
    it('greets', done => {
        request.get('/greeting')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'hello stranger');
                done();
            });
    });
});

xdescribe('greeting with meow', () => {
    const request = chai.request(app);
    it('greets with a name', done => {
        request.get('/greeting/meow')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'hello meow');
                done();
            });
    });
});


