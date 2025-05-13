// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const siteHeader = document.querySelector('.site-header');

mobileMenuBtn.addEventListener('click', () => {
    siteHeader.classList.toggle('mobile-menu-open');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!siteHeader.contains(e.target)) {
        siteHeader.classList.remove('mobile-menu-open');
    }
});

// Close mobile menu when window is resized to desktop size
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        siteHeader.classList.remove('mobile-menu-open');
    }
}); 