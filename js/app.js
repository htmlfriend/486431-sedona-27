var btnChoice = document.querySelector("#choice");
if (btnChoice) {
  btnChoice.addEventListener("click", function(event) {
    event.preventDefault();
    var choiceForm = document.querySelector("#formChoice");
    closePopup(choiceForm, "hide");
  });
  function closePopup(elem, atrr) {
    elem.classList.toggle(atrr);
  }
}
("use strict");

var slider = document.querySelector("#cost");
var output = document.querySelector("#value-to");
if (output) {
  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
  };

  slider.addEventListener("mousemove", function() {
    var x = slider.value / 30 + "%";
    var color =
      "linear-gradient(90deg,rgb(10,10,10)" +
      x +
      ", rgb(214,214,214)" +
      x +
      ")";
    slider.style.background = color;
  });
}
var minusBtnChildren = document.querySelector("#minus-children");
var plusBtnChildren = document.querySelector("#plus-children");
var field = document.querySelector("#appointment-children");
if (minusBtnChildren) {
  minusBtnChildren.addEventListener("click", function(e) {
    e.preventDefault();
    field.value = parseInt(field.value) - 1;
  });
  plusBtnChildren.addEventListener("click", function(e) {
    e.preventDefault();
    field.value = parseInt(field.value) + 1;
  });
}
var minusBtnAdult = document.querySelector("#minus-adult");
var plusBtnAdult = document.querySelector("#plus-adult");
var fieldAdult = document.querySelector("#appointment-adult");
if (minusBtnAdult) {
  minusBtnAdult.addEventListener("click", function() {
    fieldAdult.value = parseInt(fieldAdult.value) - 1;
  });
  plusBtnAdult.addEventListener("click", function() {
    fieldAdult.value = parseInt(fieldAdult.value) + 1;
  });
}
