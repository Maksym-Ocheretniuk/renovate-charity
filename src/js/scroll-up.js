// Scroll Up

var scrollUpBtn = document.querySelector('.scroll-up');

window.addEventListener('scroll', function() {
  scrollUpBtn.classList.toggle('active', window.scrollY > 500)
})

scrollUpBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  });