class UserController {
  create (req, res) {
    res.render('auth/signup')
  }
}
module.exports = new UserController()
