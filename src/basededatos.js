const Sequelize = require('sequelize')

const sequelize = new Sequelize('Epilepsum', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

  module.exports = sequelize