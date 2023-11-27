document.addEventListener('DOMContentLoaded', function () {
    var mobileMenuButton = document.querySelector('.mobile-menu-button');
    var closeButton = document.querySelector('.close-button');

    var mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.add('is-open');
    });

    closeButton.addEventListener('click', function () {
        mobileMenu.classList.remove('is-open');
    });
});