const btnOpen = document.getElementById('js_btn-open');
const btnClose = document.getElementById('js_btn-close');
function menuOpen() {
     document.getElementById('js_nav-mobile').style.width = '100%';
}
function menuClose() {
     document.getElementById('js_nav-mobile').style.width = '0%';
}
btnOpen.addEventListener('click', menuOpen);
btnClose.addEventListener('click', menuClose);