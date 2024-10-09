const commentsService = require('../services/commentsService')

function getAllComments(req, res) {
    const context = commentsService.getAllComments()
    res.render('comments', context)
}

module.exports = {
    getAllComments,
}