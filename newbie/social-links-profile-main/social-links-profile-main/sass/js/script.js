const body = document.querySelector('body');
const btnMode = document.getElementById('js-btn-mode');
const icon = document.getElementById('js-icon');

function store(value) {
     localStorage.setItem('light-mode', value);
}
function load() {
     const lightMode = localStorage.getItem('light-mode');

     if (!lightMode) {
          store(false);
          icon.classList.add('fa-moon')
     } else if (lightMode == 'true') {
          body.classList.add('light-mode');
          icon.classList.add('fa-sun')
     } else if (lightMode == 'false') {
          icon.classList.add('fa-moon');
     }
}
load();

function mode() {
     body.classList.toggle('light-mode');

     store(body.classList.contains('light-mode'));

     if (body.classList.contains('light-mode')) {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');

     } else {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
     }
}

btnMode.addEventListener('click', mode);