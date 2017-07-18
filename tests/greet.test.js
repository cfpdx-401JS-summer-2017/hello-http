// Respond with a greeting if the method is GET and url (path) is /greeting/<name>
// If query string specifies a salutation like /greeting/jane?salutation=yo, use that for the greeting salutation, otherwise hello
// If name is not included, use stranger, otherwise use name in greeting

const assert = require('assert');
const app = require('../lib/app.js');

describe('greeting', () => {
	const url = 'http://www.google.com';
	app.greeting(url);

	it('method is GET', () => {
		if (
			(
				app,
				() => {
					// assert.equals('request type is get');
				}
			)
		)
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
