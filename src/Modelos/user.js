const usuario = (sequelize, type)=>{
    return sequelize.define('usuario',{
        id:{
            type:type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: type.STRING,
        telefono: type.INTEGER,
        edad: type.INTEGER,
        username: type.STRING,
        password: type.STRING(150)
    }) 
}

module.exports = usuario