// Бургер-меню

const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});


const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

// Функция для установки размера canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}


canvas.style.position = 'absolute';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '-1'; // Задаем canvas позицию на заднем плане

const stars = [];

// Функция для создания звезд
function createStars() {
    stars.length = 0; // Очищаем массив звезд при изменении размера
    for (let i = 0; i < 100; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 5,
            speed: Math.random() * 0.5 + 0.5
        });
    }
}


function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = '#000';
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) {
            star.y = 0;
        }
    });

    requestAnimationFrame(drawStars);
}

// Слушаем событие изменения размера окна и обновляем canvas и звезды
window.addEventListener('resize', () => {
    resizeCanvas();
    createStars();
});

// Инициализация размеров и звезд
resizeCanvas();
createStars();
drawStars();

const shapes = document.querySelectorAll('.circle, .triangle, .square');

shapes.forEach(shape => {
    shape.addEventListener('mouseenter', () => {
        shape.style.transform = 'scale(1.1)';
        shape.style.transition = 'transform 0.3s ease';
    });

    shape.addEventListener('mouseleave', () => {
        shape.style.transform = 'scale(1)';
    });
});