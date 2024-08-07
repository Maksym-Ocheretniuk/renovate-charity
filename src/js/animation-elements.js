import ScrollReveal from 'scrollreveal';

// const ScrollReveal = require('scrollreveal');

ScrollReveal({
  reset: true,
  distance: '20px',
  duration: 1250,
  delay: 200
});

ScrollReveal().reveal('.animation__icon', {
  distance: '20px',
  delay: 100
});
ScrollReveal().reveal('.animation__img', {
  distance: '5px',
  delay: 100
});
ScrollReveal().reveal('.animation__left', {
  distance: '10px',
  delay: 200,
  origin: 'left'
});
ScrollReveal().reveal('.animation__right', {
  distance: '10px',
  delay: 200,
  origin: 'right'
});
ScrollReveal().reveal('.animation__bottom', {
  distance: '10px',
  delay: 200,
  origin: 'bottom'
});

ScrollReveal().reveal('.animation__socials-right', {
  distance: '25px',
  delay: 100,
  origin: 'right',
  duration: 2000
});
ScrollReveal().reveal('.animation__socials-left', {
  distance: '25px',
  delay: 100,
  origin: 'left',
  duration: 2000
});
ScrollReveal().reveal('.animation__socials-bottom', {
  distance: '25px',
  delay: 100,
  origin: 'bottom',
  duration: 2000
});