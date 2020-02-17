const express = require('express');
const router = require('express').Router();
const Post = require('../models/post.js');




// GET all Tasks
router.get('/', async (req, res) => {
  const tasks = await Post.find();
  res.json(tasks);
});




// GET all Tasks
router.get('/:id', async (req, res) => {
  const task = await Post.findById(req.params.id);
  res.json(task);
});



// ADD a new task
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const post = new Post ({ title, description });
 console.log(post)
 await post.save();
  res.json({status: 'Task Saved'});
});


router.delete('/:id', async (req, res) => {
  await Post.findByIdAndRemove(req.params.id);
  res.json({status: 'Task Deleted'});
});

module.exports = router;