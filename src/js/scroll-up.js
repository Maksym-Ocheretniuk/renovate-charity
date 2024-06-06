// Scroll Up

var scrollBtn = document.querySelector('.scroll-up');

window.addEventListener('scroll', function() {
  scrollBtn.classList.toggle('active', window.scrollY > 500)
})

scrollBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  });