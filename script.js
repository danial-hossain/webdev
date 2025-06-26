// script.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleBtn");

  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
  });
});
