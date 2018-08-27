var buttons = document.getElementsByClassName('key');
var sounds = document.getElementsByTagName('audio');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (e) {
    var code = this.getAttribute('data-key');
    playSound(code);
  });
}

window.addEventListener('keydown', function () {
  var code = this.event.keyCode;
  playSound(code);
});

function playSound(code) {
  var codeNum = code.toString();
  for (var i = 0; i < sounds.length; i++) {
    sounds[i].pause();
    sounds[i].currentTime = 0;
    buttons[i].classList.remove('playing');
    if (codeNum === sounds[i].dataset.key) {
      sounds[i].play();
      sounds[i].addEventListener('ended', stopSound);
    }
    if (codeNum === buttons[i].dataset.key) {
      buttons[i].classList.add('playing');
    }
  }
}

function stopSound(event) {
  var key = this.dataset.key;
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].dataset.key === key) {
      buttons[i].classList.remove('playing');
    }
  }
}