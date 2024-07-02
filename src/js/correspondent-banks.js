let correspondentButtons = document.getElementsByClassName('donate-bank__correspondent-btn-details')

if (correspondentButtons.length > 0) {
  for (let i = 0; i < correspondentButtons.length; i++) {
    const correspondentButton = correspondentButtons[i];

    correspondentButton.addEventListener("click", function (e) {
      this.classList.toggle('show');
      let bankDescription = this.nextElementSibling;
      
      if (bankDescription.style.maxHeight) {
        bankDescription.style.maxHeight = null;
      } else {
        bankDescription.style.maxHeight = bankDescription.scrollHeight + 'px';
      }
      
    })
  }
}