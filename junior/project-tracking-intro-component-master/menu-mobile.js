const btnMenu = document.getElementById('js_btn-menu');
const navBar = document.getElementById('js_navbar');

function menu() {
     if (navBar.classList.contains('active')) {
          navBar.classList.remove('active'); 
          document.getElementById('js_icon-menu').src = 'images/icon-hamburger.svg';
     } else {
          navBar.classList.add('active');
          document.getElementById('js_icon-menu').src = 'images/icon-close.svg';
     }
}

btnMenu.addEventListener('click', menu);