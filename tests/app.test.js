
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');
const random = require('../lib/random.facts.js');
const fs = require('fs');

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

    it('returns random fact', done => {

        var randomFactList = [
            'http is an application protocol for distributed, collaborative, and hypermedia information systems.',
            'http is the foundation of data communication for the World Wide Web.',
            'http uses structured text that includes logical hyperlinks between nodes containing text.'];

        request.get('/fact')

            .end((err, res) => {
                if (err) return done(err);

                assert.oneOf(res.text, randomFactList);

                done();
            });
    });

    it('posts data', done => {

        const fileData = 'By the power of Greyskull!';

        request
            .post('/')
            .send(fileData)
            .end((err, res) => {
                if (err) return done(err);

                assert.ok(fs.statSync('./logs').isDirectory());
                assert.equal(res.text, fileData);
                done();
            });
    });

    it('returns all log files', done => {

        request
            .get('/logs')
            .end((err, res) => {
                console.log(res);
                if (err) return done(err);
                assert.ok(fs.statSync('./logs').isDirectory());
                assert.ok(res.body.length);
                done();
            });
    });

});