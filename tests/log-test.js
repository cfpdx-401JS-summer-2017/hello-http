const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

const log = require('../lib/log');

describe('/log', () => {
    const request = chai.request(log);

    it('posts file to logs', done => {
        request.post('/logs')
            // .setHeader('content-type', 'application/')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 3);
                done();
            });
    });
});