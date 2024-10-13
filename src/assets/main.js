/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

  
/*=============== CHANGE BACKGROUND HEADER ===============*/

const bgHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)
/*=============== DARK LIGHT THEME ===============*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollUp class
    window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                          : scrollUp.classList.remove('show-scroll');
  };
  window.addEventListener('scroll', scrollUp);


  /*=============== SERVICES MODAL ===============*/
const modal = document.querySelectorAll('.services__modal'),
modalButton = document.querySelectorAll('.services__button'),
modalClose = document.querySelectorAll('.services__modal-close')

let activeModal = (modalClick)=>{
modal[modalClick].classList.add('active-modal')
}
for (let i = 0; i < modalButton.length; i++) {
modalButton[i].addEventListener('click', function() {
activeModal(i);
});
}
for (let i = 0; i < modalClose.length; i++) {
modalClose[i].addEventListener('click', function() {
for (let j = 0; j < modal.length; j++) {
modal[j].classList.remove('active-modal');
}
});
}


/*=============== EMAIL JS ===============*/
const contactForm =document.querySelector("#contact-form"),
      contactMessage=document.querySelector('#contact-message');

const sendEmail = (e) => {
  e.preventDefault();
  // serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_05aa6rk','template_h3e0r1k','#contact-form','elVkuz72e3FtpQ-CH').
  then(()=>{
     // Show sent message
     contactMessage.textContent="Message sent successfully ✅"

     // Remove message after five seconds
    setTimeout(()=>{
      contactMessage.textContent='';
    },5000)
     // Clear input fields
    contactForm.reset();
     // Show error message
        // Message not sent (service error) ❌
  }, ()=>{
    contactMessage.textContent='Message not sent (service error) ❌';
  })
}
contactForm.addEventListener('submit',sendEmail);
