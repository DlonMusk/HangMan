// when you click start button the game will begin, the timer will count down, 


// create a list of words
let wordList = ["HELLO", "CHEESE", "MONSTER", "POTATO", "BIBLE"];
let blankString = "";
let chosenWord = "";
let timerInterval;



// get all of the elements
let timerEL = document.querySelector(".timer");
let wordEL = document.querySelector(".word");
let startGameEL = document.querySelector(".start-game");
let bodyEL = document.querySelector("body");




// create functions for game


// start game button will reset the game then start the game
let startGame = () => {
    // RESET THE GAME TIMER AND BLANK STRING
    bodyEL.addEventListener("keydown", letterGuess)
    bodyEL.addEventListener("keyup", stringCheck);
    clearInterval(timerInterval);
    blankString = "";
    game();
}

let gameTimerFunction = () => {
    let timeleft = 10;
    wordEL.textContent = "";
    timerInterval = setInterval(function() {
        timeleft--;
        timerEL.textContent = timeleft;

        // // use regex to test string
        // let regEx = new RegExp('_');
        // if(!regEx.test(blankString)){
        //     clearInterval(timerInterval);
        //     timerEL.textContent = "YOU WIN!!";
        // }

        if(timeleft === 0){
            clearInterval(timerInterval);
            timerEL.textContent = "TO SLOW";
            bodyEL.removeEventListener('keydown', letterGuess);
            bodyEL.removeEventListener('keyup', stringCheck);
        }

        
    }, 1000)


}

// currently creating blank string and grabing full string
let game = () => {

    // first select a random word from the list
    gameTimerFunction();
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)].split("");
    console.log(chosenWord);

    // create a string of _ for each letter in the word
    for(let i = 0; i < chosenWord.length; i++){
        blankString = blankString + "_";
    }
    
    wordEL.textContent = blankString.split("").join(" ");
    console.log(blankString);
}


// EVENT LISTENER FUNCIONS
let letterGuess = (event) => {
    blankString = blankString.split("");
    let key = event.key.toUpperCase();
    console.log(key);
    
    for(let i = 0; i < chosenWord.length; i++){
        if(chosenWord[i] == key){
            blankString[i] = key;
        }
    }
    
    wordEL.textContent = blankString.join(" ");
    blankString = blankString.join("");
    
    console.log(blankString);
}

// check for answer on keyup event for better response time
let stringCheck = () => {
    // use regex to test string
    let regEx = new RegExp('_');
    if(!regEx.test(blankString)){
        clearInterval(timerInterval);
        timerEL.textContent = "YOU WIN!!";
    }
}


// EVENT LISTENERS

startGameEL.addEventListener("click", startGame);



//gameTimerFunction();
// game();



console.log(timerEL);