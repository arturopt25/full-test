// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

// Cargar variables de entorno
dotenv.config();


// Conectar a la base de datos
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error(err));

// Inicializar la aplicación
const app = express();

// Sessions
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }));

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));

// Configuración de Passport
require('./config/passport')(passport);

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
