import express, { Express, Request, Response } from 'express';
import path from 'path';
import postsRouter from './PostsApp/postsRouter';
import commentsRouter from './routers/commentsRouter';

const app: Express = express();
const HOST: string = 'localhost';
const PORT: number = 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use(express.json());

app.use('/static/', express.static(path.join(__dirname, 'static')));

app.use('/posts/', postsRouter);
app.use('/comments/', commentsRouter);

app.get('/date', (req: Request, res: Response) => {
  res.render('date');
});

app.get('/', (req: Request, res: Response) => {
  res.render('index');
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
