const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const assert = chai.assert;

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

  it('return a greeting when the /greeting path recieves a GET method', done => {
    request.get('/greeting')
      .end((err, res) => {
        if(err) return done(err);
        assert.equal(res.text, 'hello stranger');
        done();
      });
  });


});