import { Router } from 'express';
import { getAllComments } from '../controllers/commentsController';

const router: Router = Router();

router.get('/all', getAllComments);

export default router;
