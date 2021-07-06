const contactosEmergencia = (sequelize, type) => {
    return sequelize.define ("contactosEmergencia", {
        id: {
            type: type.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },

        nombre: type.STRING,
        familiar: type.STRING,
        telefono: type.INTEGER,
        celular: type.INTEGER,
        createdAt:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    })
};

module.exports = contactosEmergencia;
