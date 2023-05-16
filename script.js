const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('#menuIcon');
const closeIcon = document.querySelector('#close')
const main = document.querySelector('main');

menuIcon.addEventListener('click', () => {
    menu.classList.add('active');
    main.style = 'filter: grayscale(80%);'
})

closeIcon.addEventListener('click', () => {
    menu.classList.remove('active');
    main.style = 'filter: none;'
})