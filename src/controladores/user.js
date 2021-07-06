const user = {};

const baseDatosSQL = require("../ConfiguracionBaseDatos/basededatos.sql");

user.principal = (req, res)=>{
    res.render ("Página_Principal");
}

user.listar = async (req, res) => {
    const enlistar = await baseDatosSQL.query("SELECT * FROM contactosEmergencia WHERE id = ?",[req.user.id])
    res.render("Página_Principal", {enlistar});
}

module.exports = user;