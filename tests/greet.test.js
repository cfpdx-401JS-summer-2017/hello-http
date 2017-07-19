const app = require('../lib/app.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

describe('greeting', () => {
	const req = chai.request(app);
	it('method is GET', done => {
		req.get('/greeting').set('content-type', 'application/json').query({ id: '90' }).end((err, res) => {
			if (err) return done(err);
			console.log('res: ', res.text);
			// assert.equal(res.text, 'hello world');
			done();
		});

		it('url is greeting/<name>', () => {
			// assert.equal('response is hello <name>');
		});

		it('url is greeting/', () => {
			// assert.equal('response is hello stranger' )
		});
		it('url is greeting/<name>?salutation=<salutation>', () => {
			// assert.equal('response is <salutation> <name>');
		});
		it('url is greeting/?salutation=<salutation>', () => {
			// assert.equal('response is <salutation> stranger' )
		});
	});
});
