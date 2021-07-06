const auth = {};

const passport = require("passport");

auth.vista = (req, res)=>{
    res.render("Registro");
}

auth.registro = passport.authenticate ("local.signup", {
    successRedirect: "/Inicio/",
    failureRedirect: "/Registro",
    failureFlash: true

})

auth.vistaLogin = (req, res)=>{
    res.render("Login");
}

auth.login = passport.authenticate ("local.signin", {
    successRedirect: "/Inicio/",
    failureRedirect: "/Login",
    failureFlash: true
})

auth.logout = (req, res, next)=>{
    req.logOut ()
    res.redirect('/');
}

module.exports = auth;