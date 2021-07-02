const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const pool = require("../basededatos");
const helpers = require("./helpers");

passport.use(
    "local.signin",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
      },
      async (req, username, password, done) => {
        const rows = await pool.usuario.findOne({ where: {username: username}})
        if (rows) {
          const user = rows;
          const validPassword = await helpers.matchPassword(
            password,
            user.password
          );
          if (validPassword) {
            done(null, user, req.flash("success", "Bienvenido " + user.username));
          } else {
            done(null, false, req.flash("message", "Contraseña incorrecta"));
          }
        } else {
          return done(
            null,
            false,
            req.flash("message", "El nombre de usuario no existe.")
          );
        }
      }
    )
  );
  
passport.use(
    "local.signup",
    new LocalStrategy(
        {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
        },
        async (req, username, password, done) => {
        const { nombre, telefono, edad } = req.body;

        let newUser = {
            nombre,
            telefono,
            edad,
            username,
            password
        };

        newUser.password = await helpers.encryptPassword(password);
        // Saving in the Database
        const result = await pool.usuario.create(newUser)
        newUser.id = result.insertId;
        return done(null, newUser);
        }
    )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
