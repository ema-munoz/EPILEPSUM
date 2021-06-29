const medicacion =(sequelize, type)=>{
    return sequelize.define('medicaciones',{
        id:{
            type:type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: type.STRING,
        dias: type.STRING,
        hora: type.STRING,
        medicamento: type.INTEGER
    })
}

module.exports = medicacion