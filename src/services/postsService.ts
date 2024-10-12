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
  
  export function getAllPosts(max: number): { posts: Post[] } {
    const context = { posts };
    if (max <= posts.length) {
      context.posts = posts.slice(0, max);
    }
    return context;
  }
  
  export function getPostById(id: number): { context: { post: Post }, length: number } {
    const context = { post: posts[id - 1] };
    return { context, length: posts.length };
  }
  
  export function createPost(data: Post): void {
    posts.push(data);
  }
  