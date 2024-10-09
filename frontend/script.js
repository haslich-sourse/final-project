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


const texts = document.querySelectorAll('.geometric-layout p');

texts.forEach((text, index) => {
    const words = text.innerHTML.split(' ');
    text.innerHTML = ''; // Очищаем текст

    words.forEach((word, i) => {
        setTimeout(() => {
            text.innerHTML += word + ' ';
        }, i * 30); // Появление каждого слова с задержкой
    });
});


document.querySelector('.circle').addEventListener('click', function () {
    if (this.style.borderRadius === '50%') {
        this.style.borderRadius = '0'; // Круг превращается в квадрат
    } else {
        this.style.borderRadius = '50%'; // Квадрат превращается в круг
    }
});


document.querySelector('.square').addEventListener('click', function () {
    if (this.style.borderRadius === '50%') {
        this.style.borderRadius = '0'; // Круг превращается в квадрат
    } else {
        this.style.borderRadius = '50%'; // Квадрат превращается в круг
    }
});

document.querySelector('.triangle').addEventListener('click', function () {
    if (this.style.borderRadius === '50%') {
        this.style.borderRadius = '0'; // Круг превращается в квадрат
    } else {
        this.style.borderRadius = '50%'; // Квадрат превращается в круг
    }
});


const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
const startBtn = document.getElementById('start-btn');

let score = 0;
let gameInProgress = false;

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    gameInProgress = true;
    startBtn.disabled = true;

    let gameDuration = 10000; // Игра длится 10 секунд
    let squareInterval = setInterval(createSquare, 800); // Создавать новый квадрат каждые 0.8 секунд

    // Закончить игру через 10 секунд
    setTimeout(() => {
        clearInterval(squareInterval);
        gameInProgress = false;
        startBtn.disabled = false;
        alert(`Игра окончена! Ваш результат: ${score} очков.`);
    }, gameDuration);
}

function createSquare() {
    if (!gameInProgress) return;

    const square = document.createElement('div');
    square.classList.add('square');

    square.style.top = `${Math.random() * (gameArea.clientHeight - 50)}px`;
    square.style.left = `${Math.random() * (gameArea.clientWidth - 50)}px`;

    square.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

    gameArea.appendChild(square);

    // Добавим движение к квадрату
    const moveX = Math.random() > 0.5 ? 1 : -1;
    const moveY = Math.random() > 0.5 ? 1 : -1;
    function moveSquare() {
        if (!gameInProgress) return;

        const currentTop = parseFloat(square.style.top);
        const currentLeft = parseFloat(square.style.left);

        // Обновляем позицию
        square.style.top = `${currentTop + moveY * 2}px`;
        square.style.left = `${currentLeft + moveX * 2}px`;

        requestAnimationFrame(moveSquare);
    }

    moveSquare();

    square.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = score;
        square.remove();
    });

    setTimeout(() => {
        square.remove();
    }, 1500);
}

// Запуск игры при нажатии на кнопку
startBtn.addEventListener('click', startGame);
