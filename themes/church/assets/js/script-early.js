/**
 * @file
 * A JavaScript file for the theme. Runs first, before jQuery etc. have loaded.
 */

(function () {

  'use strict';

  // Add a js class to the html-tag when JavsScript is active.
  document.querySelector('html').classList.replace('nojs', 'js');

  document.addEventListener('DOMContentLoaded', function () {
      var phrases = [
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
  });
})();
