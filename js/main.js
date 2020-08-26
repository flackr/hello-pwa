window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

window.addEventListener('keyup', log);
window.addEventListener('keydown', log);
window.addEventListener('keypress', log);

navigator.keyboard.lock().then(() => {console.log('keyboard locked');});

function log(evt) {
  let log = document.getElementById('log');
  log.textContent = evt.type + ' (keycode ' + evt.keyCode + ')\n' + log.textContent;
  evt.preventDefault();
  evt.stopPropagation();
}
