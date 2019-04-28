const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'
  }

  middlewares () {
    this.express.use(express.urlenconded({ extended: false }))
  }

  views () {
    nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      watch: this.isDev,
      express: this.express,
      autoescape: true
    })
    this.express.set('view engine', 'nunjucks')
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
