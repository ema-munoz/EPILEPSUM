const contactosEmergencia = {}

const baseDatos = require("../basededatos");

contactosEmergencia.mostrar = (req, res) => {
    res.render("/ContactosEmergencias/contatosAgregar");
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
    await baseDatos.contactosDeEmergencia.create(nuevoAgregamiento)
    req.flash ("success", "Datos Guardados...")
    res.redirect("/contactos/lista/", contactosEmergenciaId);    
}

contactosEmergencia.lista = async (req, res) => {
    const enlistar = await baseDatos.contactosDeEmergencia.findAll()
    res.render("/ContactosEmergencias/contactosLista", {enlistar});
}

contactosEmergencia.listar = async (req, res) => {
    const contactosEmergenciaId = req.params.id;
    const enlistar = await baseDatos.contactosDeEmergencia.findOne({where: {usuarioId: contactosEmergenciaId}})
    res.render("Página_Principal", {enlistar});
}

contactosEmergencia.traerDatos = async (req, res) => {
    const contactosEmergenciaId = req.params.id;
    const enlistar = await baseDatos.contactosDeEmergencia.findOne({where: {usuarioId: contactosEmergenciaId}})
    res.render("/ContactosEmergencias/contactosEditar", {enlistar});
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
    await baseDatos.contactosDeEmergencia.findOne({where: {usuarioId: contactosEmergenciaId}})
    .then(contactos => {
        contactos.update(actualizacion)
    })
    req.flash ("success", "Datos Actulizados...")
    res.redirect("/contactos/lista/", contactosEmergenciaId);    
}

contactosEmergencia.eliminar = async (req, res) => {
    const contactosEmergenciaId = req.params.id;
    await baseDatos.contactosDeEmergencia.destroy({where: {usuarioId: contactosEmergenciaId}})
    res.render("/ContactosEmergencias/contactosLista");
}

module.exports = contactosEmergencia