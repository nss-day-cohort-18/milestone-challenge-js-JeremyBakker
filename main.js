/**********************/
/*  INSTRUCTIONS      */
/**********************/

// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console.

// It accepts a single object as an argument. The object should have two key/value pairs.

// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
// Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.

// Grow your tree

// Example

// Here's what the pine tree should look like when you specify a height of 7, and use the asterisk character.

//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
// *************


/***********************************************************************************************************************/

/********************/
/*  CODE            */
/********************/

// Basic Logic
// n = line #		i = counter 
// n = 1 			i = 0		/numberStars = 	i + n = 1		/numberSpaces = Math.floor(totalStars/2) 
// n = 2			i = 1		/numberStars =	i + n = 3		/numberSpaces = Math.floor(totalStars/2) 
// n = 3			i = 2		/numberStars =	i + n = 5		/numberSpaces = Math.floor(totalStars/2) 
// n = 4			i = 3		/numberStars =	i + n = 7		/etc.


//declare necessary variables
var lines; //this will hold the number of lines the user want to grow the tree to
var star = 1; //this is an arbitrary variable name to hold the value for the number of characters displayed at the top of the tree. i chose a star because the example used stars. The program allows the user to change the displayed character. For instance, see the next variable.
var character; //this will hold the character that forms the tree, entered by the user
var branch = [{lines:0, character:0}]; //Establish an array to meet the requirement of the function accepting a single object with two key/value pairs as an argument.

//initialize a function to draw the tree
function tree(branch) {
	//determine the number of spaces for the first line. the number of spaces drawn in the first line is proportional to the number of characters drawn in the final line.
	var numberSpaces = Math.floor(((branch[0].lines * 2) - 1) / 2);
	//initialize a loop to draw multiple lines
	for (var i = 0; i < branch[0].lines; i++) {
		//log the concatenated string in the console
		console.log(" ".repeat(numberSpaces) + branch[0].character.repeat(star));
		//reduce the number of spaces by one
		numberSpaces--;
		//increase the number of stars by 2 to make the tree shape proportional as it "grows"
		star = star + 2;
	}
}

//initialize a function to evaluate the data
function evaluateData() {
	//grab the value in the first input field
	branch[0].lines = document.getElementById("height").value;
	//grab the value in the second input field
	branch[0].character = document.getElementById("material").value;
	//check for valid fields
	if (branch[0].lines === "" || isNaN(branch[0].lines) || branch[0].character === "") {
		alert("Both fields must have an appropriate value.")
	} else 
	//call the tree function
	tree(branch);
	//reset the count after a user enters the information so the tree doesn't continue to grow; it resets, ready for the next input.
	star = 1;
}

//set an event listener on the button and call the evaluateData function when the button is clicked
document.getElementById("submit").onclick = function submitText() {
	evaluateData();
}

//establish a loop to iterate through both text fields. (I can't pull both values at the same time.)
for (j = 0; j < 2; j++) {
	//set an event listener for a key press on the text fields
	document.getElementsByClassName("submitText")[j].onkeypress = function() {
    //listen for the ENTER key (keyCode=13) and call the evaluateData function if true
    if(event.keyCode == 13) {
		evaluateData();
		}
	}
}