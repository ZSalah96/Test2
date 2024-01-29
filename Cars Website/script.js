//js
function toggleDarkMode() {
    var body = document.body;
    var navigation=document.getElementsByClassName('navigation');
    

    // Toggle dark mode by adding/removing the 'dark-mode' class
    body.classList.toggle('dark-mode');
    navigation.classList.toggle('dark-mode');
  }


