import { Request, Response } from 'express';
import * as commentsService from '../services/commentsService';

export function getAllComments(req: Request, res: Response): void {
  const maxComments = 10;
  const context = commentsService.getAllComments(maxComments);
  res.render('comments', context);
}
