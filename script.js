document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle menu
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.fixed-header')) {
            navMenu.classList.remove('active');
        }
    });

    // Close menu after clicking a link (mobile)
    navMenu.addEventListener('click', function() {
        if (window.innerWidth < 769) {
            navMenu.classList.remove('active');
        }
    });
});
