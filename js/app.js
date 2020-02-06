var slider = document.querySelector("#cost");
var output = document.querySelector("#value-to");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};

slider.addEventListener("mousemove", function() {
  var x = slider.value / 30 + "%";
  var color =
    "linear-gradient(90deg,rgb(10,10,10)" + x + ", rgb(214,214,214)" + x + ")";
  slider.style.background = color;
});