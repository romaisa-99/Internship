
 // Box 1 - Color Animation
var color = 0;
var myInterval;
function changeColor() {
    var target = document.getElementById("box1");
    if (color == 0) {
        target.style.background = "purple";
        color = 1;
    }
    else {
        target.style.background = "blue";
        color = 0;
    }
}
myInterval = setInterval(changeColor, 1000);

// Box 2 - Position Animation
var a = 0;
var myInterval2;
function moveBox() {
    var target = document.getElementById("box2");
    a = a + 10;
    target.style.marginLeft = a + "px";
    if (a >= 300) {
        clearInterval(myInterval2);
    }
}
myInterval2 = setInterval(moveBox, 100);

// clearInterval()
setTimeout(function() {
    clearInterval(myInterval);
}, 10000);

// setTimeout()
var myTimeout = setTimeout(function() {
    document.getElementById("box1").style.border = "5px solid black";
}, 3000);

// clearTimeout()
var myTimeout2 = setTimeout(function() {
    document.getElementById("box1").style.width = "250px";
}, 5000);
clearTimeout(myTimeout2);