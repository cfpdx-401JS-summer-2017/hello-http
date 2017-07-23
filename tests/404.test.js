const app = require('../lib/app.js');
const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe.only('returns 404 error page', () => {
	it('has poorly-formed url', () => {
		return chai.request(app)
			.get('..\.../greet')
			.then(res => {
				console.log(res);
			})
	});
	it.only('the server process is not running', () => {

	});
});
