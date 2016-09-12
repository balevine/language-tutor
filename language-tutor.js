function createTenseSettings() {
  var tenses = tense();
  tenses.forEach(function(tenses, index) {
    var settings = document.getElementById("settings")

    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "checkbox" + index;
    checkbox.value = tenses;
    checkbox.id = "checkbox" + index;

    settings.appendChild(checkbox);

    document.getElementById(checkbox.id).checked = true;

    var newlabel = document.createElement("label");
    newlabel.setAttribute("for",checkbox.id);
    newlabel.innerHTML = tenses;
    settings.appendChild(newlabel);

    var linebreak = document.createElement("br");
    settings.appendChild(linebreak);

  });
}

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
  createTenseSettings();
}

window.onload = init;
