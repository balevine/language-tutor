function getCue(cues) {
  var length = cues.length - 1;
  var randomValue = Math.floor(Math.random() * (length + 1));
  var cue = cues[randomValue];
  return cue;
}

function newCue() {
  var cueDiv = document.getElementById("cue");
  var tenseDiv = document.getElementById("tense");

  cueDiv.innerHTML = "";
  tenseDiv.innerHTML = "";

  var personCue = getCue(person());
  var numberCue = getCue(number());
  var tenseCue = getCue(tense());

  cueDiv.innerHTML = personCue + " " + numberCue;
  tenseDiv.innerHTML = tenseCue;
}

function init() {
  var button = document.getElementById("cueButton");
  button.onclick = newCue;
}

window.onload = init;
