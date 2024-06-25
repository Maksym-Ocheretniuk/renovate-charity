// прокрутка до необхідної секції/опису проєкту при кліку на кнопку-посилання
// "data-goto=".scroll__data-1" - стороінка "unit-reconstruction" (Відбудова країни)
// "data-goto=".scroll__data-2" - стороінка "unit-reconstruction" (Відбудова країни)
// "data-goto=".scroll__data-3" - стороінка "unit-reconstruction" (Відбудова країни)
// "data-goto=".scroll__data-4" - стороінка "unit-reconstruction" (Відбудова країни)
// "data-goto=".scroll__data-5" - секція "HEADER" (кнопка "Контакти")

// const scrollButtons = document.querySelectorAll('.reconstruction__btn[data-goto]') || document.querySelectorAll('.reconstruction__btn-title[data-goto]') || document.querySelectorAll('.reconstruction__btn-city[data-goto]') || document.querySelectorAll('.menu__link[data-goto]');

// const Buttons = document.querySelectorAll('.reconstruction__btn[data-goto]') || document.querySelectorAll('.reconstruction__btn-title[data-goto]') || document.querySelectorAll('.reconstruction__btn-city[data-goto]');
// const scrollButtons = Buttons.push("document.querySelectorAll('.menu__link[data-goto]')")
// console.log("Buttons: ", Buttons);

const scrollButtons = document.querySelectorAll('.menu__link[data-goto]');

// console.log("scrollButtons: ", scrollButtons);

if (scrollButtons.length > 0) {
  scrollButtons.forEach(scrollButton => {
    scrollButton.addEventListener("click", onScrollButtonClick);
    }
  )

  function onScrollButtonClick(e) {
    e.preventDefault();
    
    const scrollButton = e.target;
    
    if (scrollButton.dataset.goto && document.querySelector(scrollButton.dataset.goto)) {

      const gotoBlock = document.querySelector(scrollButton.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

      // закривання меню
      const iconMenu = document.querySelector('.menu__icon')
      const menuBody = document.querySelector('.menu__body')

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock')
        iconMenu.classList.remove('_active')
        menuBody.classList.remove('_active')
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
    }
  }
}