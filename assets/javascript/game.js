// global variables

var wordBank = ["strudel", "baklava", "cannoli", "pie", "macaron", "pretzel", "doughnut"];

var storedWord = wordBank[(Math.random()*wordBank.length)|0];
console.log('item:', storedWord);

// when user presses key

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