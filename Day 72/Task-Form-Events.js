//keydown event
function keydownFunction(element) {
    element.style.background = "lime";
}

//keypress 
var element = document.getElementById("email");
function keypressFunction() {
    element.style.background = "pink";
}
element.onkeydown = keypressFunction;

//keyup
function keyupFunction(element) {
    element.style.background = "lightblue";
}
     
//focus event
document.getElementById("subject").onfocus = focusFunction;
function focusFunction() {
    document.getElementById("subject").style.background = "lightblue";
}

//blur event
document.getElementById("subject").onblur = blurFunction;
function blurFunction() {
    document.getElementById("subject").style.background = "";
}

//input event
function inputFunction(element) {
    element.style.background = "pink";
    console.log(element.value);
     var r  = element.value;
     document.getElementById("display").innerHTML = r;
}

//change event
function changeFunction(element) {
var a = element.value;
document.getElementById("display").innerHTML = a;
}
 
//select event
function selectFunction() {
    document.getElementById("message").style.background = "lightblue";
}
document.getElementById("message").addEventListener("select", selectFunction);

//submit event
function submitFunction(event) {
    event.preventDefault();
    alert("Form Submitted");
}

document.querySelector("form").addEventListener("submit", submitFunction);

//invalid event
var element = document.getElementById("name");

function invalidFunction() {
    element.style.background = "pink";
}
element.oninvalid = invalidFunction;