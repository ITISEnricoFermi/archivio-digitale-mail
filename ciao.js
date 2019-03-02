const { main } = require('./index.js')

main('Hey come va?')
  .then(html => {
    console.log(html)
  })
