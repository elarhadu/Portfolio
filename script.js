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
const modal = document.querySelector('#modal');

const projectCard = [
  {
    id: 1,
    projectTitle: 'Project name goes here',
    description: 'project#0 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: 'imgs/prj-img-1.png',
    images: ['imgs/prj-img-1.png', 'imgs/prj-img-2.png', 'imgs/prj-img-3.png', 'imgs/prj-img-4.png'],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: 'https://elarhadu.github.io/Portfolio/',
    linkToSource: 'https://github.com/elarhadu/',
  },

  {
    id: 2,
    projectTitle: 'Project name goes here',
    description: 'project#1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: 'imgs/prj-img-2.png',
    images: ['imgs/prj-img-2.png', 'imgs/prj-img-1.png', 'imgs/prj-img-3.png', 'imgs/prj-img-6.png'],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: 'https://elarhadu.github.io/Portfolio/',
    linkToSource: 'https://github.com/elarhadu/',
  },

  {
    id: 3,
    projectTitle: 'Project name goes here',
    description: 'project#2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: 'imgs/prj-img-3.png',
    images: ['imgs/prj-img-1.png', 'imgs/prj-img-3.png', 'imgs/prj-img-4.png', 'imgs/prj-img-5.png'],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: 'https://elarhadu.github.io/Portfolio/',
    linkToSource: 'https://github.com/elarhadu/',
  },

  {
    id: 4,
    projectTitle: 'Project name goes here',
    description: 'project#3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: 'imgs/prj-img-4.png',
    images: ['imgs/prj-img-1.png', 'imgs/prj-img-2.png', 'imgs/prj-img-1.png'],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: 'https://elarhadu.github.io/Portfolio/',
    linkToSource: 'https://github.com/elarhadu/',
  },

  {
    id: 5,
    projectTitle: 'Project name goes here',
    description: 'project#4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: 'imgs/prj-img-5.png',
    images: ['imgs/prj-img-5.png', 'imgs/prj-img-2.png', 'imgs/prj-img-1.png', 'imgs/prj-img-1.png'],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: 'https://elarhadu.github.io/Portfolio/',
    linkToSource: 'https://github.com/elarhadu/',
  },

  {
    id: 6,
    projectTitle: 'Project name goes here',
    description: 'project#5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: 'imgs/prj-img-6.png',
    images: ['imgs/prj-img-1.png', 'imgs/prj-img-2.png', 'imgs/prj-img-1.png'],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: 'https://elarhadu.github.io/Portfolio/',
    linkToSource: 'https://github.com/elarhadu/',
  },
];

// eslint-disable-next-line no-return-assign
projectCard.map((card, index) => document
  .getElementById('Portfolio').innerHTML += ` 
  <div class="card" id='card-${index}'>
  <img src="${card.mainImage}" alt="card-img" />
  <div class="proj-content">
    <h3 id="card-title" tabindex="0">${card.projectTitle}</h3>
    <ul>
    ${card.technology.map((tech) => `<li class="text">${tech}</li>

    `).join('')}
    </ul>
    <div class="project-btn" tabindex="0">
      <a href="javascript:openModal(${index})" class="text-btn">See this project</a>
      <img src="imgs/Union.svg" class="img-btn" alt="right-arrow" />
      <img src="imgs/Union-mobil.png" class="img-btn-mob" alt="right-arrow" />
    </div>
  </div>
</div>
  `);

function openModal(num = null) {
  if (num != null) {
    const { technology } = projectCard[num];
    let technologyList = '';
    technology.forEach((listedItem) => {
      technologyList += `<li>${listedItem}</li>`;
    });

    const { images } = projectCard[num];
    let imagesList = '';
    images.forEach((listedImage) => {
      imagesList += `<img src="${listedImage}"></img>`;
    });

    document.getElementById('modal-project-name').innerHTML = projectCard[num].projectTitle;
    document.getElementById('modal-languages').innerHTML = technologyList;
    document.getElementById('Picture').src = projectCard[num].mainImage;
    document.querySelector('.modal-image-preview').innerHTML = imagesList;
    document.getElementById('project-live').href = projectCard[num].linkToLiveVersion;
    document.getElementById('modal-project-source').href = projectCard[num].linkToSource;

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
