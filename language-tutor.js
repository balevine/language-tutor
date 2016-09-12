function getCue(cues) {
  var length = cues.length - 1;
  var randomValue = Math.floor(Math.random() * (length + 1));
  var cue = cues[randomValue];
  return cue;
}

function newCue() {
  var verbElement = document.getElementById("verb");
  var formElement = document.getElementById("form");
  var tenseElement = document.getElementById("tense");

  verbElement.innerHTML = "";
  formElement.innerHTML = "";
  tenseElement.innerHTML = "";

  var verbCue = getCue(verb());
  var personCue = getCue(person());
  var tenseCue = getCue(tense());

  verbElement.innerHTML = verbCue;
  formElement.innerHTML = personCue;
  tenseElement.innerHTML = tenseCue;

  var button = document.getElementById("cueButton");
  button.innerHTML = "Dammi un altro!"
}

function init() {
  var button = document.getElementById("cueButton");
  button.onclick = newCue;
}

window.onload = init;
