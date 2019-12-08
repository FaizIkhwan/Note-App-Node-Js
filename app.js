// const name = require("./utils.js")
const validator = require("validator")
const add = require("./utils.js")
const fs = require('fs')
const notes = require("./notes.js")
const chalk = require("chalk")

fs.writeFileSync('notes.txt', 'My name is Faiz Ikhwan. ')
fs.appendFileSync("notes.txt", "I am the tech lead. ")

const sum = add(4, 6)

// console.log("name: " + name)
console.log("sum: " + sum)
console.log("notes: " + notes())
console.log(validator.isEmail("faizikhwantop@gmail.com"))
console.log(chalk.green("Success"))
