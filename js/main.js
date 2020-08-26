window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

document.body.addEventListener('keyup', log);
document.body.addEventListener('keydown', log);
document.body.addEventListener('keypress', log);

function log(evt) {
  let log = document.getElementById('log');
  log.textContent = evt.type + ' (keycode ' + evt.keyCode + ')\n' + log.textContent;
  evt.preventDefault();
  evt.stopPropagation();
}
