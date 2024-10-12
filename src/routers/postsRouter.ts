import { Router } from 'express';
import { getAllPosts, getPostById, createPost } from '../controllers/postsController';

const router: Router = Router();

router.get('/all', getAllPosts);

router.get('/:id', getPostById);

router.post('/create', createPost);

export default router;
