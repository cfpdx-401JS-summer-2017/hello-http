const app = require('../lib/app.js');
const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe.only('greeting', () => {
  it('url is greeting/', () => {
    return chai.request(app)
      .get('/greeting')
      .query({ name: 'yolanda' })
      .then(res => {
        assert.equal('hello yolanda', res.text);
      })
  }), it('url is greeting/?salutation=<salutation>', () => {
    return chai.request(app)
      .get('/greeting/?salutation=yo')
      .then(res => {
        assert.equal('yo stranger', res.text)
      })
  }), it('url is greeting/<name>', () => {
    const testName = 'Yolanda';
    return chai.request(app)
      .get('/greeting/:name')
      .query({ name: testName })
      .then(res => {
        assert.equal('hello Yolanda', res.text)
      })
  }), it('url is greeting/<name>?salutation=<salutation>', () => {
    return chai.request(app)
      .get('/greeting/:name')
      .query({ name: 'Janice', salutation: 'Greetings Earthling' })
      .then(res => {
        assert.equal('Greetings Earthling Janice', res.text)
      })
  });
});
