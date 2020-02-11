var btnChoice = document.querySelector("#choice");
if (btnChoice) {
  btnChoice.addEventListener("click", function(event) {
    event.preventDefault(event);
    var choiceForm = document.querySelector("#formChoice");
    closePopup(choiceForm, "hide");
  });
  function closePopup(elem, atrr) {
    elem.classList.toggle(atrr);
  }
}
"use strict";

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
var orderNow = document.querySelectorAll(".btn-handler");
var modal = document.querySelector("#modal");
// var modalInnerBtn = document.querySelector("#modal-inner-btn");
orderNow.forEach(function(elem) {
  elem.addEventListener("click", function() {
    modal.classList.add("active");
  });
});
// $('.button').on('click', function () {
//     $('.login').addClass('loading').delay(2200).queue(function () {
//         $(this).addClass('active')
//     });
// });
// modalInnerBtn.addEventListener("click", function(e) {
//   e.preventDefault();
//   console.log("click");
//   var modalLogin = document.querySelector("#modal-login");
//   modalLogin.classList.toggle("loading");
// });

var txtb = document.querySelectorAll(".modal__label");
txtb.forEach(function(elem) {
  elem.addEventListener("focusin", function() {
    elem.children[0].classList.add("focus");
  });
});

txtb.forEach(function(elem) {
  elem.addEventListener("focusout", function() {
    if (elem.children[0].className == "focus" && elem.children[0].value == "") {
      elem.children[0].classList.remove("focus");
    }
  });
});

var modalCloseBtn = document.querySelector("#modal-close-btn");
if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", function() {
    modal.classList.remove("active");
  });
}
// $('.txtb input').on('blur', function () {
//     if ($(this).val() == "")
//         $(this).removeClass('focus');
// });

// var x = document.getElementById("myForm");
// x.addEventListener("focusin", myFocusFunction);
// x.addEventListener("focusout", myBlurFunction);

// function myFocusFunction() {
//   document.getElementById("myInput").style.backgroundColor = "yellow";
// }

// function myBlurFunction() {
//   document.getElementById("myInput").style.backgroundColor = "";
// }