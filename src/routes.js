const express = require('express')
const routes = express.Router()
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)
const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const AuthMiddleware = require('./app/middlewares/auth')
const GuestMiddleware = require('./app/middlewares/guest')

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success')
  res.locals.flashError = req.flash('error')
  res.locals.flashInfo = req.flash('info')
  return next()
})
routes.get('/', GuestMiddleware, SessionController.create)
routes.post('/signin', SessionController.store)
routes.get('/signup', GuestMiddleware, UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)

routes.use('/app', AuthMiddleware)

routes.get('/app/dashboard', (req, res) => {
  console.log('session', req.session.user)
  res.render('dashboard')
})

routes.get('/app/logout', SessionController.destroy)
module.exports = routes
