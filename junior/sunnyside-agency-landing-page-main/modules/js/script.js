const btnMobile = document.getElementById('js-btn-mobile');

function toggleMenu() {
     const nav = document.getElementById('js-nav');
    
     nav.classList.toggle('active');
    
}

btnMobile.addEventListener('click', toggleMenu);
