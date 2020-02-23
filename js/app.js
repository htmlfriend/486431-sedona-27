window.addEventListener("DOMContentLoaded", function() {
  var minusBtnAdult = document.querySelector("#minus-adult");
  var plusBtnAdult = document.querySelector("#plus-adult");
  var fieldAdult = document.querySelector("#appointment-adult");
  var minusChildren = document.querySelector("#minus-children");
  var plusBtnChildren = document.querySelector("#plus-children");
  var field = document.querySelector("#appointment-children");

  var choiceBtn = document.querySelector("#choice");
  var slider = document.querySelector("#range");
  var output = document.querySelector("#value-to");
  var orderNow = document.querySelectorAll(".btn-handler");
  var modal = document.querySelector("#modal");
  var storage = localStorage.getItem("appointments");
  if (choiceBtn) {
    choiceBtn.addEventListener("click", function(event) {
      event.preventDefault();
      var choiceForm = document.querySelector("#formChoice");
      var sendBtn = choiceForm.querySelector("#sendBtn");
      closePopup(choiceForm, "hide");
      var appointmentDate = choiceForm.querySelector("#appointment-date");
      appointmentDate.focus();

      var appointmentDateOut = choiceForm.querySelector(
        "#appointment-data-out"
      );
      minusChildren.addEventListener("click", function() {
        field.value = parseInt(field.value) - 1;
      });
      plusBtnChildren.addEventListener("click", function() {
        field.value = parseInt(field.value) + 1;
      });

      minusBtnAdult.addEventListener("click", function() {
        fieldAdult.value = parseInt(fieldAdult.value) - 1;
      });
      plusBtnAdult.addEventListener("click", function() {
        fieldAdult.value = parseInt(fieldAdult.value) + 1;
      });
      sendBtn.addEventListener("click", function(event) {
        event.preventDefault();
        if (appointmentDate.value != "") {
          appointmentDate.classList.remove("error-message");
          if (appointmentDateOut.value != "") {
            appointmentDateOut.classList.remove("error-message");
            if (fieldAdult.value > 0) {
              fieldAdult.classList.remove("error-message");
              choiceForm.submit();
            } else {
              fieldAdult.classList.add("error-message");
            }
          } else {
            appointmentDateOut.classList.add("error-message");
          }
        } else {
          appointmentDate.classList.add("error-message");
        }
      });
    });
  }

  if (!!slider && !!output) {
    output.value = slider.value;
    slider.oninput = function() {
      output.value = this.value;
    };
    slider.style.background = fillColor();
    slider.addEventListener("mousemove", fillColor);
  }

  orderNow.forEach(function(elem) {
    elem.addEventListener("click", function() {
      closePopup(modal, "active");
      document.querySelectorAll(".modal__input").forEach(function(elem) {
        elem.value = "";
      });
      var closePopupBtn = modal.querySelector("#modal-close-btn");
      closePopupBtn.addEventListener("click", function() {
        modal.classList.remove("active");
      });
    });
  });

  function closePopup(elem, atrr) {
    elem.classList.toggle(atrr);
  }

  function fillColor() {
    var x = slider.value / 30;
    var color =
      "linear-gradient(90deg, rgb(255,255,255)" +
      x +
      "%,rgb(255,255,255,0.5)" +
      x +
      "%)";

    slider.style.background = color;
  }
});