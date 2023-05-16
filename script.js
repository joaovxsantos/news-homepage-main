const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('#menuIcon');
const closeIcon = document.querySelector('#close')

menuIcon.addEventListener('click', () => {
    menu.classList.add('active');
})

closeIcon.addEventListener('click', () => {
    menu.classList.remove('active');
})