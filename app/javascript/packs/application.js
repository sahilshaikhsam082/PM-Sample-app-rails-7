// Place this inside your app/javascript/packs/application.js
document.addEventListener('turbolinks:load', function() {
  var sideNav = document.querySelector('.side-nav');
  var offsetX, offsetY;
  
  // Function to start dragging
  function startDrag(e) {
    offsetX = e.clientX - sideNav.getBoundingClientRect().left;
    offsetY = e.clientY - sideNav.getBoundingClientRect().top;
  }

  // Function to move the side nav while dragging
  function drag(e) {
    sideNav.style.left = (e.clientX - offsetX) + 'px';
    sideNav.style.top = (e.clientY - offsetY) + 'px';
  }
  console.log("working")

  // Event listeners for mouse events
  sideNav.addEventListener('mousedown', startDrag);
  document.addEventListener('mousemove', drag);

  // Save coordinates to localStorage when form is dropped
  document.addEventListener('mouseup', function() {
    localStorage.setItem('sideNavLeft', sideNav.style.left);
    localStorage.setItem('sideNavTop', sideNav.style.top);
  });

  // Retrieve coordinates from localStorage and set them on page load
  var savedLeft = localStorage.getItem('sideNavLeft');
  var savedTop = localStorage.getItem('sideNavTop');
  if (savedLeft && savedTop) {
    sideNav.style.left = savedLeft;
    sideNav.style.top = savedTop;
  }
});
