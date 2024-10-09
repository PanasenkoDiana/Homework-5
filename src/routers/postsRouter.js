const express = require('express')
const router = express.Router()
const postsController = require('../controllers/postsController')

router.get('/all', postsController.getAllPosts)

router.get('/:id', postsController.getPostById)

router.post('/create', postsController.createPost)


module.exports = router