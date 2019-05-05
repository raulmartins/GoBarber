const { User } = require('./../models')
class UserController {
  create (req, res) {
    res.render('auth/signup')
  }

  async store (req, res) {
    if (req.file) {
      const { filename: avatar } = req.file
      await User.create({ ...req.body, avatar })
      res.redirect('/')
    } else {
      req.flash('info', 'Please, insert your image')
      res.redirect('/signup')
    }
  }
}
module.exports = new UserController()
