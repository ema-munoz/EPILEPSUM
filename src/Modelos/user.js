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
        username: type.STRING(99),
        password: type.STRING,
        createdAt:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }) 
}

module.exports = usuario