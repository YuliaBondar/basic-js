const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const activity = Number(sampleActivity);

  // Check if the provided sampleActivity is a valid number
  if (isNaN(activity) || typeof sampleActivity !== 'string' || activity <= 0 || activity > MODERN_ACTIVITY) {
    return false;
  }
 
  // Calculate the age using the formula
  const k = 0.693 / HALF_LIFE_PERIOD; // Calculate the decay constant
  const age = Math.ceil(Math.log(MODERN_ACTIVITY / activity) / k); // Calculate the age in years and round up
  
  return age;
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
