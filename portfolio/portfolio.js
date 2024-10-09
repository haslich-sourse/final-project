document.addEventListener("DOMContentLoaded", function() {
    // Плавная прокрутка к секциям
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Тема оформления (светлая/темная)
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });

    // Появление секций при прокрутке
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            if (sectionPosition < window.innerHeight - 100) {
                section.classList.add('visible');
            }
        });
    });

    // Показ дополнительной информации
    const aboutMoreBtn = document.getElementById('about-more-btn');
    const aboutMoreInfo = document.getElementById('about-more-info');
    aboutMoreBtn.addEventListener('click', function() {
        if (aboutMoreInfo.style.display === 'none') {
            aboutMoreInfo.style.display = 'block';
            aboutMoreBtn.textContent = 'Скрыть';
        } else {
            aboutMoreInfo.style.display = 'none';
            aboutMoreBtn.textContent = 'Подробнее';
        }
    });
});
