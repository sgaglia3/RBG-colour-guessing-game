
//number of circles we have in the game
var numCircles = 6;
//The colour variable should be an array that contains as many random RGB colours as there are circles. 
var colours = genRandomColours(numCircles);
//This pickedColor is the RGB color we are trying to guess (string)
var pickedColor = chooseColor(colours);
//This is the default colour of the game. 
let defaultColour="#582c99"

//Grab all appropriate elements from the HTML.
var circles = document.querySelectorAll(".circle");
var colourToGuess = document.getElementById("colour-to-guess");
var resultMessage = document.getElementById("result-message");
var banner = document.querySelector("h1");
var resetButton = document.getElementById("restart");


init();

//The init function should reset the stage and set a new RGB color
function init() {
	//Call the reset function
	reset();
	//Set the text of the colourToGuess element to display the correct RGB color
	colourToGuess.innerText = pickedColor;
}


//Setup so that when the reset button is clicked, the reset function gets called 
resetButton.addEventListener("click", reset);
// resetButton.onclick = reset; 



//Define what should happen when any circle is clicked.
function clickCircle(e) {
	//Get the color of the clicked circle
	if (e.target.style.backgroundColor == pickedColor) {
		resultMessage.innerText = "You win"; 
		resetButton.innerText = "Play again";

		for (i=0; i < circles.length; i++) {
			circles[i].style.backgroundColor = pickedColor; 
		}
	} else {
		e.target.style.backgroundColor = defaultColour; 
		resultMessage.innerText = "Try again"; 
	}
}

// The reset function should set new values for the colours array and reset the game state
function reset() {
	//Generate all new colors
	colours = genRandomColours(numCircles);
	//Pick a new random color from array
	pickedColor = chooseColor(colours);
	//Display the colour RGB value on the main page
	colourToGuess.textContent = pickedColor;
	//Change colors of circles
	for (i = 0; i < circles.length; i++) {
		circles[i].style.backgroundColor = colours[i];
		circles[i].addEventListener("click", clickCircle);
	}
	//Reset banner and message
	banner.style.backgroundColor = defaultColour;
	resetButton.innerText = "Restart";
	resultMessage.innerText = "";
}

//Write a function to make a random RGB color
function makeColour() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

//Generate an array of random RGB colors
function genRandomColours(num) {
	var colors = [];
	for (var i = 0; i < num; i++) {
		colors.push(makeColour());
	}
	return colors;
}

//Pick a random color from the colors array to be the guessed color
function chooseColor() {
	// var random = Math.floor(Math.random() * colours.length);
	// return colours[random];
	return colours[Math.floor(Math.random() * numCircles)]
}