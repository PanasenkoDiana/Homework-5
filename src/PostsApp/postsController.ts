import { Request, Response } from 'express';
import postService from './postsService';

async function getAllPosts(req: Request, res: Response) {
    try {
        const posts = await postService.getAllPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving posts' });
    }
}

async function getPostById(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        const post = await postService.getPostById(id);
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving post' });
    }
}

async function createPost(req: Request, res: Response) {
    try {
        const { post, text } = req.body;
        const newPost = await postService.createPost({ post, text });
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Error creating post' });
    }
}

export default {
    getAllPosts,
    getPostById,
    createPost
};
