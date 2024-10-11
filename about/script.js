
console.log('Скрипт загружен');

const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});
// Получаем элементы секций
const sections = document.querySelectorAll('.about-container section h2');

// Добавляем событие клика на заголовки секций
sections.forEach(section => {
    section.addEventListener('click', function () {
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
