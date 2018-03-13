// ===== global variables

// stores words in array

var wordBank = ["strudel", "baklava", "cannoli", "tart", "macaron", "pretzel", "doughnut"];

// selects from array

var storedWord = wordBank[(Math.random() * wordBank.length) | 0];

console.log("item:", storedWord);

// counts string length and displays spaces on screen

var blankWord = "_ ".repeat(storedWord.length);

console.log("display:", blankWord);

var wordDisplay = document.getElementById("word-display");

wordDisplay.textContent = blankWord;

// ===== lets user presses key

document.onkeyup = function (event) {

    var userLetter = String.fromCharCode(event.which).toLowerCase();

    // stores user key in bank

    var letterBank = document.getElementById("letter-bank");
    var usedLetter = document.createElement("span");

    usedLetter.setAttribute("id", "used-letter");

    usedLetter.textContent = userLetter + " ";

    letterBank.appendChild(usedLetter);

    if (storedWord.includes(userLetter)) {

        console.log("you win!");

    }

    else {

        console.log("you lose!")
    }

};