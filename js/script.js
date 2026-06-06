
// Example: Mobile navigation toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuButton && navMenu) {
        mobileMenuButton.addEventListener('click', () => {
            navMenu.classList.toggle('active'); // Toggle a class to show/hide menu
            // Optional: animate button if desired
            // mobileMenuButton.classList.toggle('open');
        });
    }
});

// Other JavaScript functionalities
