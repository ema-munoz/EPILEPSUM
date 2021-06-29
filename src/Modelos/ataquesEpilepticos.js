const ataquesEpilepticos = (sequelize, type)=>{
    return sequelize.define('ataquesEpilepticos',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dias: type.STRING,
        hora: type.STRING,
        duracion: type.STRING,
    })
}


module.exports = ataquesEpilepticos