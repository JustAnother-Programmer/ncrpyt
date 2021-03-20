const fs = require('fs')
const chalk = require('chalk')
const aes256 = require('aes256')

var key = 'defaultkeychangeme'

const encrypt = (text) => {
    var encryptedText = aes256.encrypt(key, text)
    fs.appendFileSync('../out/encrypts.txt', encryptedText + '\n')
    console.log(chalk.red(`Your encrypted message: ${encryptedText}`))
}

const decrypt = (text) => {
    var decryptedText = aes256.decrypt(key, text)
    fs.appendFileSync('../out/decrypts.txt', `Input: ${text}` + ` Output: ${decryptedText}` + '\n')
    console.log(chalk.green(`Your decrypted message: ${decryptedText}`))
}

const setKey = (newKey) => {
    key = newKey
    console.log(chalk.blue(`Key is now: ${key}`))
}

const getKey = () => {
    console.log(chalk.blue(`Your current key: ${key}`))
}

module.exports = {
    getKey: getKey,
    setKey: setKey,
    decrypt: decrypt,
    encrypt: encrypt
}