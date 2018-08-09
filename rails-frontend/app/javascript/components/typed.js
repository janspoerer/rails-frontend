import Typed from 'typed.js';

// Function definition
function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Change your life", "Learn to code"],
    typeSpeed: 500,
    loop: true
  });
}


// Function EXPORT
export { loadDynamicBannerText };
