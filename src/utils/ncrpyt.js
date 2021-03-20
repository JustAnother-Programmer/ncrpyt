const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const aes256 = require('aes256')

var key = 'defaultkeychangeme'
key = fs.readFileSync('encryptionKey.key', 'utf-8')

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
    fs.writeFileSync('encryptionKey.key', key)
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