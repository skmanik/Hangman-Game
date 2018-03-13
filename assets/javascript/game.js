// ===== global variables

// array containing words

var wordBank = ["strudel", "baklava", "cannoli", "tart", "macaron", "pretzel", "doughnut"];

// computer selects from array

var storedWord = wordBank[(Math.random() * wordBank.length)|0];

console.log("item:", storedWord);

// computer counts string length and displays spaces on screen

var wordDisplay = "_ ".repeat(storedWord.length);

console.log("display:", wordDisplay);

// ===== user presses key

document.onkeyup = function (event) {

    // this was just to test the conditions below: var storedWord = "strudel";

    var userLetter = String.fromCharCode(event.which).toLowerCase();

    if (storedWord.includes(userLetter)) {

        console.log("you win!");

    }

    else {

        console.log("you lose!")
    }

};