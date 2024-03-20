document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');

  const elementsToToggle = [
    document.body, 
    ...document.querySelectorAll('.bg-image, .intro-text, .form-label, .go-back, .bokning-bg, .landing-image-2')
  ];
  // Lägg till lyssnare för klick på dark mode-toggle
  darkModeToggle.addEventListener('change', () => toggleDarkMode(elementsToToggle));

  // Kontrollera och uppdatera dark mode vid sidans laddning
  checkDarkMode(darkModeToggle, elementsToToggle);

  // Lägg till lyssnare för sidans avslutning (när användaren navigerar till en annan sida)
  window.addEventListener('beforeunload', () => {
    saveDarkModeState(darkModeToggle);
  });
});

  function toggleDarkMode(elements) {
    const darkModeToggle = elements[0]; // Dark mode toggle is assumed to be the first element
    const isDarkMode = darkModeToggle.checked;
  
    elements.slice(1).forEach(element => {
      if (element) {
        element.classList.toggle('light-mode', isDarkMode);
      }
    });
  }
  
  function checkDarkMode(darkModeToggle, elements) {
    const storedDarkModeState = getDarkModeState();
  
    if (storedDarkModeState !== null) {
      darkModeToggle.checked = storedDarkModeState;
      elements.slice(1).forEach(element => {
        if (element) {
          element.classList.toggle('light-mode', storedDarkModeState);
        }
      });
    }
  }
  
  function saveDarkModeState(darkModeToggle) {
    const isDarkMode = darkModeToggle.checked;
    localStorage.setItem('darkModeState', JSON.stringify(isDarkMode));
  }
  
  function getDarkModeState() {
    const storedState = localStorage.getItem('darkModeState');
    return storedState !== null ? JSON.parse(storedState) : null;
  }