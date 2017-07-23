const promisify = require("util").promisify;
const app = promisify(require('../lib/app.js'));
const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('greeting', () => {

  it.only('url is greeting/', () => {
    return chai.request(app)
      .get('/greeting')
      .query({ name: 'yolanda' })
      .then(res => {
        assert.equal('hello yolanda', res.text)
      })
  }), it('url is greeting/?salutation=<salutation>', () => {
    req.get('/greeting').query({ salutation: 'Howdy' })
      .end((err, res) => {
        if (err) return done(err);
        assert.equal(
          JSON.parse(res.text).salutation + ' ' + JSON.parse(res.text).name,
          'Howdy stranger'
        );
        done();
      });
  }), it('url is greeting/<name>', () => {
    const testName = 'Yolanda';
    req.get('/greeting/:name').query({ name: testName })
      .end((err, res) => {
        if (err) return done(err);
        assert.equal(
          JSON.parse(res.text).salutation + ' ' + JSON.parse(res.text).name,
          'Yolanda'
        );
        done();
      });
  }), it('url is greeting/<name>?salutation=<salutation>', () => {
    req
      .get('/greeting/:name')
      .query({ name: 'Janice', salutation: 'Greetings Earthling ' })
      .end((err, res) => {
        if (err) return done(err);
        assert.equal(
          JSON.parse(res.text).salutation + ' ' + JSON.parse(res.text).name,
          'Greetings Earthling Janice'
        );
        done();
      });
  });
});
