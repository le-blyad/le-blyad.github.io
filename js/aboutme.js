setInterval(function () {
    if (currentSlide === 3) {
        showSlide(1);
    } else {
        showSlide(currentSlide + 1);
    }
}, 5000);

var currentSlide = 1;
showSlide(currentSlide);

function showSlide(slideNumber) {
    var slides = document.querySelectorAll('.slider__images img');
    var dots = document.querySelectorAll('.slider__dots .dot');

    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[slideNumber - 1].classList.add('active');

    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    dots[slideNumber - 1].classList.add('active');

    currentSlide = slideNumber;
}

function prevSlide() {
    if (currentSlide === 1) {
        showSlide(3);
    } else {
        showSlide(currentSlide - 1);
    }
}

function nextSlide() {
    if (currentSlide === 3) {
        showSlide(1);
    } else {
        showSlide(currentSlide + 1);
    }
}