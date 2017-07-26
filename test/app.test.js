const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../lib/app.js');
const assert = require('assert');

// each of these inital 3 or 4 tests will be incorperating GETS meaning HTTP 200 responce codes 
describe('greeting', ()=>{
    const request = chai.request(app);
    it('says hello', (done)=>{
        request.get('/greeting')
            .end((err,res)=> {
                if (err) done(err);
                assert.equal(res.text, 'Hello Stranger');
                done();
            });
    });
    it('says hello person', (done)=>{
        request.get('/greeting/Christopher')
            .end((err,res)=> {
                if (err) done(err);
                assert.deepEqual(res.text, 'Hello Christopher');
            });
        request.get('/greeting/Ben')
            .end((err,res)=> {
                if (err) done(err);
                assert.deepEqual(res.text, 'Hello Ben');
            });
        request.get('/greeting/Julia')
            .end((err,res)=> {
                if (err) done(err);
                assert.deepEqual(res.text, 'Hello Julia');
                done();
            });
    });
    it('adjusts greeting', (done)=> {
        
        request.get('/greeting/jane?salutation=yo')
            .end((err,res)=> {
                if (err) done(err);
                assert.deepEqual(res.text, 'yo jane');
                done();
            });

    });
});
describe('404 error', ()=> {
    //tests incomplete
    const request = chai.request(app);
    it('should return status code 404 Not Found when a missing path is taken', (done) => {
        request.post('/heck/you')
            .end((err,res) => {
                assert.ok(res.notFound);
                done();
            });

    });

});
describe('random fact generator', () =>{
    const request = chai.request(app);
    it('responds with three interesting facts about http', (done)=> {
        request.get('/facts')
            .end((err,res)=> {
                if (err) done(err);
                assert.ok(res.text);
                done();
            });
    });

});
describe('logs', ()=> {
    const request = chai.request(app);
    const firstPost = { username: 'TheJerk#44', comment: 'First!' };
    it('Returns an array of all the timestamps in logs without the .txt extension',(done)=>{
        request.get('/logs')
            .end((err,res)=> {
                if (err) done(err);
                assert.equal(res.text.length, 55);
                done();
            });

    });
    it('writes a file within the body contents', (done)=>{
        request.post('/logs')
            .send(firstPost)
            .end((err,res)=> {
                assert.equal(res.body.comment, firstPost.comment);
                assert.equal(res.body.username, 'TheJerk#44');
                done();
            });
        
    });
    it('retruns a single item from the array of timestamps by timestamp', (done) => {
        request.get('/logs/:2017-07-22T00-35-19.684Z')
            .end((err,res)=> {
                if (err) done(err);
                assert.deepEqual(res.text, '{"username":"TheJerk#44","comment":"First!"}');
                done();
            });
    });
});