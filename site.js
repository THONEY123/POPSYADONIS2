// Shared, defensive behavior for the site's multi-page navigation and icons.
if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
}

document.querySelectorAll('.current-year').forEach(element => {
    element.textContent = new Date().getFullYear();
});

const menuButton = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuButton && mobileMenu) {
    const setMenuOpen = open => {
        mobileMenu.classList.toggle('hidden', !open);
        menuButton.setAttribute('aria-expanded', String(open));
        menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    };

    menuButton.addEventListener('click', () => {
        setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
    });

    // Close after following any menu link, including the CTA link.
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setMenuOpen(false));
    });

    document.addEventListener('click', event => {
        if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
            setMenuOpen(false);
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
            setMenuOpen(false);
            menuButton.focus();
        }
    });

    // Ensure a menu opened on mobile cannot remain open after switching to desktop.
    window.addEventListener('resize', () => {
        if (window.matchMedia('(min-width: 1024px)').matches) setMenuOpen(false);
    });
}
