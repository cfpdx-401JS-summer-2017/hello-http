const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const fact = require('../lib/fact');

const app = require('../lib/app');

// TODO later: change these into unit tests; only use integration tests to check
// if going to /greeting gives us 'salutation' 'name'
// also add unit tests for greeting and facts functions
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

    it('gives a fact from the array of facts', done => {
        request.get('/fact')
            .end((err, res) => {
                if (err) done(err);

                assert.include(fact.facts, res.text);
                done();
            });
    });
});

describe('/logs', () => {
    const request = chai.request(app);
    it('logs folder is not empty after a post is made', done => {
        request.post('/logs')
            .end((err, res) => {
                if (err) done(err);
                assert.isAtLeast(res.text, 1);
                done();
            });
    });
});
