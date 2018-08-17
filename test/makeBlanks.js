var expect = require('chai').expect;
var makeBlanks = require('../units/makeBlanks.js');

describe('makeBlanks', function() {
  it('it should replace letters with underscores', function() {
    expect(makeBlanks('normal')).to.equal('_ _ _ _ _ _');
  });
  it('it should replace letters with underscores ignore hyphens', function() {
    expect(makeBlanks('hyphen-like-this')).to.equal(
      '_ _ _ _ _ _ - _ _ _ _ - _ _ _ _'
    );
  });
  it('it should replace letters with underscores ignore spaces', function() {
    expect(makeBlanks('phrase with spaces')).to.equal(
      '_ _ _ _ _ _   _ _ _ _   _ _ _ _ _ _'
    );
  });
  it('it should replace letters with underscores ignore apostrophes', function() {
    expect(makeBlanks("momma's little helper")).to.equal(
      "_ _ _ _ _ ' _   _ _ _ _ _ _   _ _ _ _ _ _"
    );
  });
});
