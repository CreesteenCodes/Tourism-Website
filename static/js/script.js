// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');
const navItems = document.querySelectorAll('nav ul li a');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

navItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

// Parallax Effect
window.addEventListener("scroll", function() {
    const home = document.getElementById("home");
    if (window.scrollY > 50) {
        home.classList.add("parallax-active"); 
    } else {
        home.classList.remove("parallax-active"); 
    }
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

// Resort Card
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.resort-card').forEach(function(card) {
        card.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') return;
            
            document.querySelectorAll('.resort-card.expanded').forEach(function(other) {
                if (other !== card) other.classList.remove('expanded');
            });
           
            card.classList.toggle('expanded');
        });
    });
});
