const contactosEmergencia = {}

const baseDatosSQL = require("../ConfiguracionBaseDatos/basededatos.sql");
const baseDatosORM = require("../ConfiguracionBaseDatos/basededatos.orm");

contactosEmergencia.mostrar = (req, res) => {
    res.render("ContactosEmergencias/contatosAgregar");
}

contactosEmergencia.agregar = async (req, res) => {
    const contactosEmergenciaId = req.params.id;
    const {nombre, familiar, telefono, celular} = req.body
    const nuevoAgregamiento = {
        nombre, 
        familiar, 
        telefono, 
        celular,
        usuarioId: contactosEmergenciaId
    }
    await baseDatosORM.contactosDeEmergencia.create(nuevoAgregamiento)
    req.flash ("success", "Datos Guardados...")
    res.redirect("/contactos/lista/" + contactosEmergenciaId);    
}

contactosEmergencia.lista = async (req, res) => {
    const contactosEmergenciaId = req.params.id;
    const enlistar = await baseDatosSQL.query("SELECT * FROM contactosEmergencia WHERE usuarioId = ?",[contactosEmergenciaId])
    res.render("ContactosEmergencias/contactosLista", {enlistar});
}

contactosEmergencia.traerDatos = async (req, res) => {
    const contactosEmergenciaId = req.params.id;
    const enlistar = await baseDatosSQL.query("SELECT * FROM contactosEmergencia WHERE id = ?",[contactosEmergenciaId])
    res.render("ContactosEmergencias/contactosEditar", {enlistar});
}

contactosEmergencia.editar = async (req, res) => {
    const contactosEmergenciaId = req.params.id;
    const {nombre, familiar, telefono, celular} = req.body
    const actualizacion = {
        nombre, 
        familiar, 
        telefono, 
        celular
    }
    await baseDatosORM.contactosDeEmergencia.findOne({where: {usuarioId: contactosEmergenciaId}})
    .then(contactos => {
        contactos.update(actualizacion)
    })
    req.flash ("success", "Datos Actulizados...")
    res.redirect("/contactos/lista/", contactosEmergenciaId);    
}

contactosEmergencia.eliminar = async (req, res) => {
    const contactosEmergenciaId = req.params.id;
    await baseDatosORM.contactosDeEmergencia.destroy({where: {usuarioId: contactosEmergenciaId}})
    res.render("/ContactosEmergencias/contactosLista");
}

module.exports = contactosEmergencia