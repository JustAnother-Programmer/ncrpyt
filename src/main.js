const yargs = require('yargs')
const ncrypt = require('./utils/ncrpyt.js')

yargs.version('1.2.1')

yargs.command({
    command: 'setkey',
    describe: 'Set the AES256 key.',
    builder: {
        key: {
            describe: 'AES256 Key',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        ncrypt.setkey(argv.key)
    }
})

yargs.command({
    command: 'setdefaultkey',
    describe: 'Set the default AES256 key.',
    builder: {
        key: {
            describe: 'AES256 Key',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        ncrypt.setkey(argv.key)
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
    command: 'getkey',
    describe: 'Gets the current AES256 key',
    handler() {
        ncrypt.getkey()
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
    command: 'listcmds',
    describe: 'Lists CMDs',
    handler() {
        ncrypt.listcmds()
    }
})

yargs.command({
    command: 'resetkey',
    describe: 'Resets AES256 key to default',
    handler() {
        ncrypt.resetkey()
    }
})

yargs.command({
    command: 'wipe',
    describe: 'Erases all the data in out and reset the key in keys to default.',
    handler() {
        ncrypt.wipe()
    }
})

yargs.parse()