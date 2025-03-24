fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
        
        // PUT HAMBURGER CODE HERE AFTER HEADER LOADS
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
        });
    })
    .catch(error => console.error('Error loading header:', error));

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
        document.getElementById("current-year").textContent = new Date().getFullYear();
    })
    .catch(error => console.error('Error loading footer:', error));
