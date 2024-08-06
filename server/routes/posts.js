// server/routes/posts.js
const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware/auth');
const BlogPost = require('../models/BlogPost');
const User = require('../models/User'); 


// Obtener todos los posts
router.get('/', async (req, res) => {
  const { page = 1, limit = 7 } = req.query; // Valores por defecto para página y límite

  try {
    const posts = await BlogPost.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await BlogPost.countDocuments();

    res.json({
      posts,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page),
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Error al obtener los posts' });
  }
});

// Crear un nuevo post
router.post('/', ensureAuthenticated, async (req, res) => {
  const { title, content } = req.body;

  try {
    // Verifica si el usuario está autenticado
    if (!req.user) {
      return res.status(401).json({ msg: 'No autorizado' });
    }

    const user = await User.findById(req.user.id).select('name');
    if (!user) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }
    
    // Crea el nuevo post
    const newPost = new BlogPost({
      title,
      content,
      author: user.name
    });

    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Error al crear el post' });
  }
});

// Actualizar un post
router.put('/:id', ensureAuthenticated, async (req, res) => {
  try {
    const post = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(post);
  } catch (err) {
    res.status(500).json({ msg: 'Error al actualizar el post' });
  }
});

// Eliminar un post
router.delete('/:id', ensureAuthenticated, async (req, res) => {
  try {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Post eliminado' });
  } catch (err) {
    res.status(500).json({ msg: 'Error al eliminar el post' });
  }
});

module.exports = router;
