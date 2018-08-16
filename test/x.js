var expect = require('chai').expect;
var dude = require('../units/x.js');

describe('dude', function() {
  it('it should show up in tests', function() {
    expect(dude('really pulls the room together')).to.equal(
      'Dude, the string really pulls the room together'
    );
  });
});
