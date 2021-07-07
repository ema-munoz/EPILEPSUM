const medicacion =(sequelize, type)=>{
    return sequelize.define('medicaciones',{
        id:{
            type:type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: type.STRING,
        dosis: type.INTEGER,
        hora: type.STRING,
        fechaInicio: type.STRING,
        fechaFinal: type.STRING
    })
}

module.exports = medicacion