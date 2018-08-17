//helper fcn
var normal = 'normal';
var hyphen = 'hyphen-like-this';
var phrase = 'phrase with spaces';
var apostrophe = "momma's little helper";

var makeBlanks = function(str) {
  const strArr = str.split('');
  const wordDashesArr = strArr.map(char => {
    if (/^[a-z]+$/i.test(char) === false) {
      return char;
    } else {
      return '_';
    }
  });
  const wordDashes = wordDashesArr.join(' ');
  return wordDashes;
};

module.exports = makeBlanks;
