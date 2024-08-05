document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to remove active class from all nav-links
    function removeActiveClass() {
        navLinks.forEach(link => link.classList.remove('active'));
    }

    // Add click event listener to each nav-link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            removeActiveClass();
            this.classList.add('active');
        });
    });

    // Set the first nav-link as active by default
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
});

