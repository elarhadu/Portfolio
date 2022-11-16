/* eslint-disable linebreak-style */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));


// <!-- Modal View section  -->

const modalView=[
  {
    projectTitle: 'Project #0',
    description: 'project#0 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: 'imgs/imgs/prj-img-1.png',
    images: ["imgs/prj-img-1.png","imgs/prj-img-2.png","imgs/prj-img-3.png","imgs/prj-img-4.png"],
    Technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: 'https://elarhadu.github.io/Portfolio/',
    linkToSource: 'https://github.com/elarhadu/',
  },

  {
    projectTitle: 'Project #1',
    description: 'project#1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: "imgs/prj-img-2.png",
    images: ["imgs/prj-img-2.png","imgs/prj-img-1.png","imgs/prj-img-3.png","imgs/prj-img-6.png"],
    Technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: 'https://elarhadu.github.io/Portfolio/',
    linkToSource: 'https://github.com/elarhadu/',
  },

  {
    projectTitle: 'Project #2',
    description: 'project#2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: "imgs/prj-img-3.png",
    images: ["imgs/prj-img-1.png","imgs/prj-img-3.png","imgs/prj-img-4.png","imgs/prj-img-5.png"],
    Technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: 'https://elarhadu.github.io/Portfolio/',
    linkToSource: 'https://github.com/elarhadu/',
  },

  {
    projectTitle: 'Project #3',
    description: 'project#3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: "imgs/prj-img-4.png",
    images: ["imgs/prj-img-1.png","imgs/prj-img-2.png","imgs/prj-img-1.png",],
    Technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: 'https://elarhadu.github.io/Portfolio/',
    linkToSource: 'https://github.com/elarhadu/',
  },

  {
    projectTitle: 'Project #4',
    description: 'project#4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: "imgs/prj-img-5.png",
    images: ["imgs/prj-img-5.png","imgs/prj-img-2.png","imgs/prj-img-1.png","imgs/prj-img-1.png"],
    Technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: 'https://elarhadu.github.io/Portfolio/',
    linkToSource: 'https://github.com/elarhadu/',
  },

  {
    projectTitle: 'Project #5',
    description: 'project#5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: "imgs/prj-img-6.png",
    images: ["imgs/prj-img-1.png","imgs/prj-img-2.png","imgs/prj-img-1.png",],
    Technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: 'https://elarhadu.github.io/Portfolio/',
    linkToSource: 'https://github.com/elarhadu/',
  },
]


