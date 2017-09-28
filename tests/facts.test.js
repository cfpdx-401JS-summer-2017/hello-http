const app = require('../lib/app');
const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('random facts', () => {
	const req = chai.request(app);
	it('path is /fact', () => {
		return req.get('/fact')
			.then(res => {
				console.log(res.text, 'The more you know!');
				// assert.equal('Your random fact is', res.text);
			});
	});
});

