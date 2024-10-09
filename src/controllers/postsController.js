const postsService = require('../services/postsService')

function getAllPosts(req, res) {
    const context = postsService.getAllPosts()
    res.render('posts', context)
}

function getPostById(req, res){
    console.log(req.params.id)
    const id = req.params.id
    const data = postsService.getPostById(id)
    if (id <= data.length){
        res.render('post', data.context)
    } else{
        res.send("ban")
    }
}

function createPost(req, res){
    const data = req.body
    console.log(data)
    postsService.createPost(data);
    res.send('okay');

}

module.exports = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost
}