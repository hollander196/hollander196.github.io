// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Simple fade-in animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Set dynamic year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Navbar toggle for small screens
const navToggle = document.querySelector('.navbar-toggle');
const navMenu = document.querySelector('.navbar-menu');
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
}

// Add scroll behavior for navbar/shadow and active link highlighting
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar-menu a');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) navbar && navbar.classList.add('scrolled'); else navbar && navbar.classList.remove('scrolled');
    document.querySelectorAll('.section').forEach(sec => {
        const rect = sec.getBoundingClientRect();
        const id = sec.id;
        const link = document.querySelector(`.navbar-menu a[href="#${id}"]`);
        if (link) {
            if (rect.top <= 120 && rect.bottom > 120) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});

// Contact form submit handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = contactForm.querySelector('.btn-submit');
        btn.textContent = 'Message Sent ✓';
        btn.disabled = true;
        btn.style.background = '#27ae60';
        setTimeout(function () {
            contactForm.reset();
            btn.textContent = 'Send Message';
            btn.disabled = false;
            btn.style.background = '';
        }, 3000);
    });
}
