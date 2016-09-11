function getCue(cues) {
  var length = cues.length - 1;
  var randomValue = Math.floor(Math.random() * (length + 1));
  var cue = cues[randomValue];
  return cue;
}

function newCue() {
  var formElement = document.getElementById("form");
  var tenseElement = document.getElementById("tense");

  formElement.innerHTML = "";
  tenseElement.innerHTML = "";

  var personCue = getCue(person());
  var numberCue = getCue(number());
  var tenseCue = getCue(tense());

  formElement.innerHTML = personCue + " " + numberCue;
  tenseElement.innerHTML = tenseCue;
}

function init() {
  var button = document.getElementById("cueButton");
  button.onclick = newCue;
}

window.onload = init;
