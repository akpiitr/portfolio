document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-item');

    // Toggle Menu on Click
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Smooth Scrolling and Close Menu on Click
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }

            // Close the menu on mobile
            navMenu.classList.remove('active');
        });
    });

    // Navbar Shrinks on Scroll
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shrink');
        } else {
            navbar.classList.remove('shrink');
        }
    });
});
