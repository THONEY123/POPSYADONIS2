lucide.createIcons();

document.querySelectorAll('.current-year').forEach(element => {
    element.textContent = new Date().getFullYear();
});

const menuButton = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuButton && mobileMenu) {
    const closeMobileMenu = () => {
        mobileMenu.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
    };

    menuButton.addEventListener('click', () => {
        const expanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', String(!expanded));
        mobileMenu.classList.toggle('hidden', expanded);
    });

    mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('click', event => {
        if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
            closeMobileMenu();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeMobileMenu();
            menuButton.focus();
        }
    });
}
