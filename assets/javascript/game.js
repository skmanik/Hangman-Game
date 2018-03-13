document.onkeyup = function (event) {

    //var wordBank = ["strudel", "baklava", "cannoli", "pie", "macaron", "pretzel", "doughnut"];

    var storedWord = "strudel";

    var userLetter = String.fromCharCode(event.which).toLowerCase();

    if (storedWord.includes(userLetter)) {

        console.log("you win!");

    }

    else {

        console.log("you lose!")
    }
};