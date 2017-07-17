const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../lib/app.js');
const assert = require('assert');
// each of these inital 3 or 4 tests will be incorperating GETS meaning HTTP 200 responce codes 
describe('/greeting', ()=>{
    const request = chai.request(app);
    it('says hello', (done)=>{
        request.get('/greeting')
            .end((err,res)=> {
                if (err) done(err);
                assert.equal(res.text, 'hello stranger');
                done();
            });
    });
    it('says hello person', (done)=>{
        request.get('/greeting')
            .end((err,res)=> {
                if (err) done(err);
                assert.equal(res.text, 'hello stranger');
                done();
            });
    });
});