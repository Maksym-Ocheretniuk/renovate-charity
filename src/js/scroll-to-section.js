// прокрутка до необхідної секції/опису проєкту при кліку на кнопку-посилання
// "data-goto=".scroll__data-1" - стороінка "unit-reconstruction" (Відбудова країни)
// "data-goto=".scroll__data-2" - стороінка "unit-reconstruction" (Відбудова країни)
// "data-goto=".scroll__data-3" - стороінка "unit-reconstruction" (Відбудова країни)
// "data-goto=".scroll__data-4" - стороінка "unit-reconstruction" (Відбудова країни)
// "data-goto=".scroll__data-5" - секція "HEADER" (кнопка "Контакти")

const reconstructionButtons = document.querySelectorAll('.reconstruction__btn[data-goto]') || document.querySelectorAll('.reconstruction__btn-title[data-goto]') || document.querySelectorAll('.reconstruction__btn-city[data-goto]');
//  || document.querySelectorAll('.menu__link[data-goto]')

// console.log(reconstructionButtons)

if (reconstructionButtons.length > 0) {
  reconstructionButtons.forEach(reconstructionButton => {
    reconstructionButton.addEventListener("click", onReconstructionClick);
    }
  )

  function onReconstructionClick(e) {
    e.preventDefault();
    
    const reconstructionButton = e.target;
    
    if (reconstructionButton.dataset.goto && document.querySelector(reconstructionButton.dataset.goto)) {

      const gotoBlock = document.querySelector(reconstructionButton.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
    }
  }
}