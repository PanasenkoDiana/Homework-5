import { Request, Response } from 'express';
import * as postsService from '../services/postsService';

export function getAllPosts(req: Request, res: Response): void {
  const context = postsService.getAllPosts(10);
  res.render('posts', context);
}

export function getPostById(req: Request, res: Response): void {
  const id = parseInt(req.params.id, 10);
  const data = postsService.getPostById(id);
  if (id <= data.length) {
    res.render('post', data.context);
  } else {
    res.status(404).send('Post not found');
  }
}

export function createPost(req: Request, res: Response): void {
  const data = req.body;
  postsService.createPost(data);
  res.send('Post created');
}
