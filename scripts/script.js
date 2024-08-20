let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let slideInterval;
showSlides(slideIndex);

function showSlides(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
        slides[i].classList.remove("activeSlide");
    }
    
    slides[index].style.display = "block";  
    slides[index].classList.add("activeSlide");

    clearTimeout(slideInterval);  // Clear the previous interval
    slideInterval = setTimeout(function() { plusSlides(1); }, 3000); // Set a new interval for the next slide
}

function plusSlides(n) {
    slideIndex += n;
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    
    showSlides(slideIndex);
}

const prevButton = document.querySelector('.prev-prod');
const nextButton = document.querySelector('.next-prod');
const slider = document.querySelector('.products-slider');
let currentSlide = 0;

nextButton.addEventListener('click', () => {
    const slides = document.querySelectorAll('.products-slide');
    if (currentSlide < slides.length - 4) {
        currentSlide++;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
});

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
});

// brands
const brandSlides = document.querySelectorAll('.brand-slide');
const dots = document.querySelectorAll('.dot');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentIndex = 0;
const slidesPerPage = 5; // Number of slides visible per row

function showSlide(index) {
    if (index >= brandSlides.length / slidesPerPage) {
        currentIndex = brandSlides.length / slidesPerPage - 1;
    } else if (index < 0) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    brandSlides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');

    // Disable/Enable arrows
    leftArrow.classList.toggle('disabled', currentIndex === 0);
    rightArrow.classList.toggle('disabled', currentIndex === Math.floor(slides.length / slidesPerPage) - 1);
}

rightArrow.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

leftArrow.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlide(i);
    });
});

// Initialize the first slide
showSlide(currentIndex);


