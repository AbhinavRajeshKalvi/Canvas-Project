/* Iteration 4: Make the Canvas App Functional */
var inputBackground = document.getElementById("input-background");
var Background = document.getElementById("background");

inputBackground.oninput = ()=>{
  var ColorValue = inputBackground.value;
  Background.style.fill = ColorValue;
}

var buttonfaceplate = document.getElementById("button-face-plate");
var faceplate = document.getElementById("face-plate");

buttonfaceplate.oninput = ()=>{
  var ColorValue2 = buttonfaceplate.value;
  faceplate.style.fill = ColorValue2
}

var buttoneyes = document.getElementById("button-eyes");
var eyes = document.getElementById("eyes");

buttoneyes.oninput = ()=>{
  var ColorValue3 = buttoneyes.value;
  eyes.style.fill = ColorValue3;
}

var buttonhelmet = document.getElementById("button-helmet");
var helmet = document.getElementById("helmet");

buttonhelmet.oninput = ()=>{
  var ColorValue4 = buttonhelmet.value;
  helmet.style.fill = ColorValue4
}