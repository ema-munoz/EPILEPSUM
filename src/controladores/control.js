const index = {};

const baseDatosSQL = require("../ConfiguracionBaseDatos/basededatos.sql");

index.Controlador = (req, res)=>{
    res.render ("Control");
}

index.lista = async (req, res) => {
    const medicamentosId = req.params.id;
    const enlistar = await baseDatosSQL.query("SELECT * FROM medicaciones WHERE usuarioId = ?", [medicamentosId])
    res.render("Control", {enlistar})
}

module.exports = index;
