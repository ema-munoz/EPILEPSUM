const medicamentos = {}

const baseDatosSQL = require("../ConfiguracionBaseDatos/basededatos.sql");
const baseDatosORM = require("../ConfiguracionBaseDatos/basededatos.orm");

medicamentos.mostrar = (req, res) => {
    res.render("Medicamentos/medicamentosAgregar");
}

medicamentos.agregar = async (req, res) => {
    const medicamentosId = req.params.id;
    const {nombre, dosis, hora, fechaInicio, fechaFinal} = req.body
    const nuevoMedicamento = {
        nombre,
        dosis,
        hora,
        fechaInicio, 
        fechaFinal,
        usuarioId: medicamentosId
    }
    await baseDatosORM.medicacion.create(nuevoMedicamento)
    req.flash ("sucess", "Medicamento Registrado.")
     res.redirect("/medicamentos/lista/" + medicamentosId);
}

medicamentos.lista = async (req, res) => {
    const medicamentosId = req.params.id;
    const enlistar = await baseDatosSQL.query("SELECT * FROM medicaciones WHERE usuarioId = ?", [medicamentosId])
    res.render("Medicamentos/medicamentosLista", {enlistar})
}

medicamentos.traerDatos = async(req, res) => {
    const medicamentosId = req.params.id;
    const enlistar = await baseDatosSQL.query ("SELECT * FROM medicaciones WHERE id = ?", [medicamentosId])
    res.render("Medicamentos/medicamentosEditar", {enlistar});
}

medicamentos.editar = async (req, res) => {
    const medicamentosId = req.params.id;
    const id = req.user.id
    const {nombre, dosis, hora, fechaInicio, fechaFinal} = req.body
    const actualizacion = {
        nombre,
        dosis,
        hora,
        fechaInicio, 
        fechaFinal
    }
    await baseDatosORM.medicacion.findOne({where: {id: medicamentosId}})
    .then( medicacion => {
        medicacion.update(actualizacion)
        req.flash ("sucess", "Medicamento actualizado.")
        res.redirect("/medicamentos/lista/" + id);
    })
}

medicamentos.eliminar = async (req, res) => {
    const medicamentosId = req.params.id;
    await baseDatosORM.medicacion.destroy({where: {usuarioId: medicamentosId}})
    res.render("Medicamentos/medicamentosLista")
}

module.exports = medicamentos
