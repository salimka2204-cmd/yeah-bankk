// Переключение страниц
function showPage(pageId) {
    let pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active-page');
    });

    let targetPage = pageId === 'home' ? document.getElementById('home') : document.getElementById(pageId + '-page');

    if (targetPage) {
        targetPage.classList.add('active-page');
    }

    let navLinks = document.getElementById('navLinks');
    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Открытие и закрытие мобильного меню
function toggleMenu() {
    let navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}

// Всплывающие уведомления
function showAlert(message) {
    alert("yeah bank: " + message);
}

// ЛОГИКА СЛАЙДЕРА
let currentSlide = 0;

function changeSlide(direction) {
    let slides = document.querySelectorAll('.slide');

    // Скрываем текущий слайд
    slides[currentSlide].classList.remove('active-slide');

    // Считаем индекс нового слайда
    currentSlide += direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0; // Возвращаемся к первому
    }
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Переходим к последнему
    }

    // Показываем новый слайд
    slides[currentSlide].classList.add('active-slide');
}