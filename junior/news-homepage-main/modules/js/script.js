const btnMobile = document.querySelector('.btn-mobile');
const nav = document.querySelector('.nav');
const opacity = document.querySelector('.opacity');

function toggleMenu() {
     if (nav.classList.contains('active')) {
          nav.classList.remove('active');
          opacity.classList.remove('open')
          document.querySelector('.icon-menu').src = 'assets/images/icon-menu.svg';
          btnMobile.style.position = 'static';
     } else {
          nav.classList.add('active');
          opacity.classList.add('open');
          document.querySelector('.icon-menu').src = 'assets/images/icon-menu-close.svg';
          btnMobile.style.position = 'fixed';
          btnMobile.style.right = '20px';
     }
}

btnMobile.addEventListener('click', toggleMenu);