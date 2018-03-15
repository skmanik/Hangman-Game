// ==== big papa variables
// =======================

// stores words in array
var wordBank = ["strudel", "baklava", "cannoli", "quiche", "macaron", "pretzel", "doughnut", "danish", "croissant", "brioche", "churro", "flan"];
// stores number of strikes
var hangmanStrike = 0;
// checks if game is running
var isGameRunning = true;

// ==== stored word selected from word array
var storedWord = wordBank[(Math.random() * wordBank.length) | 0];
// corresponding array for letter replacement
var storeArray = Array.from(storedWord);

// ==== blank word corresponding to stored word
var blankWord = "_".repeat(storedWord.length);
// corresponding array for letter replacement
var blankArray = Array.from(blankWord);

// displays blank word to user
var wordDisplay = document.getElementById("word-display");
wordDisplay.textContent = blankWord;

// displays strike display to user
var strikeDisplay = document.getElementById("strikes");
strikeDisplay.textContent = hangmanStrike;

// === extra shit
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var userArray = [];
// theme
var audioTheme = document.createElement("audio");
audioTheme.setAttribute("src", "assets/music/BirthdayCake.mp3");  
audioTheme.loop = true;
audioTheme.play();

// lets user reset game
function resetGame() {
    location.reload();
};

// lets uer mute music
function stopMusic() {
    audioTheme.pause();
};

// ==== user presses key
// =====================
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

        if (storedWord.includes(userLetter)) {

            // ==== replacement loop
            // =====================

            // gotta make a loop for repeat letters so life doesnt get hard
            for (var i = 0; i < storeArray.length; i++) {

                if (storeArray[i] === userLetter) {

                    // put user letter in blank word at correct index
                    blankArray[i] = userLetter;

                    blankWord = blankArray.join("");

                    // updates blank word display
                    wordDisplay.textContent = blankWord;

                    var audioProg = document.createElement("audio");
                    audioProg.setAttribute("src", "assets/music/OKAY.mp3");  
                    audioProg.play();

                }

            } 

            // successful finish
            if (blankWord === storedWord) {
                //var audioWin = document.createElement("audio");
                audioProg.pause();
                audioProg.setAttribute("src", "assets/music/YEHO.mp3");  
                audioProg.play();

                isGameRunning = false;

                // updates game title with win response
                document.getElementById("game-response").textContent = "Correctamundo!";
            }

        } else {
            
            hangmanStrike++;

            //updates strike display
            strikeDisplay.textContent = hangmanStrike;

            // unsuccessful finish: if this gets up to 6 game has to stop
            if (hangmanStrike === 6) {
                // plays lose soundfile
                var audioLose = document.createElement("audio");
                audioLose.setAttribute("src", "assets/music/WHOAAA.mp3");  
                audioLose.play();  

                isGameRunning = false;    

                // updates blank word display
                wordDisplay.textContent = "a: " + storedWord;

                // updates game title with win response
                document.getElementById("game-response").textContent = "Incorrect! :(";


            }

        }

    }

};

// blankWord is generated using repeat() function but i can try putting for loop in there that checks whether space or not