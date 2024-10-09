const express = require('express');
const path = require('path');
const postsRouter = require('./routers/postsRouter')
const commentsRouter = require('./routers/commentsRouter')

const app = express();
const HOST = 'localhost';
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use(express.json());

app.use('/static/', express.static(path.join(__dirname, 'static')))

app.use('/posts/', postsRouter)
app.use('/comments/', commentsRouter)

app.get('/date', (req, res) => {
    res.render('date');
});

app.get('/', (req, res) => {
    res.render('index');
});


app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});
