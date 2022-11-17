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
  { id : 1,
    projectTitle: 'Project #0',
    description: 'project#0 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: 'imgs/imgs/prj-img-1.png',
    images: ["imgs/prj-img-1.png","imgs/prj-img-2.png","imgs/prj-img-3.png","imgs/prj-img-4.png"],
    Technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: 'https://elarhadu.github.io/Portfolio/',
    linkToSource: 'https://github.com/elarhadu/',
  },

  { id : 2,
    projectTitle: 'Project #1',
    description: 'project#1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: "imgs/prj-img-2.png",
    images: ["imgs/prj-img-2.png","imgs/prj-img-1.png","imgs/prj-img-3.png","imgs/prj-img-6.png"],
    Technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: 'https://elarhadu.github.io/Portfolio/',
    linkToSource: 'https://github.com/elarhadu/',
  },

  { id : 3,
    projectTitle: 'Project #2',
    description: 'project#2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: "imgs/prj-img-3.png",
    images: ["imgs/prj-img-1.png","imgs/prj-img-3.png","imgs/prj-img-4.png","imgs/prj-img-5.png"],
    Technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: 'https://elarhadu.github.io/Portfolio/',
    linkToSource: 'https://github.com/elarhadu/',
  },

  { id : 4,
    projectTitle: 'Project #3',
    description: 'project#3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: "imgs/prj-img-4.png",
    images: ["imgs/prj-img-1.png","imgs/prj-img-2.png","imgs/prj-img-1.png",],
    Technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: 'https://elarhadu.github.io/Portfolio/',
    linkToSource: 'https://github.com/elarhadu/',
  },

  { id : 5,
    projectTitle: 'Project #4',
    description: 'project#4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: "imgs/prj-img-5.png",
    images: ["imgs/prj-img-5.png","imgs/prj-img-2.png","imgs/prj-img-1.png","imgs/prj-img-1.png"],
    Technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: 'https://elarhadu.github.io/Portfolio/',
    linkToSource: 'https://github.com/elarhadu/',
  },

  { id : 6,
    projectTitle: 'Project #5',
    description: 'project#5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: "imgs/prj-img-6.png",
    images: ["imgs/prj-img-1.png","imgs/prj-img-2.png","imgs/prj-img-1.png",],
    Technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: 'https://elarhadu.github.io/Portfolio/',
    linkToSource: 'https://github.com/elarhadu/',
  },
]

const modal = document.querySelector('#modal');

function openModal(num = null) {
  if (num != null) {
    const { technology } = modalView[num];
    let technologyList = '';
    technology.forEach((listedItem) => {
      console.log("hahahaha")
      technologyList += `<li>${listedItem}</li>`;
    });

    const { images } = modalView[num];
    let imagesList = '';
    images.forEach((listedImage) => {
      imagesList += `<img src="${listedImage}"></img>`;
    });

    document.getElementById('modal-project-name').innerHTML = modalView[num].projectTitle;
    document.getElementById('modal-languages').innerHTML = technologyList;
    document.getElementById('Picture').src = modalView[num].mainImage;
    document.querySelector('.modal-image-preview').innerHTML = imagesList;
    document.getElementById('project-live').href = modalView[num].linkToLiveVersion;
    document.getElementById('modal-project-source').href = modalView[num].linkToSource;

    modal.classList.add('active');
  }
}

function closeModal(index = null) {
  if (index != null) {
    modal.classList.remove('active');
  }
}

openModal();
closeModal();

