import langHeaderTexts from '../data/langHeaderTexts.json';
import langFooterTexts from '../data/langFooterTexts.json';
import langHomeTexts from '../data/langHomeTexts.json';
import langAboutUsTexts from '../data/langAboutUsTexts.json';
import langDonateTexts from '../data/langDonateTexts.json';
import langZSUHelpTexts from '../data/langZSUHelpTexts.json';
import langReconstructionTexts from '../data/langReconstructionTexts.json';
import langNetsTexts from '../data/langNetsTexts.json';
import langHumanitarianHelpTexts from '../data/langHumanitarianHelpTexts.json';
import langEventsTexts from '../data/langEventsTexts.json';
// import langCandleTexts from '../data/langCandleTexts.json';
// import langReportsAndThanksTexts from '../data/langReportsAndThanksTexts.json';

// console.log(langHeaderTexts)

const allLangs = ['ua', 'en'];
let currentLang = localStorage.getItem("language") || checkBrowserLang() || 'ua';
const langButtons = document.querySelectorAll("[data-btn]");
const currentPathName = window.location.pathname;
let currentText = {};

function checkPagePathName() {
  switch (currentPathName) {
    
    case '/index.html':
      currentText = Object.assign(langHomeTexts, langHeaderTexts, langFooterTexts);
      break;
    
    case '/about-us.html':
      currentText = Object.assign(langAboutUsTexts, langHeaderTexts, langFooterTexts);
      break;
    
    case '/donate.html':
      currentText = Object.assign(langDonateTexts, langHeaderTexts, langFooterTexts);
      break;
    
    case '/unit-zsu-help.html':
      currentText = Object.assign(langZSUHelpTexts, langHeaderTexts, langFooterTexts);
      break;
    
    case '/unit-reconstruction.html':
      currentText = Object.assign(langReconstructionTexts, langHeaderTexts, langFooterTexts);
      break;

    case '/unit-nets.html':
      currentText = Object.assign(langNetsTexts, langHeaderTexts, langFooterTexts);
      break;

    case '/unit-humanitarian-help.html':
      currentText = Object.assign(langHumanitarianHelpTexts, langHeaderTexts, langFooterTexts);
      break;

    case '/unit-events.html':
      currentText = Object.assign(langEventsTexts, langHeaderTexts, langFooterTexts);
      break;
    
    // case '/fund-report.html':
    //   currentText = Object.assign(langReportsAndThanksTexts, langHeaderTexts, langFooterTexts);
    //   break;
    
    // case '/unit-candle.html':
    //   currentText = Object.assign(langCandleTexts, langHeaderTexts, langFooterTexts);
    //   break;
  
    default:
      // currentText = Object.assign(langHomeTexts, langHeaderTexts, langFooterTexts);
      break;
  }
}
checkPagePathName();

function changeLang() {
  for (const key in currentText) {
    const element = document.querySelector(`[data-lang=${key}]`);
    if (element) {
      element.innerHTML = currentText[key][currentLang];
    }
  }
}
changeLang();

langButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    currentLang = event.target.dataset.btn;
    localStorage.setItem("language", currentLang);
    resetActiveClassBtnLang(langButtons, "header__lang-btn-active");
    btn.classList.add("header__lang-btn-active");
    changeLang();
  })
});

function resetActiveClassBtnLang(arr, activeClassBtnLang) {
  arr.forEach(element => {
    element.classList.remove(activeClassBtnLang)
  })
}

function checkActiveLangButton() {
  let langButton;
  switch (currentLang) {
    case "ua":
      langButton = document.querySelector(`[data-btn="ua"]`);
      break;
    case "en":
      langButton = document.querySelector(`[data-btn="en"]`);
      break;
    default:
      langButton = document.querySelector(`[data-btn="ua"]`);
      break;
  }

  if (langButton) {
    langButton.classList.add("header__lang-btn-active");
  } else {
    console.error(`Element with data-btn="${currentLang}" not found.`);
  }
}
checkActiveLangButton();

function checkBrowserLang() {
  const navigatorLang = navigator.language.slice(0, 2).toLowerCase();
  const result = allLangs.some((element) => {
    return element === navigatorLang;
  });

  if (result) {
    return navigatorLang;
  }
}