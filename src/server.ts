import express, { Express, Request, Response, NextFunction } from 'express';
import path from 'path';
import postsRouter from './PostsApp/postsRouter';
import commentsRouter from './routers/commentsRouter';
import userRouter from './UserApp/userRouter';


const app: Express = express();
const HOST: string = 'localhost';
const PORT: number = 8000;

// Устанавливаем настройки шаблонизатора
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

// Middleware для парсинга JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Подключаем статику
app.use('/static/', express.static(path.join(__dirname, 'static')));

// Подключаем маршруты
app.use('/posts/', postsRouter);
app.use('/comments/', commentsRouter);
app.use('/user/', userRouter); // Роуты для регистрации и авторизации

// Роут для страницы с текущей датой
app.get('/date', (req: Request, res: Response) => {
  const currentDate = new Date().toLocaleDateString();
  res.render('date', { currentDate });
});

// Главная страница
app.get('/', (req: Request, res: Response) => {
  res.render('index');
});

// Обработка ошибок
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Запуск сервера
app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
