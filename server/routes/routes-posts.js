const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/posts-controller');

//Route to get all posts
router.get('/', postCtrl.getAllPosts);
//Route to create post
router.post('/', postCtrl.createPost);
//Route to get one post
router.get('/:id', postCtrl.getOnePost);
//Route to edit post
router.put('/:id', postCtrl.editPost);
//Route to delete post
router.delete('/:id', postCtrl.deletePost);

module.exports = router;