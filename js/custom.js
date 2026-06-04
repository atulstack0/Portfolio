"use strict";

const colorModeToggle = document.querySelector('.color-mode');
if (colorModeToggle) {
  colorModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  });
}
