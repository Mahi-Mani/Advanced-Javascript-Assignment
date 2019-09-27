// Including constructor from word.js file
var Word = require("./word.js");
// Include inquirer npm package
var inquirer = require("inquirer");
// Number of guesses left for user
var guessLeft = 5;
var word;
var random;
var length;
var wordArr = [];
// To generate random numbers
generateRandom();


// Generate random number
function generateRandom(){
    // Initial word array
    var wordArr = [];
    wordArr = ["Apple","Orange","Pineapple","Banana"];
    length = wordArr.length;
    random = Math.floor(Math.random() * length);

    // Instantiating Word constructor with the random word from wordArr array
    word = new Word(wordArr[random]);
}

// Initially call start game function
startGame();

// Function that promts for questions with user
function startGame(){
    var start = ""
inquirer.prompt([
    {
        type: "input",
        message: "Guess a letter",
        name: "userGuess"
    }
]).then(function(answer){
    // console.log(answer.userGuess);
    // Passing user guessed letter to word constructor's word function
    var returnedChar = word.word(answer.userGuess);
    console.log("Inside index.js printing word.text : " + word.text);
    // var text = word.indexFunc();
    
    if(returnedChar === "-"){
        guessLeft--;
        console.log("Number of guesses left : " + guessLeft);
    }
    if(returnedChar == "You got it right! Next Word!"){
        console.log("Inside index.js printing word.text : " + returnedChar);
        generateRandom();
        startGame();
        
    }
        

    
    if((guessLeft > 0) && (returnedChar != "You got it right! Next Word!")){
        startGame();
    }
    else{
        console.log("Game Over");
    }

});
}
