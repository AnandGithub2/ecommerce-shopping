document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show-nav');
    });
});

// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const adContainer = document.querySelector('.advertisement');
    let scrollAmount = 0;
    const scrollInterval = 3000;

    const startScroll = () => {
        setInterval(() => {
            scrollAmount = (scrollAmount + adContainer.clientWidth) % (adContainer.scrollWidth);
            adContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }, scrollInterval);
    };

    startScroll();
});

