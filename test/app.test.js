const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const assert = chai.assert;

const app = require('../lib/app');

describe('server', () => {
  const request = chai.request(app);

  it('return a greeting when the /greeting path receives a GET method', done => {
    request.get('/greeting')
      .end((err, res) => {
        if(err) return done(err);
        assert.equal(res.text, 'hello stranger');
        done();
      });
  });

  it('returns a 404 error with a specific message when served with an undefined Method and/or url path', done => {
    request.post('/nonsense')
      .end((err, res) => {
        if(err) {
          assert.equal(res.statusCode, 404);
          assert.equal(res.text, 'CANNOT POST /nonsense');
          done();
        } else if(!err) {
          assert.isOk(false);
          done();
        }
      });
  });

  it('returns a 404 error with a specific message when served with an undefined Method and url/or path', done => {
    request.delete('/foo')
      .end((err, res) => {
        if(err) {
          assert.equal(res.statusCode, 404);
          assert.equal(res.text, 'CANNOT DELETE /foo');
          done();
        } else if(!err) {
          assert.isOk(false);
          done();
        }
      });
  });

  it('returns a greeting using the specified name', done => {
    request.get('/greeting/bob')
      .end((err, res) => {
        if(err) return done(err);
        assert.equal(res.text, 'hello bob');
        done();
      });
  });

  it('returns a greeting using a specified name and salutation', done => {
    request.get('/greeting/bob?salutation=hey there')
      .end((err, res) => {
        if(err) return done(err);
        assert.equal(res.text, 'hey there bob');
        done();
      });
  });

  it('returns a greeting wtih specifed salutation even if no name given', done => {
    request.get('/greeting?salutation=what up')
      .end((err, res) => {
        if(err) return done(err);
        assert.equal(res.text, 'what up stranger');
        done();
      });
  });

});