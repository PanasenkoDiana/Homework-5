type Comment = {
    title: string;
    author: string;
    message: string;
  };
  
  const comments: Comment[] = [
    {
      title: 'Отличный совет!',
      author: 'Иван Иванов',
      message: 'Спасибо за советы! Я начну применять их в своей жизни.'
    },
    {
      title: 'Согласен с вами',
      author: 'Александр Петров',
      message: 'Утренние ритуалы действительно важны. Я тоже заметил, что это меняет мой день.'
    },
    {
      title: 'Цифровая детоксикация',
      author: 'Мария Смирнова',
      message: 'Полностью согласна. Я стараюсь отключаться от устройств на выходных.'
    },
    {
      title: 'Прокрастинация — это мой бич',
      author: 'Анна Кузнецова',
      message: 'Я постоянно прокрастинирую. Буду пробовать ваши советы!'
    },
    {
      title: 'Интересная статья!',
      author: 'Дмитрий Сергеев',
      message: 'Не знал о важности утренних ритуалов. Начну их внедрять.'
    },
    {
      title: 'Как насчет физической активности?',
      author: 'Ольга Алексеева',
      message: 'Физические упражнения по утрам очень помогают мне настроиться на рабочий лад.'
    }
  ];
  
  export function getAllComments(max: number): { comments: Comment[] } {
    const context = { comments };
  
    if (max <= comments.length) {
      context.comments = comments.slice(0, max);
    }
  
    return context;
  }
  