const mustache = require('mustache')
const fs = require('fs')
const path = require('path')
const util = require('util')
const inliner = require('web-resource-inliner')

const main = async (message) => {
  const template = fs.readFileSync(path.join(__dirname, 'templates', 'main', 'index.mustache'), 'utf-8')

  const html = mustache.render(template, {
    message
  })

  const render = util.promisify(inliner.html)

  return render({
    fileContent: html,
    svgs: true,
    images: true,
    links: true,
    relativeTo: path.join(__dirname, '/templates/main/')
  })
}

module.exports = {
  main
}
