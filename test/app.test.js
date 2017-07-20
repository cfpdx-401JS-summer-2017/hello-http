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
describe('logs', ()=> {
    const request = chai.request(app);

    it('writes a file within the body contents', (done)=>{
        const firstPost = { username: 'TheJerk#44', comment: 'First!' };
        request.post('/logs')
            .send(firstPost)
            .end((err,res)=> {
                //console.log(res);
                assert.equal(res.body.comment, firstPost.comment);
                assert.equal(res.body.username, 'TheJerk#44');
                done();
            });
    });
});