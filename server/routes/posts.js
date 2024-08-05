// server/routes/posts.js
const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware/auth');

// Cargar el modelo de post
const BlogPost = require('../models/BlogPost');

// Obtener todos los posts
router.get('/', async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ msg: 'Error al obtener los posts' });
  }
});

// Crear un nuevo post
router.post('/', ensureAuthenticated, async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const newPost = new BlogPost({ title, content, author });
    const post = await newPost.save();
    res.json(post);
  } catch (err) {
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
