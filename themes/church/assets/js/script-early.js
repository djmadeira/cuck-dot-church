/**
 * @file
 * A JavaScript file for the theme. Runs first, before jQuery etc. have loaded.
 */

(function () {
    'use strict';

    const htmlElement = document.documentElement;

    const updateLogo = (theme) => {
        const logo = document.querySelector('.header__logo-image');

        const newLogo = logo.cloneNode();

        newLogo.src = `/images/logo_${theme}.png`;
        newLogo.srcset = `/images/logo_${theme}.png, /images/logo_${theme}@2x.png 2x`;

        logo.parentNode.replaceChild(newLogo, logo);
    }

    // Add a js class to the html-tag when JavsScript is active.
    htmlElement.classList.replace('nojs', 'js');

    // Load theme from storage
    const theme = window.localStorage.getItem('theme');
    if (theme) {
        htmlElement.classList.add(`theme-${theme}`);

        document.addEventListener('DOMContentLoaded', () => updateLogo(theme));
    }

    document.addEventListener('DOMContentLoaded', function () {
        const phrases = [
            'omg so true!!!!!',
            'lowkey based?',
            'so based actually',
            'deeply cringe',
            'neochina comes from the future',
            'bruh',
            'nice metaphysics you got there',
            'uwu',
            'kinda sus ngl',
            '*zizek voice* ideology',
            'not very revolutionary of you comrade',
            'based and mainländerpilled',
            'gecgecgecgecgecgecgecgecgec',
            'marx failed to consider big tiddy goth gf',
            'i\'m not a libertarian i\'m anarcho-horny',
            'im a cat with a tank',
            'EXPLAIN DELEUZE TO ME OR I\'LL FUCKING KILL YOU!',
            'dildo theory',
            'sex mutual aid'
        ];
        document.querySelector('#subtitle').innerHTML = phrases[Math.floor(Math.random() * phrases.length)];

        // Theme switcher
        document.querySelectorAll('.footer__theme-switch').forEach((t) => t.addEventListener('click', (e) => {
            const theme = e.target.dataset.theme;

            // Set class
            document.documentElement.classList.forEach((c) => {
                if (c.startsWith('theme-')) {
                   document.documentElement.classList.remove(c);
                }
            });

            document.documentElement.classList.add(`theme-${theme}`);

            updateLogo(theme);

            // Save theme
            window.localStorage.setItem('theme', theme);
        }));
    });
})();
