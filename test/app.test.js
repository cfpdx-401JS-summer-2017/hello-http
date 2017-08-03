const chai = require('chai');
const chaiHttp = require('chai-http');
const rimraf = require('rimraf');
const path = require('path');
const mkdirp = require('mkdirp');

chai.use(chaiHttp);

const assert = chai.assert;

const app = require('../lib/app');

describe('server', () => {
  const request = chai.request(app);

  const dir = path.join(__dirname, '../log');

  before(done => {
    rimraf(dir, err => {
      if (err) done(err);
      else done();
    });
  });

  before(done => {
    mkdirp(dir, err => {
      if(err) return done(err);
      else done();
    });
  });

  before(done => {
    const msg1 = 'I\'m having the time of my life';
    const msg2 = 'and I owe it all to you';
    const msg3 = 'something something something rhythm of the song';
    request.post('/log')
      .send(msg1)
      .end((err, res) => {
        if(err) return done(err);
        request.post('/log')
          .send(msg2)
          .end((err, res) => {
            if(err) return done(err);
            request.post('/log')
              .send(msg3)
              .end((err, res) => {
                if (err) return done(err);
                done();
              });
          });
      });
  });

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

  it('returns a greeting with specified salutation even if no name given', done => {
    request.get('/greeting?salutation=what up')
      .end((err, res) => {
        if(err) return done(err);
        assert.equal(res.text, 'what up stranger');
        done();
      });
  });

  it('returns a random fact about HTTP', done => {
    request.get('/fact')
      .end((err, res) => {
        if(err) return done(err);
        assert.isOk(res);
        done();
      });
  });

  it('posts a log to the log folder', done => {
    request.post('/log')
      .send('We like to post it post it')
      .end((err, res) => {
        if(err) return done(err);
        let logged = JSON.parse(res.body);
        assert.equal(logged.body, 'We like to post it post it');
        done();
      });
  });

  it('retrieves the contents of a file when given the filename without the file extension', done => {
    request.post('/log')
      .send('ground control to major tom')
      .end((err, res) => {
        if(err) return done(err);
        let posted = JSON.parse(res.body);
        request.get(`/log/${posted.time}`)
          .end((err, res) => {
            if(err) return done(err);
            let response = res.res.text;
            assert.equal(response, 'ground control to major tom');
            done();
          });
      });
  });
});