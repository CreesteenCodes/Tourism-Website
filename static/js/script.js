// Navbar Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Carousel
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
let index = 0;

function showSlide(i) {
    index = (i + images.length) % images.length;
    slides.style.transform = `translateX(${-index * 100}%)`;
}
document.querySelector('.prev').addEventListener('click', () => showSlide(index - 1));
document.querySelector('.next').addEventListener('click', () => showSlide(index + 1));
setInterval(() => showSlide(index + 1), 4000);