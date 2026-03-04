document.addEventListener('DOMContentLoaded', function () {
    // Initialize swiper when the DOM is fully loaded
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Additional JavaScript functions
    function showMessage() {
        alert("Hello! Welcome to Netflix Clone!");
    }

    function toggleUserProfile() {
        var userProfile = document.querySelector('.user-profile');
        userProfile.classList.toggle('show');
    }

    // Attach functions to HTML elements
    var showMessageButton = document.getElementById('showMessageButton');
    if (showMessageButton) {
        showMessageButton.addEventListener('click', showMessage);
    }

    var userProfileButton = document.getElementById('toggleUserProfile');
    if (userProfileButton) {
        userProfileButton.addEventListener('click', toggleUserProfile);
    }
});
