const express = require('express')
const router = express.Router()
const commentsController = require('../controllers/commentsController')

router.get('/all', commentsController.getAllComments)

module.exports = router