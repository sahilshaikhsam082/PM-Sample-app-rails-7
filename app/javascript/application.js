// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
//= require rails-ujs
// Place this inside your app/javascript/packs/application.js
document.addEventListener('turbolinks:load', function() {
  // Get the side nav element
  var sideNav = document.querySelector('.side-nav');
  
  var isDragging = false;
  var offsetX, offsetY;

  // Function to start dragging
  function startDrag(e) {
    isDragging = true;
    offsetX = e.clientX - sideNav.getBoundingClientRect().left;
    offsetY = e.clientY - sideNav.getBoundingClientRect().top;
  }

  // Function to stop dragging
  function stopDrag() {
    isDragging = false;
  }

  // Function to move the side nav while dragging
  function drag(e) {
    if (isDragging) {
      sideNav.style.left = (e.clientX - offsetX) + 'px';
      sideNav.style.top = (e.clientY - offsetY) + 'px';
    }
  }

  // Event listeners for mouse events
  sideNav.addEventListener('mousedown', startDrag);
  document.addEventListener('mouseup', stopDrag);
  document.addEventListener('mousemove', drag);
});
