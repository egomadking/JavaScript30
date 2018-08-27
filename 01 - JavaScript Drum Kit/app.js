var buttons = document.getElementsByClassName('key');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickButton);
}

function clickButton() {
  var code = this.getAttribute('data-key');
}

window.addEventListener('keydown', function () {
  var code = this.event.keyCode;
});

//function that uses the values to
//play the sounds and set a class
//.playing to the button being used