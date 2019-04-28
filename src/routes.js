const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
  console.log('entrou')
  return res.send('teste')
})

module.exports = routes
