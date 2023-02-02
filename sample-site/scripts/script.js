// Change Heading text
// var myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello to JavaScript";

// Change Image when click on image
var dogImage = document.querySelector("img");
dogImage.onclick = function () {
    "use strict";
    var myimages = dogImage.getAttribute("src");

    if (myimages === "./images/puppy.jpg") {
        dogImage.setAttribute("src", "./images/charmeleon.jpg");
    } else {
        dogImage.setAttribute("src", "./images/puppy.jpg");
    }
};


// Personalized welcome Message code
var nameButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    "use strict";
    var myName = window.prompt("Please enter your name");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome, " + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Welcome, " + storedName;
}

nameButton.onclick = function () {
    'use strict';
    setUserName();
}