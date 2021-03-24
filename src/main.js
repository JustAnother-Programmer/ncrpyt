const yargs = require('yargs')
const ncrypt = require('./utils/ncrpyt.js')

yargs.version('1.2.1')

yargs.command({
    command: 'setKey',
    describe: 'Set the AES256 key.',
    builder: {
        key: {
            describe: 'AES256 Key',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        ncrypt.setKey(argv.key)
    }
})

yargs.command({
    command: 'encrypt',
    describe: 'Encrypt given text',
    builder: {
        text: {
            describe: 'Text to be encrypted',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        ncrypt.encrypt(argv.text)
    }
})

yargs.command({
    command: 'getKey',
    describe: 'Gets the current AES256 key',
    handler() {
        ncrypt.getKey()
    }
})

yargs.command({
    command: 'decrypt',
    describe: 'Takes an encrypted message to decrypt. (MUST BE USING THE SAME KEY)',
    builder: {
        text: {
            describe: 'Input the encrypted message',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        ncrypt.decrypt(argv.text)
    }
})

yargs.command({
    command: 'listCMDs',
    describe: 'Lists CMDs',
    handler() {
        ncrypt.listCMDs()
    }
})

yargs.command({
    command: 'resetKey',
    describe: 'Resets AES256 key to default',
    handler() {
        ncrypt.resetKey()
    }
})

yargs.command({
    command: 'wipe',
    describe: 'Erases all the data in out and keys.',
    handler() {
        ncrypt.wipe()
    }
})

yargs.parse()