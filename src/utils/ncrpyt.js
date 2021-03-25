const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const aes256 = require('aes256')

var key = 'defaultkeychangeme'
var defaultkey = 'defaultkeychangeme'
key = fs.readFileSync(path.join(__dirname + '../../../keys/encryptionKey.key'), 'utf-8')

const encrypt = (text) => {
    var encryptedText = aes256.encrypt(key, text)
    fs.appendFileSync(path.join(__dirname, '../../out/encrypts.txt'), encryptedText + '\n')
    console.log(chalk.red(`Your encrypted message: ${encryptedText}`))
}

const decrypt = (text) => {
    var decryptedText = aes256.decrypt(key, text)
    fs.appendFileSync(path.join(__dirname, '../../out/decrypts.txt'), `Input: ${text}` + ` Output: ${decryptedText}` + '\n')
    console.log(chalk.green(`Your decrypted message: ${decryptedText}`))
}

const setKey = (newKey) => {
    key = newKey
    fs.writeFileSync(path.join(__dirname + '../../../keys/encryptionKey.key'), key)
    console.log(chalk.blue(`Key is now: ${key}`))
}

const resetKey = () => {
    key = defaultkey
    fs.writeFileSync(path.join(__dirname + '../../../keys/encryptionKey.key'), key)
    console.log(chalk.blue(`Key is has been reset to: ${key}`))
}

const getKey = () => {
    console.log(chalk.blue(`Your current key: ${key}`))
}

const wipe = () => {
    fs.writeFileSync(path.join(__dirname, '../../out/encrypts.txt'), ""),
    fs.writeFileSync(path.join(__dirname, '../../out/decrypts.txt'), ""),
    fs.writeFileSync(path.join(__dirname + '../../../keys/encryptionKey.key'), defaultkey)
}

const listCMDs = () => {
    console.log(chalk.blue(`Key Related CMDs\n-------------------------------------------------------------------------\n` +
    `node main.js setKey --key="mykey"\n` +
    'Sets AES256 key\n' +
    `node main.js getKey\n` +
    'Fetches AES256 key\n' +
    `node main.js resetKey\n` +
    `Encryption Related CMDs\n-------------------------------------------------------------------------\n` +
    `node main.js encrypt --text="mytext"\n` +
    'Encrypt given text\n' +
    `node main.js decrypt --text="encryptedText"\n` +
    'Decrypts given text(MUST BE USING THE SAME KEY AS WHEN IT WAS ENCRYPTED)\n' +
    `Clean up CMDs\n-------------------------------------------------------------------------\n` +
    `node main.js wipe\n` +
    `Erases all the data in out and reset the key in keys to default.` + 
    ``))
}

module.exports = {
    getKey: getKey,
    setKey: setKey,
    resetKey: resetKey,
    decrypt: decrypt,
    encrypt: encrypt,
    listCMDs: listCMDs,
    wipe: wipe
}