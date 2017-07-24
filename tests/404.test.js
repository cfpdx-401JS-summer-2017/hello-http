const app = require('../lib/app.js');
const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe.only('returns 404 error page', () => {
	const req = chai.request(app);

	it('has poorly-formed url', () => {
		return req.get('/error')
			.then(res => {
				assert.equal('Your request has failed.', res.text);
			});
	}), it('the server process is not running', () => {

	});
});
