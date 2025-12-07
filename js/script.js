document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    if (toggle && navList) {
        toggle.addEventListener('click', () => {
            navList.classList.toggle('nav-open');
        });
    }

    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('nav-open')) {
                navList.classList.remove('nav-open');
            }
        });
    });
});
