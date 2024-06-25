// Scroll Up

var scrollUpBtn = document.querySelector('.scroll-up');

window.addEventListener('scroll', function () {
  if (scrollUpBtn) {
    scrollUpBtn.classList.toggle('active', window.scrollY > 500)
  }
})

if (scrollUpBtn) {
  scrollUpBtn.addEventListener('click', () => {
      document.documentElement.scrollTop = 0;
    });
}