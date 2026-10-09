
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
// var element;
// element = document.querySelector("li").innerHTML;
// console.log(element);

// //QUERY SELECTOR ALL
// var element;
// element = document.querySelectorAll(".flower");
// console.log(element);

// //QUERY SELECTOR ALL example 1
// var element;
// element = document.querySelectorAll(".flower")[1].innerHTML;
// console.log(element);

// //QUERY SELECTOR ALL example 2
// var element;
// element = document.querySelectorAll("li")[1].innerHTML;
// console.log(element);

//CSS STYLING METHODS
//style.border
// var element;
// element = document.querySelector("#heading");
// element.style.border = "3px solid purple";

// //style.color
// var element;
// element = document.querySelector("h2");
// element.style.color = "purple";

// //style.background
// var element;
// element = document.querySelectorAll(".flower")[1];
// element.style.background = "lightpink";

// //className
// //getting the class
// var element;
// element = document.querySelector("#heading").className;
// console.log(element);

//Changing the class value.
// var element;
// element = document.querySelector("#heading");
// element.className = "newClass";
// console.log(element);

//classList methods
//classList.add()
// var element;
// element=document.querySelector("#home");
// element.classList.add("newClass", "LovelyFlowers","Flowersss");
// console.log(element);

//classList.remove()
// var element;
// element=document.querySelector("#home");
// element.classList.remove("card");
// console.log(element);

//classList.toggle()
// var element;
// element = document.querySelector("#home");
// element.classList.toggle("active");
// console.log(element);

//classList.contains() - Check classes (True/False)
// var element;
// element = document.querySelector("#home");
// var result;
// var results;
// result = element.classList.contains("card");
// results = element.classList.contains("flower");
// console.log(result);
// console.log(results);

//classList.item() - Gets Classes
// var element;
// element = document.querySelector("#home");
// var result;
// result = element.classList.item(0);
// console.log(result);

//classList.length()
// var element;
// element=document.querySelector("#home");
// var result;
// result=element.classList.length;
// console.log(result);

//DOM EventListener() Methods
// function bleedingHeartMessage(){
//     alert("The Bleeding Heart!");
// }

// function birdMessage(){
//     alert("The Birds of Paradise!");
// }

// function passionMessage(){
//     alert("The Passion Flower!");
// }

// function proteaMessage(){
//     alert("Protea!");
// }

// function moonFlowerMessage(){
//     alert("MoonFlower!");
// }

// function foxGlove(){
//     alert("Fox Glove!");
// }

// function snapDragonMessage(){
//     alert("snapDragon!");
// }

// function hydrangeaMessage(){
//     alert("Hydrangea!");
// }

// function celosiaMessage(){
//     alert("Celosia!");
// }

// function plumeriaMessage(){//onclick with style change
//     document.getElementById("plumeria").style.background = "black";
//     alert("Colored Changed!");
// } 

// function flowerMessage() { //removeEventListener()
//     alert("You clicked Bleeding Heart!");
// }
// var element;
// element = document.getElementById("bleedingHeart");
// element.addEventListener("click", flowerMessage);
// element.removeEventListener("click", flowerMessage);

// function useCap(){ //11. UseCapture
// alert("You clicked Jasmine!");
// }
// var element; 
// element = document.querySelectorAll(".flower")[4];
// element.addEventListener("click", useCap(), true);

//DOM Traversal Methods
// var element;
// element = document.querySelector("#heading").parentNode;
// console.log(element);

// var element;
// element = document.querySelector("#heading").parentElement;
// console.log(element);

// var element;
// element = document.querySelector("#home").children;
// console.log(element);

// var element;
// element = document.querySelector("#home").childNodes;
// console.log(element);

// var element;
// element = document.querySelector("#home").firstChild;
// console.log(element); // since there is space after the #home therefore the output will be a tex Node that is whitespace

// var element;
// element = document.querySelector("#home").firstElementChild;
// console.log(element); 

// var element;
// element = document.querySelector("#home").lastChild;
// console.log(element); 

// var element;
// element = document.querySelector("#home").lastElementChild;
// console.log(element);  

// var element;
// element = document.querySelector("#heading").nextSibling;
// console.log(element);
// var element;
// element = document.querySelector("#heading").nextElementSibling;
// console.log(element);

// var element;
// element = document.querySelectorAll("#home p")[1].previousSibling;
// console.log(element); //We first select the second paragraph. previousSibling then moves to the node immediately before it. This can be whitespace/text.

// var element;
// element = document.querySelectorAll("#home p")[1].previousElementSibling;
// console.log(element);

// DOM CREATE METHODS
// var element;
// element = document.createElement("p");
// element.innerText = "Flowers make the world beautiful.";
// document.querySelector("#home").appendChild(element); // go to class home and add the element <p> with its message.
// console.log(element);

// var text;
// text = document.createTextNode("Flowers are beautiful.");
// document.querySelector("#home").append(text);
// console.log(text);

// var comment;
// comment = document.createComment("Flower section");
// document.querySelector("#home").append(comment);
// console.log(comment);

// //DOM APPEND METHODS
// //Append() - Appends a node as the last child of a node.
// var element;
// element = document.createElement("p");
// element.innerText = "Flowers are beautiful.";
// document.querySelector("#home").appendChild(element);
// console.log(element);

// //InsertBefore() - Inserts a node before the reference node as a child of a specified parent node.
// var element;
// element = document.createElement("p");
// element.innerText = "Flowers are beautiful.";
// var parent;
// parent = document.querySelector("#home");
// var heading;
// heading = document.querySelector("#heading");
// parent.insertBefore(element, heading);
// console.log(element);

//insertAdjacentElement()
// var element;
// element = document.createElement("p");
// element.innerText = "Flowers are beauiful.";
// document.querySelector("#heading").insertAdjacentElement("beforebegin", element);
// console.log(element);

// var element;
// element = document.createElement("span");
// element.innerText = "Flower: ";
// document.querySelector("#heading").insertAdjacentElement("afterbegin", element);
// console.log(element);

// var element;
// element = document.createElement("span");
// element.innerText = " This is a span element.";
// document.querySelector("#heading").insertAdjacentElement("beforeend", element);
// console.log(element);

// var element;
// element = document.createElement("p");
// element.innerText = "Explore different types of flowers.";
// document.querySelector("#heading").insertAdjacentElement("afterend", element);
// console.log(element);

// //APPEND METHODS EXAMPLES
// var element;
// element = document.createElement("p");
// element.innerText = "Flowers make the world beautiful.";
// document.querySelector("#home").appendChild(element);
// console.log(element);

// var text;
// text = document.createTextNode("Flowers are beautiful.");
// document.querySelector("#home").appendChild(text);
// console.log(text);  

// var comment;
// comment = document.createComment("Flower section");
// document.querySelector("#home").appendChild(comment);
// console.log(comment);

//replaceChild() - Replaces a child node with a new node.
// var newElement;
// newElement = document.createElement("h2");
// newElement.innerText = "Welcome to the Flower Garden";
// var parent;
// parent = document.querySelector("#home");
// var oldElement;
// oldElement = document.querySelector("#heading");
// parent.replaceChild(newElement, oldElement);
// console.log(newElement);
// console.log(newElement.innerText); //when we need to check the value of the new element we can use innerText property to get the value of the new element.

// //removeChild() - Removes a child node from the DOM and returns the removed node.
// var parent;
// parent = document.querySelector("#types");
// var element;
// element = document.querySelectorAll(".flower")[1];
// parent.removeChild(element);
// console.log(element);

//cloneNode() - Creates a copy of a node and returns the clone.
// var element;
// element = document.querySelectorAll(".flower")[1];
// var copy;
// copy = element.cloneNode(true);
// document.querySelector("#about").appendChild(copy);
// console.log(copy.innerText);

//contains() - when the specific element is present inside the parent element
var parent;
parent = document.querySelector("#home");
var child;
child = document.querySelector("#heading");
console.log(parent.contains(child));

//contains() when the specife attribute is not present inside the parent element
var parent;
parent = document.querySelector("#home");
var child;
child = document.querySelector("#contact");
console.log(parent.contains(child));

// hasAttribute() - Checks if an element has a specific attribute and returns true or false.
//Example 1
var element;
element = document.querySelector("#home");
console.log(element.hasAttribute("class"));

//Example 2
var element;
element = document.querySelector("#home");
console.log(element.hasAttribute("style"));

//hasNodes() - Checks if an element has any child nodes and returns true or false.
var element;
element = document.querySelector("#home");
console.log(element.hasChildNodes());

//Eample - empty element
var element;
element = document.createElement("div");
console.log(element.hasChildNodes());

//isEqualNode() - Compares two nodes and returns true if they are equal, otherwise false.
//Comparing two flower articles
var flower1;
flower1 = document.querySelectorAll(".flower")[0];

var flower2;
flower2 = document.querySelectorAll(".flower")[1];
console.log(flower1.isEqualNode(flower2));

//Example with cloneNode()var flower1;
flower1 = document.querySelectorAll(".flower")[1];

var flower2;
flower2 = flower1.cloneNode(true);
console.log(flower1.isEqualNode(flower2));