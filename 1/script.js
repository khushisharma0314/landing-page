// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');

    // Change active link on click
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Highlight menu item on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.pageYOffset;

        sections.forEach((section, index) => {
            if (
                section.offsetTop <= scrollPos + 50 &&
                section.offsetTop + section.offsetHeight > scrollPos + 50
            ) {
                menuItems.forEach(i => i.classList.remove('active'));
                menuItems[index].classList.add('active');
            }
        });
    });
});
