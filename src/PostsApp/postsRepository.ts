import client from '../client/prismaClient';
import { Prisma } from '@prisma/client';

async function getAllPosts() {
    try {
        let posts = await client.posts.findMany();
        return posts;
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            handlePrismaError(err);
        }
        throw err;
    }
}

async function getPostById(id: number) {
    try {
        let post = await client.posts.findUnique({
            where: {
                id: id
            }
        });
        return post;
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            handlePrismaError(err);
        }
        throw err;
    }
}

async function createPost(data: Prisma.PostsCreateInput) {
    try {
        let post = await client.posts.create({
            data: data
        });
        return post;
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            handlePrismaError(err);
        }
        throw err;
    }
}

function handlePrismaError(err: Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
        case 'P2002':
            console.log('Unique constraint failed on the field:', err.meta?.target);
            break;
        case 'P2015':
            console.log('Record not found:', err.message);
            break;
        case 'P2019':
            console.log('Input error in relation to the field:', err.meta?.target);
            break;
        default:
            console.log('Unexpected error:', err.message);
    }
}

const postRepository = {
    getAllPosts,
    getPostById,
    createPost
};

export default postRepository;
