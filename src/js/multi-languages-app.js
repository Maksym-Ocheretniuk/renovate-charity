const allLangs = ['ua', 'en'];
let currentLang = localStorage.getItem("language") || 'ua';
const langButtons = document.querySelectorAll("[data-btn]");
const currentPathName = window.location.pathname;
let currentText = {};


const langHeaderTexts = {
  "lang__menu-link-home" : {
    "ua": "Фонд \"ЗАНОВО\"",
    "en": "Fund \"RENOVATE\"",
  },
  "lang__menu-link-projects" : {
    "ua": "Проєкти",
    "en": "Projects",
  },
  "lang__menu-link-about" : {
    "ua": "Про нас",
    "en": "About us",
  },
  "lang__menu-link-report" : {
    "ua": "Звіти і Подяки",
    "en": "Reports and Acknowledgments",
  },
  "lang__menu-link-contacts" : {
    "ua": "Контакти",
    "en": "Contacts",
  },
  "lang__menu-link-donate" : {
    "ua": "Зробити донат",
    "en": "Donation",
  },

  "lang__menu-sub-link-zsu-help" : {
    "ua": "Допомога ЗСУ",
    "en": "ZSU Help",
  },
  "lang__menu-sub-link-reconstruction" : {
    "ua": "Відбудова країни",
    "en": "Reconstruction",
  },
  "lang__menu-sub-link-nets" : {
    "ua": "Загін СМС",
    "en": "Squad NCN",
  },
  "lang__menu-sub-link-candle" : {
    "ua": "Сили ССО",
    "en": "Powers of SCO",
  },
  "lang__menu-sub-link-humanitarian" : {
    "ua": "Гуманітарна допомога",
    "en": "Humanitarian aid",
  },
  "lang__menu-sub-link-events" : {
    "ua": "Благодійні заходи",
    "en": "Charity Events",
  },
}

const langFooterTexts = {
  "lang__footer-address-title" : {
    "ua": "Благодійний фонд ''ЗАНОВО''",
    "en": "Charity Fund ''RENOVATE''",
  },
  "lang__footer-address-recvizit" : {
    "ua": "ЄДРПОУ: 44659830",
    "en": "ID TAX: 44659830",
  },
  "lang__footer-address-location" : {
    "ua": "м. Київ, вул. Дегтярівська 5",
    "en": "Kyiv, Degtyarivska St. 5",
  },

  "lang__footer-qr-title" : {
    "ua": "Постійний збір",
    "en": "Constant donation",
  },

  "lang__footer-docs-link-statute" : {
    "ua": "Статут",
    "en": "Statute",
  },
  "lang__footer-docs-link-extract" : {
    "ua": "Витяг з реєстру",
    "en": "Registry extract",
  },
  "lang__footer-docs-link-certificate" : {
    "ua": "Довідка про неприбутковість",
    "en": "Non-profit certificate",
  },

  "lang__footer-address-copyright" : {
    "ua": `&#169; 2024 - Благодійний фонд "ЗАНОВО". <br class="footer__br"> Всі права захищені.`,
    "en": "&#169; 2024 - Renovate Charity Foundation. <br class=\"footer__br\"> All rights reserved.",
  },
}

const langHomeTextsAbout = {
  "home-page-title" :  {
    "ua": "Благодійний фонд ЗАНОВО",
    "en": "RENOVATE CHARITY",
  },
  "lang__main-about-text-1" :  {
    "ua": "З лютого 2022 року ми почали надавати допомогу на Київському залізничному вокзалі. Наша команда з понад 100 волонтерів допомагала військовим, біженцям, соціальним центрам і лікарням. Завдяки вашим внескам ми забезпечували гуманітарні вантажі для регіонів, постраждалих від війни, а також надавали харчування сотням людей щодня.",
    "en": "From February 2022, we started providing assistance at the Kyiv railway station. Our team of over 100 volunteers helped the military, refugees, social centers and hospitals. Thanks to your contributions, we have provided humanitarian supplies to war-torn regions and fed hundreds of people every day.",
  },
  "lang__main-about-text-2" :  {
    "ua": "Труднощі нас лише зміцнювали, і сьогодні ми, об'єднані в благодійний фонд \"Заново\", продовжуємо працювати за кількома напрямками: відбудова країни, гуманітарна допомога, підтримка ЗСУ, плетіння сіток, виготовлення свічок та організація благодійних заходів. Кожен внесок і кожна година праці наших волонтерів наближає нас до перемоги. Ми віримо у квітуче майбутнє України і разом працюємо задля його досягнення.",
    "en": "Difficulties only strengthened us, and today we, united in the \"RENOVATE\" charitable foundation, continue to work in several directions: reconstruction of the country, humanitarian aid, support of the Armed Forces, weaving nets, making candles and organizing charity events. Every contribution and every hour of work of our volunteers brings us closer to victory. We believe in the prosperous future of Ukraine and work together to achieve it.",
  },
}

const langHomeTextsIcons = {
  "lang__main-icons-title-1" :  {
    "ua": "Допомога ЗСУ",
    "en": "Help to ZSU",
  },
  "lang__main-icons-description-1" :  {
    "ua": "Забезпечуємо наших військових необхідним обладнанням, спорядженням та медикаментами. Ми співпрацюємо з волонтерами та партнерами, щоб оперативно доставляти допомогу на передову, підтримуючи захисників у їх боротьбі за мир і безпеку.",
    "en": "We provide our military with the necessary equipment, supplies and medicines. We work with volunteers and partners to quickly deliver aid to the frontlines, supporting defenders in their fight for peace and security.",
  },

  "lang__main-icons-title-2" :  {
    "ua": "Відбудова країни",
    "en": "Reconstruction country",
  },
  "lang__main-icons-description-2" :  {
    "ua": "Відновлюємо інфраструктуру, постраждалу від воєнних дій. Залучаємо ресурси та волонтерів для ремонту житлових будинків, шкіл і лікарень, щоб повернути громадам стабільність і комфортне життя.",
    "en": "We are restoring infrastructure damaged by military operations. We are mobilizing resources and volunteers to repair residential buildings, schools and hospitals to restore stability and comfortable living to communities.",
  },

  "lang__main-icons-title-3" :  {
    "ua": "Загін сітко-маскувальних сил",
    "en": "Squad of net camouflage forces",
  },
  "lang__main-icons-description-3" :  {
    "ua": "Виготовляємо та постачаємо маскувальні сітки для військових підрозділів. Наші зусилля сприяють підвищенню захисту техніки та особового складу на передовій.",
    "en": "We manufacture and supply camouflage nets for military units. Our efforts contribute to increasing the protection of equipment and personnel on the front lines.",
  },

  "lang__main-icons-title-4" :  {
    "ua": "Сили спеціальних свічкових операцій",
    "en": "Powers of special candle operations",
  },
  "lang__main-icons-description-4" :  {
    "ua": "Забезпечуємо військових засобами для світла та тепла під час бойових завдань. Наша підтримка сприяє підвищенню комфорту перебування у важких умовах.",
    "en": "We provide military equipment for light and heat during combat missions. Our support helps increase the comfort of staying in difficult conditions.",
  },

  "lang__main-icons-title-5" :  {
    "ua": "Гуманітарна допомога",
    "en": "Humanitarian help",
  },
  "lang__main-icons-description-5" :  {
    "ua": "Надаємо гуманітарну допомогу постраждалим від воєнних дій. Забезпечуємо продуктами, одягом та необхідними речами, щоб підтримати людей у складних життєвих обставинах.",
    "en": "We provide humanitarian assistance to victims of military operations. We provide food, clothing and necessary things to support people in difficult life circumstances.",
  },

  "lang__main-icons-title-6" :  {
    "ua": "Благодійні заходи",
    "en": "Charity events",
  },
  "lang__main-icons-description-6" :  {
    "ua": "Організовуємо благодійні заходи для збору коштів та підвищення обізнаності про наші проєкти. Залучаємо громаду до активної участі у благодійності та підтримці потребуючих.",
    "en": "We organize charity events to raise funds and raise awareness of our projects. We involve the community in active participation in charity and support of the needy.",
  },
}

const langAboutUsTexts = {
  "about-us-page-title" :  {
    "ua": "Благодійний фонд ЗАНОВО. Про нас",
    "en": "RENOVATE CHARITY. About us.",
  },
  "lang__about-us-title" :  {
    "ua": "Хто ми такі",
    "en": "Who are we",
  },
  "lang__about-us-text-1" :  {
    "ua": "З чого ми починали (і чим продовжуємо займатися зараз)",
    "en": "What we started with (and what we continue to do now)",
  },
  "lang__about-us-text-2" :  {
    "ua": "З 28 лютого ми почали займатися волонтерством на Київському з-д вокзалі.",
    "en": "From February 28, we started volunteering at the Kyiv railway station.",
  },
}

function checkPagePathName() {
  switch (currentPathName) {
    case '/index.html':
      currentText = Object.assign(langHomeTextsAbout, langHomeTextsIcons, langHeaderTexts, langFooterTexts);
      break;
    case '/about-us.html':
      currentText = Object.assign(langAboutUsTexts, langHeaderTexts);
      break;
  
    default:
      // currentText = Object.assign(langHomeTexts, langHeaderTexts);
      break;
  }
}
checkPagePathName();

function changeLang() {
  for (const key in currentText) {
    const element = document.querySelector(`[data-lang=${key}]`);
    if (element) {
      element.textContent = currentText[key][currentLang];
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