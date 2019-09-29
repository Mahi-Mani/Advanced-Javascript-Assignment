// Including constructor from word.js file
var Word = require("./word.js");
// Include inquirer npm package
var inquirer = require("inquirer");
// Number of guesses left for user
var guessLeft;
var word;
var random;
var length;
var round = 0;
var wordArr = [];
var userGuessArr = [];
var alreadyGuessed;
// To generate random numbers
generateRandom();


// Generate random number

function generateRandom(){
    round++;
    userGuessArr = [];
    
    if(round < 5){
    console.log("\nRound : " + round);
    console.log("\nYour word!");
    guessLeft = 5;
    // Initial word array
    var wordArr = [];
    wordArr = ["Apple","Orange","Pineapple","Banana"];
    length = wordArr.length;
    random = Math.floor(Math.random() * length);

    if(round < 5){
    // Instantiating Word constructor with the random word from wordArr array
    word = new Word(wordArr[random]);
    }
}
}

// Initially call start game function
startGame();

// Function that prompts for questions with user
function startGame(){
    var start = ""
    if(round < 5){
inquirer.prompt([
    {
        type: "input",
        message: "Guess a letter",
        name: "userGuess"
    }
]).then(function(answer){
    
    if(!(userGuessArr.includes(answer.userGuess))){
        userGuessArr.push(answer.userGuess);
    }
    // If user had already guessed a character, then prompts the user that letter was already guessed
    else{
        alreadyGuessed = "Already guessed! Try a different character";
        console.log("\n" + alreadyGuessed);
        
    }
    
    // Passing user guessed letter to word constructor's word function
    var returnedChar = word.word(answer.userGuess);
    
    // If user guess is wrong then display "-" and decrement guessLeft by one
    if(returnedChar === "-"){
        // Decrement guess left only if character is not already guessed by user
        if(alreadyGuessed != "Already guessed! Try a different character")
        guessLeft--;
        console.log("\nNumber of guesses left : " + guessLeft);
        alreadyGuessed = "";
    }
    // run the game recursively to ask next question when letter is guessed by user
    if((guessLeft > 0) && (returnedChar != "You got it right!") && (round < 5 )){
        startGame();
    }
    // If guess left is zero, then prompt user that user had lost the game
    else if((guessLeft == 0) && (round < 5 )){
        console.log("\nYou lost!");
        generateRandom();
        startGame();
    }

    // If word is guessed right, then provide user with the next word
    if((returnedChar == "You got it right!") && (round < 5 )){
        console.log(returnedChar);
        generateRandom();
        startGame();   
    }
});
}
else{
    gameOver();

}
}

function gameOver(){
    inquirer.prompt([
        {
            type: "confirm",
            message: "Game Over! Do you wanna continue playing ?",
            name: "confirm"
        }
    ]).then(function(answer){
        if(answer.confirm){
            round = 0;
            generateRandom();
            startGame(); 
        }
        else{
            console.log("GREAT JOB! BYE");
            process.exit();
        }
    });

}


