const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Invalid input. Message and key are required.');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    const messageArray = message.split('');
    const keyArray = key.split('');

    let result = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      if (messageArray[i].match(/[A-Z]/)) {
        const messageCharCode = messageArray[i].charCodeAt(0);
        const keyCharCode = keyArray[j % key.length].charCodeAt(0);
        const encryptedCharCode = ((messageCharCode + keyCharCode) % 26) + 65;
        result += String.fromCharCode(encryptedCharCode);
        j++;
      } else {
        result += messageArray[i];
      }
    }

    return this.reverse ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Invalid input. Encrypted message and key are required.');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    const encryptedMessageArray = encryptedMessage.split('');
    const keyArray = key.split('');

    let result = '';

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessageArray[i].match(/[A-Z]/)) {
        const encryptedCharCode = encryptedMessageArray[i].charCodeAt(0);
        const keyCharCode = keyArray[j % key.length].charCodeAt(0);
        const decryptedCharCode = ((encryptedCharCode - keyCharCode + 26) % 26) + 65;
        result += String.fromCharCode(decryptedCharCode);
        j++;
      } else {
        result += encryptedMessageArray[i];
      }
    }

    return this.reverse ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
