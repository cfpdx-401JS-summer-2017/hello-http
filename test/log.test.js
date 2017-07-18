const chai = require('chai');
const chaiHttp = require('chai-http');
const rimraf = require('rimraf');
const path = require('path');
const mkdirp = require('mkdirp');

chai.use(chaiHttp);

const assert = chai.assert;

const log = require('../lib/log');

describe.only('log', () => {
  const request = chai.request(log);

  const dir = path.join(__dirname, '../log');
  console.log(dir);
  before(done => {
    rimraf(dir, err => {
      if (err) done(err);
      else done();
    });
  });

  before(done => {
    mkdirp(dir, err => {
      if(err) return done(err);
      else done();
    });
  });

  it('gives a file with the timestamp as a name', done => {
    const msg = 'I love timestamping';
    log(msg, (err, logged) => {
      if(err) return done(err);
      assert.equal(logged.timestamp.length, 24);
      done();
    });

  });

});

