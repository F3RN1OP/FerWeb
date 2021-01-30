(function () {
    window.addEventListener('scroll', () => {
        // elements
        let card_frontend = document.getElementById('f-card');
        let card_backend = document.getElementById('b-card');
        let icons_f = document.getElementById('icons-f');
        let icons_b = document.getElementById('icons-b');
        let card_proyect = document.querySelector('.content-proyects');
        // positions
        let position_card_f = card_frontend.getBoundingClientRect().top;
        let position_card_p = card_proyect.getBoundingClientRect().top;
        // height display
        let h_display = window.innerHeight; 
        // animations
        if (position_card_f < (h_display/1.2)) {
            card_frontend.style.animation = 'opacity-translate-top 1s ease-out forwards';
            card_backend.style.animation = 'opacity-translate-top 1s ease-out forwards';
            icons_f.style.animation = 'opacity-translate-top 1.5s ease-in forwards'
            icons_b.style.animation = 'opacity-translate-top 1.5s ease-in forwards'
        };
        if (position_card_p < (h_display/1.3)) {
            card_proyect.style.animation = 'opacity-translate-top 1s ease-in-out forwards'
        };
    });
}());