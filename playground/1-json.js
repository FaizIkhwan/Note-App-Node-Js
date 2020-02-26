const fs = require('fs')
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan holiday'
}

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)
data.name = "Faiz Ikhwan"
data.age = 23
const alteredDataJson = JSON.stringify(data)
fs.writeFileSync('1-json.json', alteredDataJson)
