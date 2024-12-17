// Слайдер
let currentSlide = 0;
const slides = document.querySelectorAll(".slider img");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

function showSlide(index) {
    slides.forEach(slide => slide.style.display = "none");
    slides[index].style.display = "block";
}

function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function showPrevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

prevButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click", showNextSlide);

showSlide(currentSlide);

// Автопрокрутка слайдов каждые 3 секунды
setInterval(showNextSlide, 3000);  // Интервал 3000 мс (3 секунды)

// Плавный скроллинг при клике на кнопку "Наверх"
document.getElementById('scrollToTopButton').addEventListener('click', function() {
    scrollToTop();
  });
  
  function scrollToTop() {
    const scrollStep = -window.scrollY / 15;
    const scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
  }
  // Капча
const captchaModal = document.getElementById('captchaModal');
const captchaText = document.getElementById('captchaText');
const captchaInput = document.getElementById('captchaInput');
const refreshCaptcha = document.getElementById('refreshCaptcha');
const verifyCaptcha = document.getElementById('verifyCaptcha');
const captchaMessage = document.getElementById('captchaMessage');

let generatedCaptcha = generateCaptcha();

function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    captchaText.textContent = captcha;
    return captcha;
}

refreshCaptcha.addEventListener('click', () => {
    generatedCaptcha = generateCaptcha();
    captchaMessage.textContent = '';
    captchaInput.value = '';
});

verifyCaptcha.addEventListener('click', () => {
    if (captchaInput.value.trim() === generatedCaptcha) {
        captchaModal.style.display = 'none';
        captchaMessage.textContent = '';
    } else {
        captchaMessage.textContent = 'Капча неверна! Попробуйте снова.';
        captchaMessage.style.color = 'red';
        captchaInput.value = '';
    }
});

// Показываем модальное окно при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
    captchaModal.style.display = 'block';
    generatedCaptcha = generateCaptcha();
});

