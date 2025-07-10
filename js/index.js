
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

function toggleMenu() {
    const menu = document.querySelector('.header__menu');
    menu.classList.toggle('active');
}





