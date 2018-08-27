//TODO how to stop already playing sound

var buttons = document.getElementsByClassName('key');
var sounds = document.getElementsByTagName('audio');
var playing;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(){
    var code = this.getAttribute('data-key');
    playSound(code);
  });
}

window.addEventListener('keydown', function () {
  var code = this.event.keyCode;
  playSound(code);
});

function playSound(code){
  var code = code.toString();
  for(var i=0; i<sounds.length; i++){
    if (code === sounds[i].dataset.key){
      sounds[i].play();
      sounds[i].addEventListener('ended', function() {
        buttons[i].classList.remove('playing'); // here i prob
      });
    }
    if(code === buttons[i].dataset.key){
      buttons[i].classList.add('playing');
    }
  }
  //set temp class
}