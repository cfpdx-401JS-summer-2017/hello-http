const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert; // require('assert');
const app = require('../lib/app');

describe('server', () => {
    const request = chai.request(app);

    it('says hello world', done => {
        request.get('/')
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.text, 'hello world');
                done();
            });
    });
});
