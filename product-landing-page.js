
document.addEventListener("DOMContentLoaded", function(event) {
  console.log('DOM loaded.');
});

let maxWidth = matchMedia("(max-width: 700px)");
let buttonIcon = document.getElementById('nav-icon');
let burgerIcon = 'fa-bars';
let crossIcon = 'fa-times';
let show = 'inherit';
let hide = 'none';
let fadeIn = 'fade-in';
let navItems = document.querySelectorAll('.nav-list > li');
let navButtonsHidden = true;

let showMenu = (parent, state) => {
  parent.forEach((element) => {
    element.style.display = state;
  });
};

let addClass = (parent, state) => {
  parent.forEach((element) => {
      element.classList.add(state);
  });
};

let resetNav = () => {
  buttonIcon.classList.remove(crossIcon);
  maxWidth.matches ? showMenu(navItems, hide) : showMenu(navItems, show);
  navButtonsHidden = true;
};

let toggleIcon = function() {
  this.classList.toggle(crossIcon);

  if (navButtonsHidden) {
    showMenu(navItems, show);
    addClass(navItems, fadeIn);
    navButtonsHidden = false;
  } else {
      showMenu(navItems, hide);
      navButtonsHidden = true;
    }
  };

buttonIcon.addEventListener('click', toggleIcon);
maxWidth.addListener(resetNav);
