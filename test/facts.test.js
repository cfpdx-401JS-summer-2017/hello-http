const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const assert = chai.assert;

const facts = require('../lib/facts');

describe('facts', () => {

  it('reads the http-facts file', done => {

    facts((err, fact) => {
      if(err) return done(err);
      assert.isOk(fact);
      done();
    });

  });

  it('returns one of four facts about HTTP', done => {

    facts((err, fact) => {
      if(err) return done(err);
      console.log(fact);
      const factStart = fact.startsWith('HTTP');
      assert.isOk(factStart);
      done();
    });

  });

});