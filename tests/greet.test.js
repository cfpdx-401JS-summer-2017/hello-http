const app = require('../lib/app.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

describe.only('greeting', () => {
  const req = chai.request(app);

  it('url is greeting/', () => {
    return req.get('/greeting')
      .query({ name: 'yolanda' })
      .then(res => {
        // console.log('back: ', res.text);
        assert.equal('hello yolanda', res.text);
      })
  }), it('url is greeting/?salutation=<salutation>', () => {
    req.get('/greeting')
      .query({ salutation: 'Howdy' })
      .then(res => {
        // console.log('back: ', res.text);
        assert.equal('Howdy stranger', res.text);
      });
  }),
    it('url is greeting/<name>', () => {
      const testName = 'Harper';
      req.get('/greeting/:name')
        .query({ name: testName })
        .then(res => {
          // console.log('back: ', res.text);
          assert.equal('hello Harper', res.text);
        });
    }), it('url is greeting/<name>?salutation=<salutation>', () => {
      req.get('/greeting/:name')
        .query({ name: 'Janice', salutation: 'Greetings Earthling ' })
        .then(res => {
          assert.equal('Greetings Earthling Janice', res.text);
        });
    });
});