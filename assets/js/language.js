

// Define translations for different languages
const translations = {
  en: {
    greeting: '',
    morning: 'Good Morning,',
    afternoon: 'Good Afternoon,',
    evening: 'Good Evening,',
  },
  sw: {
    greeting: '',
    morning: 'Habari za Asubuhi,',
    afternoon: 'Habari za Mchana,',
    evening: 'Habari za Jioni,',
  },
};

// Function to update the content based on the selected language
function updateContent(language) {
  // Get the element where you want to display the content
  var contentContainer = document.getElementById('contentContainer');

  // Get the current hour
  var currentHour = new Date().getHours();

  // Update the content based on the selected language and time of day
  contentContainer.textContent = `${translations[language].greeting} ${
    currentHour < 12
      ? translations[language].morning
      : currentHour < 18
      ? translations[language].afternoon
      : translations[language].evening
  }`;

  // Save the selected language to local storage
  localStorage.setItem('greetingselectedLanguage', language);
}

// Function to get the stored language from local storage or default to English
function getStoredLanguage() {
  return localStorage.getItem('greetingselectedLanguage') || 'sw';
}

// Call updateContent initially with the stored language or default to English
updateContent(getStoredLanguage());











//code for changing language
const englishBtn = document.getElementById('englishBtn');
const swahiliBtn = document.getElementById('swahiliBtn');
const elementsToTranslate = document.querySelectorAll('.translate');

// Function to set language
function setLanguage(language) {
  elementsToTranslate.forEach(element => {
    if (language === 'english') {
      element.textContent = element.getAttribute('data-en');
      englishBtn.style.color = 'red'
      swahiliBtn.style.color = 'black'
    } else if (language === 'swahili') {
      element.textContent = element.getAttribute('data-sw');
      englishBtn.style.color = 'black'
      swahiliBtn.style.color = 'red'
    }
  });

  // Store selected language in local storage
  localStorage.setItem('selectedLanguage', language);
}

// Check if language is stored in local storage and apply
const storedLanguage = localStorage.getItem('selectedLanguage');
if (storedLanguage) {
  setLanguage(storedLanguage);
}

// Event listeners for language buttons
englishBtn.addEventListener('click', () => {
  setLanguage('english');
});

swahiliBtn.addEventListener('click', () => {
  setLanguage('swahili');
});






  










