
document.addEventListener("DOMContentLoaded", function(event) {
  console.log('DOM loaded.');
});

let buttonIcon = document.getElementById('nav-icon');
let toggleIcon = function() {
  console.log('cake!');
  this.classList.toggle('fa-times');
  this.classList.toggle('fa-bars');
}

buttonIcon.addEventListener('click', toggleIcon);
