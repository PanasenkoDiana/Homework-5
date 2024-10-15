import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function createOnePost() {
  const post = await prisma.posts.create({
    data: {
      post: 'Первый пост',
      text: 'Cодержимое первого поста',
    },
  });
  console.log('Создан один пост:', post);
}

async function createManyPosts() {
  const posts = await prisma.posts.createMany({
    data: [
      { post: 'Второй пост', text: 'Cодержимое второго поста' },
      { post: 'Третий пост', text: 'Cодержимое третьего поста' },
    ],
  });
  console.log('Созданы несколько постов:', posts);
}

async function updateOnePost(id: number) {
  const updatedPost = await prisma.posts.update({
    where: { id },
    data: { post: 'Обновленный заголовок поста' },
  });
  console.log('Пост обновлен:', updatedPost);
}

async function getOnePost(id: number) {
  const post = await prisma.posts.findUnique({
    where: { id },
  });
  console.log('Получен один пост:', post);
}

async function getManyPosts() {
  const posts = await prisma.posts.findMany();
  console.log('Получены несколько постов:', posts);
}

async function deleteOnePost(id: number) {
  const deletedPost = await prisma.posts.delete({
    where: { id },
  });
  console.log('Пост удален:', deletedPost);
}

async function main() {
  await createOnePost();
  await createManyPosts(); 
  await updateOnePost(1); 
  await getOnePost(1);
  await getManyPosts(); 
  await deleteOnePost(1); 
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
