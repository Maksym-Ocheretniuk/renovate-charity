// визначення пристроїв з/без touchScreen
// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  
//   // код для мобильних пристроїв з touchScreen
//   document.body.classList.add('_touch')

//   let menuArrows = document.querySelectorAll('.menu__arrow')
//   if (menuArrows.length > 0) {
//     for (let index = 0; index < menuArrows.length; index++) {
//       const menuArrow = menuArrows[index];
//       menuArrow.addEventListener("click", function (e) {
//         menuArrow.parentElement.classList.toggle('_active')
//       })
//     }
//   }
// } else {
  
//   // код для інших пристроїв без touchScreen
//   document.body.classList.add('_pc')

//   let menuArrows = document.querySelectorAll('.menu__arrow')
//   if (menuArrows.length > 0) {
//     for (let index = 0; index < menuArrows.length; index++) {
//       const menuArrow = menuArrows[index];
//       menuArrow.addEventListener("click", function (e) {
//         menuArrow.parentElement.classList.toggle('_active')
//       })
//     }
//   }
// }

// Menu burger
// const iconMenu = document.querySelector('.menu__icon')
// const menuBody = document.querySelector('.menu__body')

// if (iconMenu) {
//   iconMenu.addEventListener("click", function (e) {
//     document.body.classList.toggle('_lock')
//     iconMenu.classList.toggle('_active')
//     menuBody.classList.toggle('_active')
//   })
// }


let correspondentButtons = document.getElementsByClassName('donate-bank__correspondent-btn-details')
// console.log('correspondentButtons: ', correspondentButtons)

let correspondentBankDescription = document.querySelector('.donate-bank__correspondent-description')

if (correspondentButtons.length > 0) {
  for (let i = 0; i < correspondentButtons.length; i++) {
    const correspondentButton = correspondentButtons[i];
    correspondentButton.addEventListener("click", function (e) {
      this.classList.toggle('show');
      let bankDescription = this.nextElementSibling;
      if (bankDescription.style.maxHeight) {
        console.log('bankDescription.style.maxHeight: ', bankDescription.style.maxHeight)
        bankDescription.style.maxHeight = null;
      } else {
        bankDescription.style.maxHeight = bankDescription.scrollHeight + 'px';
      }
    })
  }
}

// !------------
// let description = document.getElementById('bankDetails');
  
// function bankDetailsShow() {
//   if (description.style.display === 'none') {
//     description.style.display = 'block';
//   }
//   else {
//     description.style.display = 'none';
//   }
// }