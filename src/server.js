const express = require('express');
const path = require('path');

const app = express();
const HOST = 'localhost';
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use(express.json());

app.use('/static/', express.static(path.join(__dirname, 'static')));

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

app.get('/posts', (req, res) => {
    const context = {
        posts: posts
    };
    res.render('posts', context);
});

app.get('/posts/post/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        return res.render('post_not_found', { id: id });
    }

    res.render('post', { post });
});


app.post('/product/create', (req, res) => {
    const data = req.body
    console.log(data)
    products.push(data)
    res.send('okay');
})


app.get('/', (req, res) => {
    res.render('index');
});


app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});
