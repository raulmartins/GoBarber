const { User, Appointment } = require('../models')
class AppointmentController {
  async create (req, res) {
    const { provider: id } = req.params
    const provider = await User.findByPk(id)
    res.render('appointments/create', { provider })
  }

  async store (req, res) {
    const { id } = req.session.user
    const { provider } = req.params
    const { date } = req.body

    await Appointment.create({
      user_id: id,
      provider_id: provider,
      date
    })
    res.redirect('/app/dashboard')
  }
}

module.exports = new AppointmentController()
