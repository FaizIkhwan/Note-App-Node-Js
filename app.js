const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Faiz Ikhwan. ')
fs.appendFileSync("notes.txt", "I am the tech lead. ")