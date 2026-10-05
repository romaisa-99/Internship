
// var element;

// console.log(element);

// element = document;
// element = document.all;
// element = document.all[2];
// element = document.head;
// element = document.title;
// element = document.body;
// element = document.links;
// element = document.links[2];
// element = document.images;
// element = document.images[0];
// element = document.forms;
// element = document.doctype;
// element = document.URL;
// element = document.domain; //it will return the domain name of the website. For example, if you are on "https://www.example.com", it will return "www.example.com". but since we do not have any domain name in this case, it will return our ip address.  
// element = document.baseURI;
// element = document.getElementById("home");
// element = document.getElementsByClassName("card")[2];
// element = document.getElementsByClassName("card");
// element = document.getElementsByTagName("h1")[0];



// GET Methods
//element =  document.getElementById("types").innerText;
// element =  document.getElementById("contact").innerHTML;
//element =  document.getElementById("home").getAttribute("id");
// element =  document.getElementById("home").getAttribute("class");
// element =  document.getElementsByClassName("flower-buttons")[0].getAttribute("onclick"); 
// element =  document.getElementById("home").attributes;// it will return an object of all the attributes of the element with id "home". You can access individual attributes using their names, for example, document.getElementById("home").attributes["class"] will return the value of the class attribute of the element with id "home".
// element =  document.getElementById("home").attributes[1];// it will return the second attribute of the element with id "home". You can access individual attributes using their index, for example, document.getElementById("home").attributes[0] will return the first attribute of the element with id "home".
// element =  document.getElementById("home").attributes[1].value; // it will return the value of the second attribute of the element with id "home". You can access individual attributes using their index, for example, document.getElementById("home").attributes[0].value will return the value of the first attribute of the element with id "home".
// element =  document.getElementById("home").attributes[1].name; // it will return the name of the second attribute of the element with id "home". You can access individual attributes using their index, for example, document.getElementById("home").attributes[0].name will return the name of the first attribute of the element with id "home".

//SET VALUES
// document.getElementById("home").innerText = "Welcome to the Home Page!"; //setting value
// element =  document.getElementById("home").innerText;// getting setted value

//if we first do this then we will set the value it will clearly display in the console the value that was there in the beginig and the value we changed afterwards
// element =  document.getElementById("home").innerHTML;// getting setted value
// console.log(element);
// document.getElementById("home").innerHTML = "<h1>Welcome to My Page!</h1>"; //setting value
// element =  document.getElementById("home").innerHTML;// getting setted value

//set attribute
// document.getElementsByClassName("flower-buttons")[0].setAttribute("onclick", "Congratulations!"); //it will set the onclick attribute of the first element with class "flower-buttons" to the specified value. In this case, it will display an alert message when the button is clicked.
// element = document.getElementsByClassName("flower-buttons")[0].getAttribute("onclick");

//attribute
// var element;
// element = document.getElementsByTagName("img")[0];
// element.setAttribute("alt", "Colorful flowers");
// console.log(element.getAttribute("alt"));

//remove attribute
// var element;
// element = document.getElementById("email");
// element.removeAttribute("placeholder");
// console.log(element.getAttribute("placeholder"));

//QUERY SELECTOR
// var element;
// element = document.querySelector(".flower");
// console.log(element);

//queryselector example
var element;
element = document.querySelector("li").innerHTML;
console.log(element);

//QUERY SELECTOR ALL
var element;
element = document.querySelectorAll(".flower");
console.log(element);

//QUERY SELECTOR ALL example 1
var element;
element = document.querySelectorAll(".flower")[1].innerHTML;
console.log(element);

//QUERY SELECTOR ALL example 2
var element;
element = document.querySelectorAll("li")[1].innerHTML;
console.log(element);

//CSS STYLING METHODS
