const getNotes = require("./notes.js")
const chalk = require("chalk")
const yargs = require('yargs')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
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
