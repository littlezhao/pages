const json = require('./data/idom.json')

const fs = require('fs')
let result = []
for (let i = 0; i < 2000; i++) {
  const _word = json[Math.floor(Math.random() * 30000)]
  result.push(
    JSON.stringify(
      _word.word.length == 4 ? _word : json[Math.floor(Math.random() * 30000)]
    )
  )
}
fs.writeFile('./idomSimple.json', `${result}`, (err) => {
  if (err) {
    console.error(err)
    return
  }
})
