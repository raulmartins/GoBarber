const { User } = require('./../models')
class UserController {
  create (req, res) {
    res.render('auth/signup')
  }

  async store (req, res) {
    // const { filename } = req.file
    console.log(req.file)

    // await User.create({ ...req.body, avatar })

    res.redirect('/')
  }
}
module.exports = new UserController()
