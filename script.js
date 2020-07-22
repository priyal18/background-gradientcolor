var css = document.querySelector("h3");
var c1 = document.getElementById("color1");
var c2 = document.getElementById("color2");
var body = document.getElementById("gradient");

function changeColor() {
  body.style.background =
    "linear-gradient(to right, " + c1.value + ", " + c2.value + ")";

  css.textContent = body.style.background + ";";
}

c1.addEventListener("input", changeColor);
c2.addEventListener("input", changeColor);
