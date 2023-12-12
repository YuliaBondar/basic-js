const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numberString = String(n);
  let maxNumber = 0;

  for (let i = 0; i < numberString.length; i++) {
    const deletedDigitString = numberString.slice(0, i) + numberString.slice(i + 1);
    const deletedDigitNumber = parseInt(deletedDigitString);
    
    if (deletedDigitNumber > maxNumber) {
      maxNumber = deletedDigitNumber;
    }
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
