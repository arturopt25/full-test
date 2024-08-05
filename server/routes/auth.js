const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { registerUser, loginUser, logoutUser } = require('../controllers/auth');

// Ruta para registrar un nuevo usuario
router.post(
  '/register',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'Por favor incluya un correo electrónico válido').isEmail(),
    check('password', 'Por favor ingrese una contraseña con 6 o más caracteres').isLength({ min: 6 })
  ],
  registerUser
);

// Ruta para iniciar sesión de un usuario
router.post(
  '/login',
  [
    check('email', 'Por favor incluya un correo electrónico válido').isEmail(),
    check('password', 'La contraseña es obligatoria').exists()
  ],
  loginUser
);

// Ruta para cerrar sesión de un usuario
router.post('/logout', logoutUser);

module.exports = router;

