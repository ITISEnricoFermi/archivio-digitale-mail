const mustache = require('mustache')
const fs = require('fs')
const path = require('path')
const juice = require('juice')
const util = require('util')

const main = async (message) => {
  const mail = fs.readFileSync(path.join(__dirname, 'templates', 'main', 'index.mustache'), 'utf-8')
  const html = mustache.render(mail, {
    message,
    logo: path.join('templates', 'main', 'images', 'itisFermi_white.svg'),
    css: path.join('templates', 'main', 'css', 'main.css')
  })
  const compile = util.promisify(juice.juiceResources)
  return compile(html, undefined)
}

module.exports = {
  main
}
