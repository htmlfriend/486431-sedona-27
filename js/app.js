window.addEventListener("DOMContentLoaded", function() {
  var fieldAdult = document.querySelector("#appointment-adult");
  var field = document.querySelector("#appointment-children");
  var formAppear = document.querySelector(".presentation__intro__wrapper");
  var choiceBtn = document.querySelector("#choice");
  var choiceForm = document.querySelector("#formChoice");
  var appointmentDate = document.querySelector("#appointment-date");
  var appointmentDateOut = document.querySelector("#appointment-data-out");
  if (choiceForm) {
    choiceForm.addEventListener("submit", function(e) {
      if (
        !appointmentDate.value ||
        !appointmentDateOut.value ||
        !field.value ||
        !fieldAdult.value
      ) {
        e.preventDefault();
        choiceForm.classList.remove("modal-error");
        choiceForm.offsetWidth = choiceForm.offsetWidth;
        choiceForm.classList.add("modal-error");
      } else {
      }
    });
  }
  window.addEventListener("keydown", function(i) {
    if (i.keyCode === 27) {
      i.preventDefault();
      if (formAppear.hasAttribute("class", "presentation__intro__wrapper")) {
        formAppear.classList.add("hide");
      }
    }
  });
  if (choiceBtn) {
    choiceBtn.addEventListener("click", function(event) {
      event.preventDefault();

      formAppear.classList.toggle("hide");

      appointmentDate.focus();
    });
  }
});