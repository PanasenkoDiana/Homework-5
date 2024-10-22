import postRepository from './postsRepository';

type Post = {
    id: number;
    post: string;
    text: string;
  };
  
  const posts: Post[] = [
    {
      id: 1,
      post: 'Как справляться с прокрастинацией',
      text: 'Прокрастинация – проблема многих, но существуют эффективные методы её преодоления...'
    },
    {
      id: 2,
      post: 'Важность утренних ритуалов',
      text: 'Как начинается ваше утро? Важно не просто просыпаться, а закладывать основу для успешного дня...'
    },
    {
      id: 3,
      post: 'Цифровая детоксикация: стоит ли делать паузы?',
      text: 'В мире, где мы постоянно на связи, цифровая детоксикация становится актуальной как никогда...'
    }
  ];
  


async function getAllPosts() {
    return await postRepository.getAllPosts();
}

async function getPostById(id: number) {
    return await postRepository.getPostById(id);
}

async function createPost(data: { post: string, text: string }) {
    return await postRepository.createPost(data);
}

const postService = {
    getAllPosts,
    getPostById,
    createPost
};

export default postService;

  