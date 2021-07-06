module.exports = {
    Ingreso (req, res, next){
        if (req.isAuthenticated())          
        return next()
         res.redirect('/Inicio/');
    }
}

