        fetch('header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header').innerHTML = data;
            });

        // Load Footer
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer').innerHTML = data;
            });
        document.addEventListener('DOMContentLoaded', () => {
        // Hamburger Menu Functionality
        const hamburger = document.querySelector('.hamburger');
        const menuDropdown = document.querySelector('.menu-dropdown');

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            menuDropdown.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !menuDropdown.contains(e.target)) {
                hamburger.classList.remove('active');
                menuDropdown.classList.remove('active');
            }
        document.getElementById("current-year").textContent = new Date().getFullYear();
        });

        // Smooth scroll for menu links
        document.querySelectorAll('.menu-dropdown a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
                hamburger.classList.remove('active');
                menuDropdown.classList.remove('active');
            });
        });
    });
