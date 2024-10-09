document.getElementById('learn-more').addEventListener('click', function() {
    alert('Привет, я Игорь! Веб-разработка — моя страсть.');
    // Можно добавить переход на следующую страницу или появление дополнительной информации.
});

// Плавная анимация кнопки при загрузке страницы
window.onload = function() {
    const button = document.getElementById('learn-more');
    button.style.opacity = '0';
    setTimeout(function() {
        button.style.transition = 'opacity 1.5s';
        button.style.opacity = '1';
    }, 500);
};
