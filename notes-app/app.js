const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')


yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body) 
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Title of Note",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
            notes.removeNote(argv.title)
        }
})

yargs.command({
    command: 'list',
    describe: 'This is a list',
    handler() {
            notes.listNotes()
        }
})

yargs.command({
    command: 'read',
    describe: 'Read command',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }   
 }
)

yargs.parse()
