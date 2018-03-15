// ==== big papa variables
// =======================

// stores words in array
var wordBank = ["strudel", "baklava", "cannoli", "tart", "macaron", "pretzel", "doughnut", "danish", "croissant", "brioche"];

// stores number of strikes
var hangmanStrike = 0;

// checks if game is running
var isGameRunning = true;

// ==== stored word selected from word array
var storedWord = wordBank[(Math.random() * wordBank.length) | 0];
console.log(storedWord);
// corresponding array for letter replacement
var storeArray = Array.from(storedWord);
console.log(storeArray);

// ==== blank word corresponding to stored word
var blankWord = "_".repeat(storedWord.length);
console.log("display:", blankWord);
// corresponding array for letter replacement
var blankArray = Array.from(blankWord);
console.log(blankArray);

// displays blank word to user
var wordDisplay = document.getElementById("word-display");
wordDisplay.textContent = blankWord;

// displays strike display to user
var strikeDisplay = document.getElementById("strikes");
strikeDisplay.textContent = hangmanStrike;

// extra shit
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var userArray = [];

// ==== lets user presses key
// ==========================
document.onkeyup = function (event) {

    if (isGameRunning) {

        // user key
        var userLetter = String.fromCharCode(event.which).toLowerCase();

        // maybe check here if userkey is valid in alphabet string make alphabet variableeee check false, return
        if (alphabet.includes(userLetter) === false) {
            return;
        }

        // if this key is in this array (user's array being pushed intoahdalsjkdhl) then return
        if (userArray.includes(userLetter)) {
            return;
        }

        // displays user key in letter bank
        var letterBank = document.getElementById("letter-bank");
        var usedLetter = document.createElement("span");

        usedLetter.setAttribute("id", "used-letter");
        usedLetter.textContent = userLetter + " ";
        letterBank.appendChild(usedLetter);

        userArray.push(userLetter);
        console.log(userArray);

        if (storedWord.includes(userLetter)) {

            // ==== replacement loop
            // =====================

            // gotta make a loop for repeat letters so life doesnt get hard
            for (var i = 0; i < storeArray.length; i++) {

                if (storeArray[i] === userLetter) {

                    // put user letter in blank word at correct index
                    blankArray[i] = userLetter;
                    console.log(blankArray);

                    blankWord = blankArray.join("");
                    console.log(blankWord);

                    // updates blank word display
                    wordDisplay.textContent = blankWord;

                }

            } 

            // successful finish
            if (blankWord === storedWord) {
                console.log("You won!");

                isGameRunning = false;
            }

        } else {
            
            hangmanStrike++;
            console.log(hangmanStrike);

            //updates strike display
            strikeDisplay.textContent = hangmanStrike;

            // unsuccessful finish: if this gets up to 6 game has to stop
            if (hangmanStrike === 6) {
                console.log("You lose!");

                isGameRunning = false;
            }

        }

    }

};

// now what i have to do haaa aahaaaaaa

// attach html to variables (check console.logs)
// blankWord is generated using repeat() function but i can try putting for loop in there that checks whether space or not