
document.addEventListener("DOMContentLoaded", function(event) {
  console.log('DOM loaded.');
});

let maxWidth = matchMedia("(max-width: 700px)");
let buttonIcon = document.getElementById('nav-icon');
let burgerIcon = 'fa-bars';
let crossIcon = 'fa-times';

maxWidth.addListener(function() {
  buttonIcon.classList.remove(crossIcon);
});

let toggleIcon = function() {
  this.classList.toggle(crossIcon);
};

buttonIcon.addEventListener('click', toggleIcon);
