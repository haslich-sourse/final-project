
console.log('Скрипт загружен');

const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Hover effect on projects
document.querySelectorAll('.project').forEach((project) => {
    project.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#f9f9f9';
    });

    project.addEventListener('mouseout', function () {
        this.style.backgroundColor = '#fff';
    });
});
