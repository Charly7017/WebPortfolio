// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.



//Animation in hero section

ScrollReveal().reveal('.hero-title', {
    distance: '70px',
    origin: 'top',
    duration: 1000,
    delay: 200,
    easing: 'ease-out'
});


ScrollReveal().reveal('.hero-subtitle', {
    distance: '50px',
    origin: 'top',
    duration: 1000,
    delay: 400,
    easing: 'ease-out'
});


ScrollReveal().reveal('.hero-description', {
    distance: '30px',
    origin: 'bottom',
    duration: 1200,
    delay: 600,
    easing: 'ease-out'
});


ScrollReveal().reveal('.reveal-contact', {
    distance: '20px',
    origin: 'bottom',
    duration: 800,
    delay: 800,
    easing: 'ease-out',
    interval: 200 
});


//Animation in about me section

ScrollReveal().reveal('.reveal-title', {
    distance: '50px',
    origin: 'left',
    duration: 500,
    delay: 200,
    easing: 'ease-out'
});

ScrollReveal().reveal('.reveal-description', {
    distance: '50px',
    origin: 'right',
    duration: 500,
    delay: 200,
    easing: 'ease-out'
});


//Animation in experience section

ScrollReveal().reveal('.reveal-experience-title', {
    distance: '50px',
    origin: 'top',
    duration: 500,
    delay: 200,
    easing: 'ease-out'
});

ScrollReveal().reveal('.reveal-experience', {
    distance: '50px',
    origin: 'left',
    duration: 500,
    delay: 200,
    easing: 'ease-out',
    interval: 200 // Retraso entre los elementos de la línea de tiempo
});


//Animation in Highlighted Projects section

ScrollReveal().reveal('.reveal-projects-title', {
    distance: '50px',
    origin: 'top',
    duration: 1000,
    delay: 200,
    easing: 'ease-out'
});

ScrollReveal().reveal('.reveal-card', {
    distance: '50px',
    origin: 'bottom',
    duration: 800,
    delay: 300,
    interval: 200, 
    easing: 'ease-out'
});

ScrollReveal().reveal('.reveal-btn', {
    distance: '20px',
    origin: 'bottom',
    duration: 1000,
    delay: 200,
    easing: 'ease-out'
});


//Animation in Skills section

ScrollReveal().reveal('.reveal-skills-title', {
    distance: '50px',
    origin: 'top',
    duration: 1000,
    delay: 200,
    easing: 'ease-out'
});


ScrollReveal().reveal('.reveal-skills-section', {
    distance: '30px',
    origin: 'left',
    duration: 800,
    delay: 400,
    interval: 200, 
    easing: 'ease-out'
});


ScrollReveal().reveal('.reveal-skills-items .col', {
    distance: '20px',
    origin: 'bottom',
    duration: 800,
    delay: 200,
    interval: 100, 
    easing: 'ease-out'
});

