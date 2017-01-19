
// Basic Logic
// n = line #		i = counter 
// n = 1 			i = 0		/numberStars = 	i + n = 1		/numberSpaces = Math.floor(totalStars/2) 
// n = 2			i = 1		/numberStars =	i + n = 3		/numberSpaces = Math.floor(totalStars/2) 
// n = 3			i = 2		/numberStars =	i + n = 5		/numberSpaces = Math.floor(totalStars/2) 
// n = 4			i = 3		/numberStars =	i + n = 7		/etc.



//declare necessary variables
var lines;
var button = document.getElementById("submit");
var star = 1;
var character;
var branch = [];

//initialize a function to draw the tree
function tree(branch) {
	//determine the number of spaces for the first line
	var numberSpaces = Math.floor(((branch[0] * 2) - 1) / 2);
	//initialize a loop
	for (var i = 0; i < branch[0]; i++) {
		//log the concatenated string in the console
		console.log(" ".repeat(numberSpaces) + branch[1].repeat(star));
		//reduce the number of spaces by one
		numberSpaces--;
		//increase the number of stars by 2
		star = star + 2;
	}
}

//initialize a function to evaluate the data
function evaluateData() {
	//grab the value in the first input field
	lines = document.getElementById("height").value;
	//grab the value in the second input field
	character = document.getElementById("material").value;
	//check for valid fields
	if (lines === "" || isNaN(lines) || character === "") {
		alert("Both fields must have an appropriate value.")
	} else 
	//call the tree function
	branch.push(lines);
	branch.push(character);
	tree(branch);
}

//set an event listener on the button
button.onclick = function submitText() {
	evaluateData();
}

//establish a loop to iterate through both text fields
for (j = 0; j < 2; j++) {
	//set an event listener on the text fields
	document.getElementsByClassName("submitText")[j].onkeypress = function() {
    //set a variable that includes both ways of checking keycodes
    var key = event.keyCode || event.which;
    //determine whether keycode matches
    if(key == 13) {
			evaluateData();
		}
	}
}