const { User } = require('../models')
class AppointmentController {
  async create (req, res) {
    const { provider: id } = req.params
    const provider = await User.findByPk(id)
    console.log(provider)
    res.render('appointments/create', { provider })
  }
}

module.exports = new AppointmentController()
