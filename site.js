lucide.createIcons();

document.querySelectorAll('.current-year').forEach(element => {
    element.textContent = new Date().getFullYear();
});

const menuButton = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
        const expanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', String(!expanded));
        mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuButton.setAttribute('aria-expanded', 'false');
        });
    });
}
