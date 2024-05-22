// визначення пристроїв з/без touchScreen
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  
  // код для мобильних пристроїв з touchScreen
  document.body.classList.add('_touch')

  let menuArrows = document.querySelectorAll('.menu__arrow')
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function (e) {
        menuArrow.parentElement.classList.toggle('_active')
      })
    }
  }
} else {
  
  // код для інших пристроїв без touchScreen
  document.body.classList.add('_pc')

  let menuArrows = document.querySelectorAll('.menu__arrow')
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function (e) {
        menuArrow.parentElement.classList.toggle('_active')
      })
    }
  }
}

// Menu burger
const iconMenu = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body')

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('_active')
    menuBody.classList.toggle('_active')
  })
}