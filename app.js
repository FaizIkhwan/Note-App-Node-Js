const getNotes = require("./notes.js")
const chalk = require("chalk")
const yargs = require('yargs')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function() {
        console.log('Removing a note!')
    }
})

// Create a list command
yargs.command({
    command: 'list',
    describe: 'Listing note(s)',
    handler: function() {
        console.log('Listing note(s)!')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Reading note(s)',
    handler: function() {
        console.log('Reading note(s)!')
    }
})

console.log(yargs.argv)
