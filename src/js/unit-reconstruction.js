// прокрутка до пункту опису проєкту при кліку на кнопку-посилання на стороінці "unit-reconstruction"

const reconstructionButtons = document.querySelectorAll('.reconstruction__btn[data-goto]') || document.querySelectorAll('.reconstruction__btn-title[data-goto]') || document.querySelectorAll('.reconstruction__btn-city[data-goto]');

if (reconstructionButtons.length > 0) {
  
  reconstructionButtons.forEach(reconstructionButton => {
    reconstructionButton.addEventListener("click", onReconstructionClick);
    }
  )

  function onReconstructionClick(e) {
    

    const reconstructionButton = e.target;
    
    if (reconstructionButton.dataset.goto && document.querySelector(reconstructionButton.dataset.goto)) {

      const gotoBlock = document.querySelector(reconstructionButton.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
      e.preventDefault();
    }
  }
}