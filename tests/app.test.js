const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

const app = require('../lib/app');

describe('/greeting', () => {
    const request = chai.request(app);
    it('responds with hello stranger if no name or salutation given', done => {
        request.get('/greeting')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'Hello Stranger');
                done();
            });
    });

    it('responds with hello name if name but no salutation given', done => {
        request.get('/greeting/Steph')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'Hello Steph');
                done();
            });
    });

    it('responds with salutation if given', done => {
        request.get('/greeting/Steph?salutation=yo')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'yo Steph');
                done();
            });
    });

    it('responds with salutation if given with no name', done => {
        request.get('/greeting?salutation=yo')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'yo Stranger');
                done();
            });
    });

    it('gives an error if status code is not 200', done => {
        request.get('/puppies')
            .end((err, res) => {
                assert.equal(res.statusCode, 404);
                assert.equal(res.text, 'CANNOT GET /puppies');
                done();
            });
    });
});

describe('/fact', () => {
    const request = chai.request(app);
    it('is a valid path', done => {
        request.get('/fact')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.statusCode, 200);
                done();
            });
    });
});