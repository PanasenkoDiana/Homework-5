import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function createOneComment(postId: number) {
  const comment = await prisma.Comments.create({
    data: {
      title: 'Первый комментарий',
      author: 'Автор 1',
      message: 'Текст первого комментария',
      postId: postId,
    },
  });
  console.log('Создан один комментарий:', comment);
}

async function createManyComments(postId: number) {
  const comments = await prisma.Comments.createMany({
    data: [
      { title: 'Второй комментарий', author: 'Автор 2', message: 'Текст второго комментария', postId: postId },
      { title: 'Третий комментарий', author: 'Автор 3', message: 'Текст третьего комментария', postId: postId },
    ],
  });
  console.log('Созданы несколько комментариев:', comments);
}

async function deleteOneComment(id: number) {
  const deletedComment = await prisma.Comments.delete({
    where: { id },
  });
  console.log('Комментарий удален:', deletedComment);
}

async function getOneComment(id: number) {
  const comment = await prisma.Comments.findUnique({
    where: { id },
  });
  console.log('Получен один комментарий:', comment);
}

async function getOneCommentWithPost(id: number) {
  const comment = await prisma.Comments.findUnique({
    where: { id },
    include: { post: true },
  });
  console.log('Комментарий с постом:', comment);
}

async function getPostWithComments(id: number) {
  const post = await prisma.Posts.findUnique({
    where: { id },
    include: { comments: true },
  });
  console.log('Пост с комментариями:', post);
}

async function updateOneComment(id: number) {
  const updatedComment = await prisma.Comments.update({
    where: { id },
    data: { message: 'Обновленный текст комментария' },
  });
  console.log('Комментарий обновлен:', updatedComment);
}

async function main() {
  const post = await prisma.Posts.create({
    data: {
      post: 'Пост для комментариев',
      text: 'Текст поста для проверки связей с комментариями',
    },
  });

  await createOneComment(post.id);
  await createManyComments(post.id);
  await getOneComment(1);
  await getOneCommentWithPost(1);
  await getPostWithComments(post.id);
  await updateOneComment(1);
  await deleteOneComment(1);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
