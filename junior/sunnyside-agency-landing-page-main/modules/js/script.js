const btnMobile = document.getElementById('js-button-mobile');
const nav = document.getElementById('js-nav');

function toggleMenu() {
     nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);