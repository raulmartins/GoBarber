module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'docker',
  password: 'docker',
  database: 'gobarber',
  operatorAliases: false,
  difine: {
    timestemp: true,
    underscored: true,
    underscoredAll: true
  }
}
