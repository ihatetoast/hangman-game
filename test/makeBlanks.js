var expect = require('chai').expect;
var makeBlanks = require('../units/makeBlanks.js');

describe('dude', function() {
  it('it should show up in tests', function() {
    expect(makeBlanks('')).to.equal('');
  });
});
