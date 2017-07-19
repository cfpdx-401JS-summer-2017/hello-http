const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

const log = require('../lib/log');

describe.only('log', () => {
    const request = chai.request(log);

    it('posts file to logs', done => {
        request.post('/log')
            .send('meow')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'meow');
                done();
            });
    });
});