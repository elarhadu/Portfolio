/* eslint-disable linebreak-style */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.desktop-navigation');
const body = document.querySelector('body');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  header.classList.toggle('full-screen');
  body.classList.toggle('no-scroll');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  header.classList.remove('full-screen');
  body.classList.remove('no-scroll');
}));

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

const modal = document.querySelector('#modal');

// eslint-disable-next-line no-return-assign
projectCard.map((card, index) => document
  .getElementById('desktop-portfolio').innerHTML += `
    <article class="container2 desktop-project-1" id='card-${index}'>

        <img class="images img-${index}" src="${card.mainImage}" alt="A deccorative laptop background">
        <div class="description-container desc-container-${index}">
          <h3 class="project-name project-name-${index}">${card.projectTitle}</h3>
            <div id="language-container" class="language-container-${index}">
            ${card.technology.map((tech) => `
            <div class="languages">
              <div class="text">${tech}</div>
            </div>
            `)}
            </div>
          <div class="link-container see-more">
            <div class="see-this-project see-this-project-${index}">See this project</div>
            <div class="arrow modal-arrow-${index}"><a href="javascript:openModal(${index})">&#x2192</a></div>    
          </div>
        </div>
      </article>
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
    body.classList.add('no-scroll');
  }
}

function closeModal(index = null) {
  if (index != null) {
    modal.classList.remove('active');
    body.classList.remove('no-scroll');
  }
}

openModal();
closeModal();

// Form Validation With JavaScript
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const error = document.getElementById('error');
const username = document.querySelector('#user-name');
const message = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value !== email.value.toLowerCase() || email.value === '') {
    error.textContent = 'Please enter email in lower case';
    return;
  }

  form.submit();
});

// Local storage for form input

function storeData() {
  const formData = {
    username: username.value,
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
}

function getData() {
  if (!localStorage.getItem('formData')) {
    storeData();
  }

  const localData = JSON.parse(localStorage.getItem('formData'));
  username.setAttribute('value', localData.username);
  email.setAttribute('value', localData.email);
  message.textContent = localData.message;
}

getData();

username.addEventListener('change', storeData);
email.addEventListener('change', storeData);
message.addEventListener('change', storeData);
