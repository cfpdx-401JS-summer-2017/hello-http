
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');

describe('server', () => {
    const request = chai.request(app);

    it('says hello stranger when no name specified', done => {
        request.get('/greeting')
            .end((err, res) => {
                if (err) return done(err);
                assert.equal(res.text, 'hello stranger');
                done();
            });
    });

    it('says hello monica when name monica is specified', done => {

        request.get('/greeting/monica')
            // request.get('/greeting/jane?salutation=yo')
            .end((err, res) => {
                if (err) return done(err);
                assert.equal(res.text, 'hello monica');
                done();
            });
    });

    it('says yo monica when name monica is specified with yo salutation', done => {

        request.get('/greeting/monica?salutation=yo')

            .end((err, res) => {
                if (err) return done(err);
                assert.equal(res.text, 'yo monica');
                done();

            });
    });

});