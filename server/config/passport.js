// server/config/passport.js
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Cargar el modelo de usuario
const User = mongoose.model('User');

module.exports = passport => {
  passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    // Buscar usuario por email
    User.findOne({ email: email })
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'No se encontró el usuario' });
        }

        // Comparar la contraseña
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Contraseña incorrecta' });
          }
        });
      })
      .catch(err => console.error(err));
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
