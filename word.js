// Including Letter constructor from letter.js file
var Letter = require("./letter.js");
var dashArr = [];
var wordToBeGuessedArr = [];
var returnedChar;

function Word(wordToBeGuessed){
    this.wordToBeGuessed = wordToBeGuessed;
    wordToBeGuessedArr = [];

    for(var i=0; i<wordToBeGuessed.length; i++){
    wordToBeGuessedArr.push(wordToBeGuessed[i]);
    }

    // Getting length of the word user is gonna guess
    var startLength = wordToBeGuessedArr.length;
    dashArr = [];
    // Printing number of "-" for the word user is gonna guess
    for(var i=0; i<startLength; i++){
        dashArr.push("-");
    }
    // Printing it to the console
    console.log("\n" + dashArr.join(" "));

    this.word = function(character){
        // Instantiating Letter constructor
        var letter = new Letter(character,false);
        // Passing the random word to be guessed to check function in Letter constructor
        returnedChar = letter.check(wordToBeGuessedArr);
        
        // Index array is returned here
        var indexArr = letter.index(wordToBeGuessedArr, returnedChar);

        // Assign user entered character to dash array to display to user
        for(var i=0; i<indexArr.length; i++){
        dashArr[indexArr[i]] = returnedChar;
        }
        console.log("\n" + dashArr.join(" "));

        // If dash array does not have "-" anymore, then next word is displayed to user
        if(!(dashArr.includes("-"))){
            var text = "You got it right!";
            return text;

        }
        return returnedChar;
    }
    
}

module.exports = Word;
