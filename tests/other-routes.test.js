const app = require('../lib/app.js');
const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('other routes', () => {
	const req = chai.request(app);

	it('other route 1', () => { });
	it('other route 2', () => { });
});
