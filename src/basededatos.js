const Sequelize = require('sequelize')
const usuarioModelo = require('./Modelos/user')
const medicacionUsuario = require('./Modelos/medicacion')
const ataques = require('./Modelos/ataquesEpilepticos')
const medicos = require('./Modelos/medico')
const contactosEmergencia = require('./Modelos/contactosEmergencia')


const sequelize = new Sequelize(
  'epilepsum', 
  'root', 
  '', 
  {
  host: 'localhost',
  dialect: 'mysql',
  pool:{
    max:5,
    min:0,
    require:30000,
    idle: 10000
   }
  }
)

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

  sequelize.sync({ force: false})
  .then(() =>{
    console.log("Tablas sincronizadas")
  })

  const usuario = usuarioModelo(sequelize, Sequelize)
  const medicacion = medicacionUsuario(sequelize, Sequelize)
  const ataque = ataques(sequelize, Sequelize)
  const medico = medicos(sequelize, Sequelize)
  const contactosDeEmergencia = contactosEmergencia(sequelize, Sequelize)


  module.exports = {
    usuario,
    medicacion,
    ataque,
    medico,
    contactosDeEmergencia
  }

  