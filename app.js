// Translation Dictionary
const translations = {
  kg: {
    // Navigation
    nav_home: "Башкы бет",
    nav_menu: "Меню",
    nav_about: "Биз жөнүндө",
    nav_gallery: "Галерея",
    nav_contacts: "Байланыш",
    
    // Home Page
    hero_title: "АЯНТ",
    hero_subtitle: "Кафе & Рестораны",
    hero_location: "Манас (мурунку Жалал-Абад), Кыргызстан",
    hero_desc: "Атмосфералык дизайн, жогорку сапаттагы ашкана жана жылуу конок тосуу бириккен жер. Өзүңүз үчүн заманбап минимализм стилиндеги жайлуулукту ачыңыз.",
    hero_btn_menu: "Менюну көрүү",
    hero_btn_book: "Үстөлдү ээлөө",
    hero_instruction: "Кафенин 3D моделин айландыруу үчүн тартыңыз",
    
    atmosphere_subtitle: "Атмосфера",
    atmosphere_title: "Ыңгайлуулуктун ар бир деталында",
    atmosphere_desc: "Биздин интерьер табигый жыгачтын, терракотанын жылуу түстөрүнүн жана жумшак жарыктын айкалышында түзүлгөн. Биз ар бир конок өзүн эркин жана жайлуу сезиши үчүн мейкиндикти кылдаттык менен долбоорлодук.",
    
    grid_title_1: "Табигый материалдар",
    grid_desc_1: "Интерьерде баалуу жыгач түрлөрү колдонулуп, өзгөчө жылуулук жана жаратылыш менен байланыш сезимин берет.",
    grid_title_2: "Терракота жылуулугу",
    grid_desc_2: "Терракота жана топурак түстөрү жайлуу жана өзгөчө стилдүү маанайды жаратат.",
    grid_title_3: "Жумшак жарыктандыруу",
    grid_desc_3: "Атайын иштелип чыккан жарык берүүчү лампалар кечки убакта тынч жана романтикалык маанай тартуулайт.",
    grid_title_4: "Өзгөчө элементтер",
    grid_desc_4: "Ийилген ак көшөгөлөр жана уникалдуу тосмолор мейкиндикти жеңил жана кооз кылып көрсөтөт.",
    
    teaser_subtitle: "Биздин ашкана",
    teaser_title: "Ар бир табит үчүн даамдар",
    teaser_desc: "Улуттук жана европалык ашкананын мыкты тамактары, жаңы бышырылган таттуулар жана жаңы тартылган премиум деңгээлдеги кофе.",
    
    // Menu Page
    menu_title: "Биздин Меню",
    menu_desc: "Биздин ашпозчулардын сүйүү менен даярдаган өзгөчө тамактары",
    menu_cat_kitchen: "Ашкана (Тамактар)",
    menu_cat_dessert: "Таттуулар",
    menu_cat_coffee: "Кофе жана Суусундуктар",
    
    menu_item_lagman: "Аянт Лагманы",
    menu_item_lagman_desc: "Колдон чоюлган камыр, ширелүү эт жана жаңы жашылчалар менен куурулган өзгөчө тамак",
    menu_item_plov: "Майрамдык Палоо",
    menu_item_plov_desc: "Премиум күрүч, назик козунун эти жана сары сабиз менен салттуу кыргыз палоосу",
    menu_item_steak: "Рибай Стейк",
    menu_item_steak_desc: "Ысык грилде куурулган ширелүү стейк, куурулган жашылчалар жана фирмалык соус менен",
    menu_item_manty: "Атайын Манты",
    menu_item_manty_desc: "Жука камырга оролгон майдаланган козунун эти жана пияз менен даярдалган буу тамагы",
    
    menu_item_cake: "Балдуу торт (Медовик)",
    menu_item_cake_desc: "Жумшак бал камыры жана назик каймак крем менен салттуу десерт",
    menu_item_croissant: "Француз круассаны",
    menu_item_croissant_desc: "Сары май кошулуп жаңы бышырылган, кытырак круассан (шоколад же крем менен)",
    menu_item_cheesecake: "Сан-Себастьян чизкейки",
    menu_item_cheesecake_desc: "Карамель кабыгы бар, ортосу жумшак жана каймактай назик быштак десерти",
    
    menu_item_cappuccino: "Капучино",
    menu_item_cappuccino_desc: "Жаңы тартылган кофе дандарынан даярдалган, коюу сүт көбүгү менен классикалык кофе",
    menu_item_raf: "Лаванда Рафы",
    menu_item_raf_desc: "Каймак кошулган жумшак кофе, лаванданын назик жыты менен",
    menu_item_tea: "Чычырканак чайы",
    menu_item_tea_desc: "Жаңы чычырканак мөмөлөрү, бал жана имбирь кошулган жылуу чай",
    
    // About Page
    about_intro_title: "Биздин Тарых",
    about_intro_desc: "Заманбап архитектура жана бай маданий мурастын айкалышы",
    about_p1: "«Аянт» кафеси — бул жөн гана тамактануучу жай эмес. Бул Манас шаарынын чок ортосунда жайгашкан, адамдар баарлашуу, эс алуу жана даамдуу тамактардан ырахат алуу үчүн чогулган маданий борбор.",
    about_p2: "Биздин интерьер заманбап минимализмдин жана табигый жылуулуктун концепциясында иштелип чыккан. Ар бир бурчта — жыгач тосмолордон баштап уникалдуу жарык берүүчү лампаларга чейин — өзгөчө бейпилдик жана жайлуулук атмосферасын сезе аласыз.",
    about_p3: "Биз жергиликтүү ингредиенттердин жаңылыгына жана жогорку тейлөө сапатына сыймыктанабыз. «Аянт» — бул ар бир конок өзүн үйдөгүдөй сезе турган жай.",
    
    // Gallery Page
    gallery_intro_title: "Атмосфера сүрөттөрдө",
    gallery_intro_desc: "Биздин кафенин ички кооздугун жана уникалдуу дизайнын визуалдык изилдөө",
    
    // Contacts Page
    contacts_intro_title: "Байланышуу",
    contacts_intro_desc: "Бизди оңой табыңыз же үстөлдү алдын ала ээлеп коюңуз",
    contacts_form_title: "Үстөлдү алдын ала ээлеп коюу",
    contacts_name_placeholder: "Сиздин ысымыңыз",
    contacts_phone_placeholder: "Телефон номериңиз",
    contacts_date_placeholder: "Күнү жана убактысы",
    contacts_guests_placeholder: "Коноктордун саны",
    contacts_btn_submit: "Ээлөөнү ырастоо",
    contacts_info_title: "Байланыш маалыматы",
    contacts_phone_label: "Телефон номери",
    contacts_address_label: "Дарегибиз",
    contacts_address_val: "Манас шаары (Жалал-Абад району), Кыргызстан",
    contacts_hours_label: "Иштөө убактысы",
    contacts_hours_val: "Күн сайын: 09:00 - 23:00",
    
    // Footer
    footer_desc_val: "Манас шаарындагы премиум деңгээлдеги кафе жана ресторан. Заманбап дизайн жана сапаттуу кызмат көрсөтүү.",
    footer_links_title: "Шилтемелер",
    footer_contact_title: "Байланыш",
    footer_all_rights: "Бардык укуктар корголгон."
  },
  ru: {
    // Navigation
    nav_home: "Главная",
    nav_menu: "Меню",
    nav_about: "О нас",
    nav_gallery: "Галерея",
    nav_contacts: "Контакты",
    
    // Home Page
    hero_title: "АЯНТ",
    hero_subtitle: "Кафе & Ресторан",
    hero_location: "Манас (бывший Джалал-Абад), Кыргызстан",
    hero_desc: "Место, где встречаются атмосферный дизайн, высококлассная кухня и искреннее гостеприимство. Откройте для себя уют современного минимализма.",
    hero_btn_menu: "Посмотреть меню",
    hero_btn_book: "Забронировать",
    hero_instruction: "Перетаскивайте, чтобы вращать 3D-модель кафе",
    
    atmosphere_subtitle: "Атмосфера",
    atmosphere_title: "Уют в каждой детали",
    atmosphere_desc: "Наш интерьер соткан из текстур натурального дерева, теплых терракотовых оттенков и мягкого рассеянного света. Мы продумали пространство так, чтобы каждый гость чувствовал уединение и покой.",
    
    grid_title_1: "Натуральное дерево",
    grid_desc_1: "Использование ценных пород дерева в отделке создает ощущение тепла и единения с природой.",
    grid_title_2: "Теплая терракота",
    grid_desc_2: "Мягкие глиняные оттенки мебели и стен наполняют пространство солнечным светом.",
    grid_title_3: "Дизайнерский свет",
    grid_desc_3: "Уникальные светильники-цилиндры создают интимную атмосферу в вечернее время.",
    grid_title_4: "Изящные ширмы",
    grid_desc_4: "Волнистые белые занавеси и реечные перегородки зонируют зал, сохраняя легкость воздуха.",
    
    teaser_subtitle: "Наша кухня",
    teaser_title: "Вкусы для искушенных",
    teaser_desc: "Лучшие блюда национальной и европейской кухни, свежайшая выпечка собственного производства и спешелти-кофе премиальной обжарки.",
    
    // Menu Page
    menu_title: "Наше Меню",
    menu_desc: "Блюда, приготовленные с любовью и мастерством наших шеф-поваров",
    menu_cat_kitchen: "Кухня (Блюда)",
    menu_cat_dessert: "Десерты",
    menu_cat_coffee: "Кофе и Напитки",
    
    menu_item_lagman: "Лагман Аянт",
    menu_item_lagman_desc: "Тянутая вручную лапша, обжаренная с сочным мясом, свежими овощами и восточными специями",
    menu_item_plov: "Плов Праздничный",
    menu_item_plov_desc: "Традиционный кыргызский плов из риса премиум-сорта, нежной баранины и желтой моркови",
    menu_item_steak: "Стейк Рибай",
    menu_item_steak_desc: "Сочный стейк на гриле из отборной говядины с гарниром из печеных овощей и соусом",
    menu_item_manty: "Фирменные Манты",
    menu_item_manty_desc: "Тончайшее тесто с начинкой из рубленой баранины со специями, приготовленное на пару",
    
    menu_item_cake: "Медовик Домашний",
    menu_item_cake_desc: "Мягкие медовые коржи с нежным сметанным кремом по классическому рецепту",
    menu_item_croissant: "Французский круассан",
    menu_item_croissant_desc: "Свежеиспеченный слоеный круассан на сливочном масле с шоколадной или кремовой начинкой",
    menu_item_cheesecake: "Чизкейк Сан-Себастьян",
    menu_item_cheesecake_desc: "Нежнейший сливочно-сырный десерт с карамельной корочкой и мягким центром",
    
    menu_item_cappuccino: "Капучино",
    menu_item_cappuccino_desc: "Классический кофейный напиток на основе эспрессо с шелковистой молочной пенкой",
    menu_item_raf: "Лавандовый Раф",
    menu_item_raf_desc: "Нежный кофейно-сливочный напиток с добавлением натурального сиропа лаванды",
    menu_item_tea: "Облепиховый чай",
    menu_item_tea_desc: "Согревающий витаминный чай из ягод спелой облепихи с медом и имбирем",
    
    // About Page
    about_intro_title: "Наша История",
    about_intro_desc: "Слияние современной архитектуры и теплого восточного гостеприимства",
    about_p1: "Кафе «Аянт» — это больше чем ресторан. Это гастрономический и культурный ориентир в городе Манас, созданный как оазис уюта, где люди могут собраться для неторопливой беседы, важных встреч и наслаждения изысканными блюдами.",
    about_p2: "Архитектура здания и дизайн интерьера вдохновлены природными материалами и мягкой геометрией. Каждый элемент — от реечных деревянных перегородок до парящих тканевых штор — подобран для создания ощущения гармонии.",
    about_p3: "Мы гордимся строгим отбором фермерских продуктов и высочайшим уровнем сервиса. «Аянт» — это место, куда хочется возвращаться снова и снова.",
    
    // Gallery Page
    gallery_intro_title: "Атмосфера в деталях",
    gallery_intro_desc: "Визуальное путешествие по интерьеру нашего кафе через объектив камеры",
    
    // Contacts Page
    contacts_intro_title: "Связаться с нами",
    contacts_intro_desc: "Найдите нас на карте или забронируйте столик онлайн за несколько секунд",
    contacts_form_title: "Забронировать столик",
    contacts_name_placeholder: "Ваше имя",
    contacts_phone_placeholder: "Номер телефона",
    contacts_date_placeholder: "Дата и время",
    contacts_guests_placeholder: "Количество гостей",
    contacts_btn_submit: "Отправить заявку",
    contacts_info_title: "Контактная информация",
    contacts_phone_label: "Телефон",
    contacts_address_label: "Адрес",
    contacts_address_val: "г. Манас (Джалал-Абадская область), Кыргызстан",
    contacts_hours_label: "Часы работы",
    contacts_hours_val: "Ежедневно: 09:00 - 23:00",
    
    // Footer
    footer_desc_val: "Премиальное кафе-ресторан в городе Манас. Современный интерьер, изысканный вкус и теплое гостеприимство.",
    footer_links_title: "Навигация",
    footer_contact_title: "Контакты",
    footer_all_rights: "Все права защищены."
  },
  en: {
    // Navigation
    nav_home: "Home",
    nav_menu: "Menu",
    nav_about: "About Us",
    nav_gallery: "Gallery",
    nav_contacts: "Contacts",
    
    // Home Page
    hero_title: "AYANT",
    hero_subtitle: "Cafe & Restaurant",
    hero_location: "Manas (formerly Jalal-Abad), Kyrgyzstan",
    hero_desc: "Where atmospheric design meets high-end cuisine and genuine hospitality. Discover the cozy warmth of modern minimalism.",
    hero_btn_menu: "Explore Menu",
    hero_btn_book: "Book a Table",
    hero_instruction: "Drag to rotate the 3D model of the cafe",
    
    atmosphere_subtitle: "Atmosphere",
    atmosphere_title: "Coziness in every detail",
    atmosphere_desc: "Our interior is woven from textures of natural wood, warm terracotta tones, and soft diffused light. We designed the space so that every guest feels privacy and peace.",
    
    grid_title_1: "Natural Wood",
    grid_desc_1: "The use of precious wood species in the trim creates a sense of warmth and unity with nature.",
    grid_title_2: "Terracotta Warmth",
    grid_desc_2: "Soft clay colors of furniture and walls fill the space with a feeling of sunlight.",
    grid_title_3: "Designer Lights",
    grid_desc_3: "Unique cylinder lamps create an intimate atmosphere during the evening hours.",
    grid_title_4: "Elegant Screens",
    grid_desc_4: "Wavy white curtains and wooden dividers zone the hall while maintaining light and air.",
    
    teaser_subtitle: "Our Kitchen",
    teaser_title: "Flavors for the sophisticated",
    teaser_desc: "The best dishes of national and European cuisine, freshly baked desserts, and premium specialty roasted coffee.",
    
    // Menu Page
    menu_title: "Our Menu",
    menu_desc: "Dishes prepared with love and expertise by our head chefs",
    menu_cat_kitchen: "Kitchen (Dishes)",
    menu_cat_dessert: "Desserts",
    menu_cat_coffee: "Coffee & Drinks",
    
    menu_item_lagman: "Ayant Lagman",
    menu_item_lagman_desc: "Hand-pulled noodles stir-fried with juicy meat, fresh vegetables, and eastern spices",
    menu_item_plov: "Festive Plov",
    menu_item_plov_desc: "Traditional Kyrgyz rice dish with premium grain, tender lamb, and sweet yellow carrots",
    menu_item_steak: "Ribeye Steak",
    menu_item_steak_desc: "Juicy grilled ribeye steak served with roasted seasonal vegetables and signature sauce",
    menu_item_manty: "Signature Manty",
    menu_item_manty_desc: "Steamed thin dough parcels filled with spiced minced lamb and onions",
    
    menu_item_cake: "Homemade Honey Cake",
    menu_item_cake_desc: "Classic layer cake with soft honey-infused sponge and velvety sour cream filling",
    menu_item_croissant: "French Croissant",
    menu_item_croissant_desc: "Freshly baked flaky butter croissant, served with chocolate or pastry cream filling",
    menu_item_cheesecake: "San Sebastian Cheesecake",
    menu_item_cheesecake_desc: "Crustless Basque-style creamy cheesecake with a burnt caramel exterior",
    
    menu_item_cappuccino: "Cappuccino",
    menu_item_cappuccino_desc: "Classic double espresso beverage topped with a smooth, velvety microfoam layer",
    menu_item_raf: "Lavender Raf",
    menu_item_raf_desc: "Creamy espresso drink sweetened with natural lavender syrup",
    menu_item_tea: "Sea Buckthorn Tea",
    menu_item_tea_desc: "Warming organic vitamin tea brewed with fresh sea buckthorn berries, honey, and ginger",
    
    // About Page
    about_intro_title: "Our Story",
    about_intro_desc: "Fusion of modern architecture and warm eastern hospitality",
    about_p1: "Cafe 'Ayant' is more than a restaurant. It is a gastronomic and cultural landmark in the town of Manas, designed as an oasis of comfort where people gather for slow conversations, business meetings, and exquisite food.",
    about_p2: "The building's architecture and interior design are inspired by raw natural materials and soft shapes. Every element — from the slatted wood partitions to the floating white fabric drapes — was chosen to foster harmony.",
    about_p3: "We pride ourselves on our strict sourcing of local farm products and the highest service standards. 'Ayant' is a place you want to return to.",
    
    // Gallery Page
    gallery_intro_title: "Atmosphere in Frames",
    gallery_intro_desc: "A visual journey through our cafe's interior captured through the lens",
    
    // Contacts Page
    contacts_intro_title: "Get In Touch",
    contacts_intro_desc: "Find us on the map or book your table online in just a few seconds",
    contacts_form_title: "Book a Table",
    contacts_name_placeholder: "Your name",
    contacts_phone_placeholder: "Phone number",
    contacts_date_placeholder: "Date & Time",
    contacts_guests_placeholder: "Number of guests",
    contacts_btn_submit: "Submit Reservation",
    contacts_info_title: "Contact Info",
    contacts_phone_label: "Phone",
    contacts_address_label: "Address",
    contacts_address_val: "Manas (Jalal-Abad region), Kyrgyzstan",
    contacts_hours_label: "Working Hours",
    contacts_hours_val: "Daily: 09:00 AM - 11:00 PM",
    
    // Footer
    footer_desc_val: "Premium cafe & restaurant in Manas. Modern design, exceptional taste, and warm hospitality.",
    footer_links_title: "Navigation",
    footer_contact_title: "Contacts",
    footer_all_rights: "All rights reserved."
  }
};

// Global variables
let currentLang = localStorage.getItem('ayant_lang') || 'ru';

// Initialize Language
function initLanguage() {
  // Bind click handlers to language switchers
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.target.getAttribute('data-lang');
      changeLanguage(selectedLang);
    });
  });
  
  // Set initial active state of flags
  updateLangUIActiveState(currentLang);
  translatePage(currentLang);
}

function updateLangUIActiveState(lang) {
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function changeLanguage(lang) {
  if (lang === currentLang) return;
  
  // Smooth transition fade-out/fade-in
  const mainContent = document.querySelector('main');
  if (mainContent) {
    mainContent.style.opacity = 0;
    setTimeout(() => {
      currentLang = lang;
      localStorage.setItem('ayant_lang', lang);
      updateLangUIActiveState(lang);
      translatePage(lang);
      mainContent.style.opacity = 1;
    }, 300);
  } else {
    currentLang = lang;
    localStorage.setItem('ayant_lang', lang);
    updateLangUIActiveState(lang);
    translatePage(lang);
  }
}

function translatePage(lang) {
  const dict = translations[lang];
  if (!dict) return;
  
  // Translate textContent
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  
  // Translate input placeholders
  const inputs = document.querySelectorAll('[data-translate-placeholder]');
  inputs.forEach(el => {
    const key = el.getAttribute('data-translate-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });
}

// Custom liquid-damping cursor
function initCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const cursorDot = document.querySelector('.custom-cursor-dot');
  
  if (!cursor || !cursorDot) return;
  
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Dot moves instantly
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });
  
  // Smooth ring tracking using linear interpolation (LERP)
  function renderCursor() {
    // Lerp factors
    cursorX += (mouseX - cursorX) * 0.12;
    cursorY += (mouseY - cursorY) * 0.12;
    
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    
    requestAnimationFrame(renderCursor);
  }
  renderCursor();
  
  // Hover effects on links/buttons
  const hoverables = document.querySelectorAll('a, button, .interactive');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  });
}

// Mobile navigation menu toggle
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const menu = document.querySelector('.mobile-nav-menu');
  
  if (!toggle || !menu) return;
  
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    menu.classList.toggle('open');
    
    if (menu.classList.contains('open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
}

// Page Wipe drape transitions
function initPageTransitions() {
  const transitionContainer = document.querySelector('.transition-panel-container');
  if (!transitionContainer) return;
  
  // Animate panels sliding back UP on load (open curtains)
  // We remove 'active' to let them slide up to translateY(-100%)
  // They start with active in the HTML to cover the screen
  window.addEventListener('load', () => {
    setTimeout(() => {
      transitionContainer.classList.remove('active');
    }, 100);
  });
  
  // Intercept navigation links
  const navLinks = document.querySelectorAll('a:not([target="_blank"]):not([href^="#"]):not([href^="mailto"]):not([href^="tel"])');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const destination = link.getAttribute('href');
      if (!destination || destination === '') return;
      
      e.preventDefault();
      
      // Close mobile menu if open
      const toggle = document.querySelector('.mobile-nav-toggle');
      const menu = document.querySelector('.mobile-nav-menu');
      if (menu && menu.classList.contains('open')) {
        toggle.classList.remove('open');
        menu.classList.remove('open');
        document.body.style.overflow = '';
      }
      
      // Trigger curtains slide-down
      transitionContainer.classList.add('active');
      
      // Wait for animation to finish covering before loading next page
      setTimeout(() => {
        window.location.href = destination;
      }, 1050); // Matches CSS transition time + stagger
    });
  });
}

// Header scrolled styling
function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Three.js Procedural 3D Cafe model
function initThreeScene() {
  const container = document.getElementById('building-canvas');
  if (!container) return;
  
  // Dynamic sizing
  let width = container.clientWidth;
  let height = container.clientHeight;
  
  // Scene
  const scene = new THREE.Scene();
  
  // Camera
  const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
  camera.position.set(16, 12, 22);
  
  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);
  
  // OrbitControls (manual implementation or using unpkg loaded object)
  let controls;
  if (typeof THREE.OrbitControls !== 'undefined') {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.05; // don't go below ground
    controls.minDistance = 10;
    controls.maxDistance = 45;
  }
  
  // Colors for styling
  const colors = {
    cream: 0xEEE8DD,
    darkGray: 0x2A2A2A,
    glass: 0x4A585A,
    wood: 0x6E4C38,
    green: 0x4D6D53,
    grass: 0xEAE2D5,
    glow: 0xFFD899
  };
  
  // 3D Cafe building group
  const cafeGroup = new THREE.Group();
  scene.add(cafeGroup);
  
  // Ground plate
  const groundGeo = new THREE.BoxGeometry(22, 0.4, 22);
  const groundMat = new THREE.MeshStandardMaterial({ color: colors.grass, roughness: 0.9 });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.position.y = -0.2;
  ground.receiveShadow = true;
  cafeGroup.add(ground);
  
  // 1. Main building structure
  const mainGeo = new THREE.BoxGeometry(12, 4.2, 10);
  const mainMat = new THREE.MeshStandardMaterial({ color: colors.cream, roughness: 0.8 });
  const mainBuilding = new THREE.Mesh(mainGeo, mainMat);
  mainBuilding.position.set(0, 2.1, -1);
  mainBuilding.castShadow = true;
  mainBuilding.receiveShadow = true;
  cafeGroup.add(mainBuilding);
  
  // 2. Back extension (kitchen area)
  const extGeo = new THREE.BoxGeometry(5, 3.2, 5);
  const extBuilding = new THREE.Mesh(extGeo, mainMat);
  extBuilding.position.set(-4.5, 1.6, -6.5);
  extBuilding.castShadow = true;
  extBuilding.receiveShadow = true;
  cafeGroup.add(extBuilding);
  
  // 3. Flat roof trim (overhanging slab)
  const roofGeo = new THREE.BoxGeometry(12.6, 0.3, 10.6);
  const roofMat = new THREE.MeshStandardMaterial({ color: colors.darkGray, roughness: 0.5 });
  const roof = new THREE.Mesh(roofGeo, roofMat);
  roof.position.set(0, 4.35, -1);
  roof.castShadow = true;
  cafeGroup.add(roof);
  
  // 4. Large front glass panels (left and right of center canopy)
  const glassGeoL = new THREE.BoxGeometry(4.2, 3.2, 0.2);
  const glassMat = new THREE.MeshStandardMaterial({
    color: colors.glass,
    roughness: 0.1,
    metalness: 0.9,
    transparent: true,
    opacity: 0.8
  });
  
  const glassLeft = new THREE.Mesh(glassGeoL, glassMat);
  glassLeft.position.set(-3.2, 1.8, 4.05);
  cafeGroup.add(glassLeft);
  
  const glassRight = new THREE.Mesh(glassGeoL, glassMat);
  glassRight.position.set(3.2, 1.8, 4.05);
  cafeGroup.add(glassRight);
  
  // Glass mullions (mullions / vertical framing)
  for (let i = -5; i <= -1; i += 1.5) {
    const mullGeo = new THREE.BoxGeometry(0.1, 3.2, 0.3);
    const mullMat = new THREE.MeshStandardMaterial({ color: colors.darkGray });
    const mull = new THREE.Mesh(mullGeo, mullMat);
    mull.position.set(i, 1.8, 4.1);
    cafeGroup.add(mull);
  }
  for (let i = 1; i <= 5; i += 1.5) {
    const mullGeo = new THREE.BoxGeometry(0.1, 3.2, 0.3);
    const mullMat = new THREE.MeshStandardMaterial({ color: colors.darkGray });
    const mull = new THREE.Mesh(mullGeo, mullMat);
    mull.position.set(i, 1.8, 4.1);
    cafeGroup.add(mull);
  }
  
  // 5. Central Entrance Canopy
  const canopyGeo = new THREE.BoxGeometry(3.2, 1.2, 2.5);
  const canopyMat = new THREE.MeshStandardMaterial({ color: colors.darkGray, roughness: 0.4 });
  const canopy = new THREE.Mesh(canopyGeo, canopyMat);
  canopy.position.set(0, 3.3, 4.8);
  canopy.castShadow = true;
  cafeGroup.add(canopy);
  
  // Columns for canopy
  const colGeo = new THREE.CylinderGeometry(0.15, 0.15, 2.7);
  const colLeft = new THREE.Mesh(colGeo, mainMat);
  colLeft.position.set(-1.4, 1.35, 5.8);
  colLeft.castShadow = true;
  cafeGroup.add(colLeft);
  
  const colRight = new THREE.Mesh(colGeo, mainMat);
  colRight.position.set(1.4, 1.35, 5.8);
  colRight.castShadow = true;
  cafeGroup.add(colRight);
  
  // Entrance stairs
  for (let i = 0; i < 3; i++) {
    const stepGeo = new THREE.BoxGeometry(3.6 - (i * 0.4), 0.15, 1.2 + (i * 0.2));
    const step = new THREE.Mesh(stepGeo, mainMat);
    step.position.set(0, 0.075 + (i * 0.15), 5.4 - (i * 0.1));
    step.receiveShadow = true;
    cafeGroup.add(step);
  }
  
  // Signboard canvas texture ("АЯНТ")
  const signCanvas = document.createElement('canvas');
  signCanvas.width = 512;
  signCanvas.height = 128;
  const ctx = signCanvas.getContext('2d');
  
  // Draw background
  ctx.fillStyle = '#1F1A17';
  ctx.fillRect(0, 0, 512, 128);
  // Gold frame
  ctx.strokeStyle = '#C5A880';
  ctx.lineWidth = 6;
  ctx.strokeRect(10, 10, 492, 108);
  // Logo Circle
  ctx.beginPath();
  ctx.arc(60, 64, 30, 0, Math.PI * 2);
  ctx.strokeStyle = '#C5A880';
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.fillStyle = '#C5A880';
  ctx.font = 'bold 24px Playfair Display, Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('A', 60, 64);
  // Text "А Я Н Т"
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 58px Playfair Display, Georgia, serif';
  ctx.fillText('АЯНТ', 280, 64);
  
  const signTexture = new THREE.CanvasTexture(signCanvas);
  const signGeo = new THREE.PlaneGeometry(2.4, 0.6);
  const signMat = new THREE.MeshBasicMaterial({ map: signTexture });
  const signboard = new THREE.Mesh(signGeo, signMat);
  signboard.position.set(0, 3.3, 6.06);
  cafeGroup.add(signboard);
  
  // 6. Tree in front
  const treeGroup = new THREE.Group();
  treeGroup.position.set(3.5, 0, 7.5);
  cafeGroup.add(treeGroup);
  
  // Trunk
  const trunkGeo = new THREE.CylinderGeometry(0.18, 0.25, 3.2, 8);
  const trunkMat = new THREE.MeshStandardMaterial({ color: colors.wood, roughness: 0.9 });
  const trunk = new THREE.Mesh(trunkGeo, trunkMat);
  trunk.position.y = 1.6;
  trunk.castShadow = true;
  treeGroup.add(trunk);
  
  // Leaves (stylized layered low-poly spheres)
  const leavesMat = new THREE.MeshStandardMaterial({ color: colors.green, roughness: 0.8, flatShading: true });
  
  const leaf1 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.4, 1), leavesMat);
  leaf1.position.set(0, 3.8, 0);
  leaf1.castShadow = true;
  treeGroup.add(leaf1);
  
  const leaf2 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.0, 1), leavesMat);
  leaf2.position.set(-0.6, 4.4, 0.4);
  leaf2.castShadow = true;
  treeGroup.add(leaf2);
  
  const leaf3 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.9, 1), leavesMat);
  leaf3.position.set(0.5, 4.5, -0.3);
  leaf3.castShadow = true;
  treeGroup.add(leaf3);
  
  // Light posts and plants
  // Minimalist flower beds along the windows
  const bedGeoL = new THREE.BoxGeometry(4.2, 0.3, 1.2);
  const bedMat = new THREE.MeshStandardMaterial({ color: colors.darkGray });
  const bedL = new THREE.Mesh(bedGeoL, bedMat);
  bedL.position.set(-3.2, 0.15, 5.0);
  bedL.castShadow = true;
  cafeGroup.add(bedL);
  
  const bedR = new THREE.Mesh(bedGeoL, bedMat);
  bedR.position.set(3.2, 0.15, 5.0);
  bedR.castShadow = true;
  cafeGroup.add(bedR);
  
  // Small plants inside beds
  for (let i = -4.8; i <= -1.6; i += 0.8) {
    const bush = new THREE.Mesh(new THREE.DodecahedronGeometry(0.25, 0), leavesMat);
    bush.position.set(i, 0.4, 5.0);
    bush.castShadow = true;
    cafeGroup.add(bush);
  }
  for (let i = 1.6; i <= 4.8; i += 0.8) {
    const bush = new THREE.Mesh(new THREE.DodecahedronGeometry(0.25, 0), leavesMat);
    bush.position.set(i, 0.4, 5.0);
    bush.castShadow = true;
    cafeGroup.add(bush);
  }
  
  // 7. Lighting
  // Ambient soft warm
  const ambientLight = new THREE.AmbientLight(0xFFF5EA, 0.7);
  scene.add(ambientLight);
  
  // Sun directional light
  const sunLight = new THREE.DirectionalLight(0xFFE8D0, 1.3);
  sunLight.position.set(15, 20, 10);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 1024;
  sunLight.shadow.mapSize.height = 1024;
  sunLight.shadow.bias = -0.001;
  scene.add(sunLight);
  
  // Warm orange glow under canopy (pointlight)
  const canopyLight = new THREE.PointLight(colors.glow, 2.5, 6);
  canopyLight.position.set(0, 2.6, 5.2);
  canopyLight.castShadow = true;
  scene.add(canopyLight);
  
  // Yellow interior glow lights inside windows
  const interiorLightL = new THREE.PointLight(colors.glow, 1.5, 8);
  interiorLightL.position.set(-3, 1.8, 2.5);
  scene.add(interiorLightL);
  
  const interiorLightR = new THREE.PointLight(colors.glow, 1.5, 8);
  interiorLightR.position.set(3, 1.8, 2.5);
  scene.add(interiorLightR);
  
  // Orbit/Rotate logic
  let mouseMoveX = 0;
  let mouseMoveY = 0;
  
  window.addEventListener('mousemove', (e) => {
    // Normalized coords (-0.5 to 0.5)
    mouseMoveX = (e.clientX / window.innerWidth) - 0.5;
    mouseMoveY = (e.clientY / window.innerHeight) - 0.5;
  });
  
  // Animation loop
  const clock = new THREE.Clock();
  
  function animate() {
    requestAnimationFrame(animate);
    
    const elapsedTime = clock.getElapsedTime();
    
    // Slow default rotation if controls not active/interacting
    if (!controls || !controls.state === -1) {
      cafeGroup.rotation.y = elapsedTime * 0.05;
    } else if (controls) {
      controls.update();
    }
    
    // Light camera tilt based on mouse movement (parallax)
    if (!controls) {
      camera.position.x = 16 + (mouseMoveX * 8);
      camera.position.y = 12 + (mouseMoveY * 6);
      camera.lookAt(0, 2, 0);
    }
    
    renderer.render(scene, camera);
  }
  animate();
  
  // Handle Resize
  window.addEventListener('resize', () => {
    width = container.clientWidth;
    height = container.clientHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    
    renderer.setSize(width, height);
  });
}

// Form Submission handling
function initReservationForm() {
  const form = document.getElementById('reservation-form');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      const originalText = submitBtn.textContent;
      submitBtn.textContent = currentLang === 'kg' ? 'Жөнөтүлүүдө...' : currentLang === 'en' ? 'Sending...' : 'Отправка...';
      submitBtn.disabled = true;
      
      // Simulate API submit
      setTimeout(() => {
        alert(currentLang === 'kg' ? 'Ээлөөңүз ийгиликтүү кабыл алынды!' : currentLang === 'en' ? 'Your booking has been successfully received!' : 'Ваше бронирование успешно принято!');
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1500);
    }
  });
}

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initCursor();
  initMobileMenu();
  initPageTransitions();
  initHeaderScroll();
  initThreeScene();
  initReservationForm();
});
