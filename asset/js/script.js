// ----- Preloader -----
let preloader = document.querySelector('[preloader]');

window.addEventListener('load', () => {
    preloader.classList.add('loaded');
});

// ----- Menu Toggle -----
let menuToggle = document.querySelector('[menuToggle]'),
    sidebar = document.querySelector('[sidebar]');

menuToggle.addEventListener('click', () => {
    if (menuToggle.classList.contains('bx-menu-alt-right')) {
        menuToggle.classList.replace('bx-menu-alt-right', 'bx-x');
        sidebar.classList.add('open');
    } else {
        menuToggle.classList.replace('bx-x', 'bx-menu-alt-right');
        sidebar.classList.remove('open');
    }
});