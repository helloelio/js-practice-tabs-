const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const tabs = document.querySelector('.tabs');
const tabList = document.querySelector('.tablist');
const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

const js = document.querySelector('#js');
const ruby = document.querySelector('#ruby');
const php = document.querySelector('#php');

let etude = document.querySelector('.etude');
let portret = document.querySelector('.portret');
let sketch = document.querySelector('.sketches');

for (let i = 1; i < 10; i++) {
  let etudeItem = document.createElement('div');
  etudeItem.classList.add('gallery__item');
  let etudeImg = document.createElement('img');
  etudeImg.classList.add('image');
  etudeImg.src = './tabs-img/work-test.jpg';
  etudeImg.alt = `etude ${i} | 120x140 | 10000$`;
  etudeItem.appendChild(etudeImg);
  etude.appendChild(etudeItem);
  //
  let portretItem = document.createElement('div');
  portretItem.classList.add('gallery__item');
  let portretImg = document.createElement('img');
  portretImg.classList.add('image');
  portretImg.src = './tabs-img/portret.jpg';
  portretImg.alt = `portret ${i} | 60x80 | 12000$`;
  portretItem.appendChild(portretImg);
  portret.appendChild(portretItem);
  //
  let sketchItem = document.createElement('div');
  sketchItem.classList.add('gallery__item');
  let sketchImg = document.createElement('img');
  sketchImg.classList.add('image');
  sketchImg.src = './tabs-img/sketch.jpg';
  sketchImg.alt = `sketch ${i} | 60x80 | 12000$`;
  sketchItem.appendChild(sketchImg);
  sketch.appendChild(sketchItem);
}

let handleTabClick = (event) => {
  // hide all tab panels
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  // mark all tabs as unselected
  tabButtons.forEach((tab) => {
    // tab.ariaSelected = false;
    tab.setAttribute('selected', false);
  });
  event.currentTarget.setAttribute('selected', true);
  const { id } = event.currentTarget;
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  let arr = [js, ruby, php];
  for (let i = 0; i < arr.length; i++) {
    if (arr[0].attributes.selected.nodeValue == 'true') {
      body.classList.add('yellow');
      body.classList.remove('red');
      body.classList.remove('blue');
    } else if (arr[1].attributes.selected.nodeValue == 'true') {
      body.classList.add('red');
      body.classList.remove('yellow');
      body.classList.remove('blue');
    } else if (arr[2].attributes.selected.nodeValue == 'true') {
      body.classList.add('blue');
      body.classList.remove('red');
      body.classList.remove('yellow');
    }
  }
  tabPanel.hidden = false;
};
tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', handleTabClick);
});
const images = document.querySelectorAll('.image');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const modalImg = document.querySelector('.modal-img');
const desc = document.querySelector('.alt');

images.forEach((img) => {
  const alt = img.alt;
  img.addEventListener('click', () => {
    body.classList.add('scroll-disable');
    modal.style.display = ' flex';
    modalImg.src = img.src;
    modalImg.style.animation = 'fromHide .3s';
    desc.innerHTML = alt;
  });
});
let closeModal = () => {
  modal.style.display = 'none';
  body.classList.remove('scroll-disable');
};
closeBtn.addEventListener('click', closeModal);

//
let $ERROR_WINDOW = document.querySelector('.error-window');
let $ERROR_BUTTON = document.querySelector('.error-button');
let $ERROR = document.querySelector('.error-title');
let checkWord = 'love';

let checkAdmin = () => {
  const isAdmin = prompt('Password');
  let showAdminBar = () => {
    if (isAdmin == null) {
      wrapper.style.display = 'none';
      $ERROR_WINDOW.style.display = 'flex';
      $ERROR_WINDOW.style.flexDirection = 'column';
      $ERROR.textContent = 'THIS WRONG PASSWORD';
      $ERROR.style.color = 'red';
      //
      $ERROR_BUTTON.textContent = 'TRY AGAIN';
      $ERROR.classList.add('error');
    }
    if (isAdmin != null && isAdmin.toUpperCase() == checkWord.toUpperCase()) {
      alert('LOVE U TOO');
      wrapper.style.display = 'block';
      $ERROR_WINDOW.style.display = 'none';
    } else {
      wrapper.style.display = 'none';
      $ERROR_WINDOW.style.display = 'flex';
      $ERROR_WINDOW.style.flexDirection = 'column';
      $ERROR.textContent = 'THIS WRONG PASSWORD';
      $ERROR.style.color = 'red';
      //
      $ERROR_BUTTON.textContent = 'TRY AGAIN';
      $ERROR.classList.add('error');
    }
  };
  return showAdminBar();
};
checkAdmin();
$ERROR_BUTTON.addEventListener('click', checkAdmin);
