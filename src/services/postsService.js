const posts = [
    {
        id: 1,
        post: 'Как справляться с прокрастинацией',
        text: 'Прокрастинация – проблема многих, но существуют эффективные методы её преодоления...'
    },
    {
        id: 2,
        post: 'Важность утренних ритуалов',
        text: 'Как начинается ваше утро? Важно не просто просыпаться, а закладывать основу для успешного дня...'
    },
    {
        id: 3,
        post: 'Цифровая детоксикация: стоит ли делать паузы?',
        text: 'В мире, где мы постоянно на связи, цифровая детоксикация становится актуальной как никогда...'
    }
];

function getAllPosts(max){
        
    const context = {
        posts: posts
    }
    if (max <= posts.length) {
        context.posts = posts.slice(0, max)
    }
    return context
}

function getPostById(id){
    const context = {
        post: posts[id-1]
    }
    
    return {
        context: context,
        length: posts.length
    }
}

function createPost(data){
    posts.push(data)
}


module.exports = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost
} 