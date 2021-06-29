const medico = (sequelize, type)=>{
    return sequelize.define('medicos',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: type.STRING,
        telefono: type.INTEGER,
        edad: type.STRING,
        username: type.STRING,
        password: type.STRING(150)
    })
}

module.exports = medico