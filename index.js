const mustache = require('mustache')
const fs = require('fs')
const path = require('path')

const main = (message) => {
  const mail = fs.readFileSync(path.join('templates', 'main', 'index.mustache'), 'utf-8')
  return mustache.render(mail, {
    message
  })
}

module.exports = {
  main
}
