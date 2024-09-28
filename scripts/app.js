let navLinks = document.querySelector('.nav-links');

function showMenu() {
  navLinks.style.right = '0';
  console.log('showing menu');
}
function hideMenu() {
  navLinks.style.right = '-200px';
  console.log('hiding menu');
}

document.addEventListener('click', function(event) {
    // Check if the click target is outside the navLinks div
    if (event.target.innerText === "menu") {
      showMenu();
    } 
    else if (!navLinks.contains(event.target)) {
    hideMenu();
    }
  });

console.log(navLinks);