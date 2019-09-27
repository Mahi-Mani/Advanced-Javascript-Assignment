// Including Letter constructor
var Letter = require("./letter.js");
var dashArr = [];
var wordToBeGuessedArr = [];
var returnedChar;

function Word(wordToBeGuessed){
    this.wordToBeGuessed = wordToBeGuessed;
    console.log("Word to be guessed : " + this.wordToBeGuessed);
    wordToBeGuessedArr = [];

    for(var i=0; i<wordToBeGuessed.length; i++){
    wordToBeGuessedArr.push(wordToBeGuessed[i]);
    }
    console.log("Word to be guessed array : " + wordToBeGuessedArr);
    // Getting length of the word user is gonna guess
    var startLength = wordToBeGuessedArr.length;
    dashArr = [];
    // Printing number of "-" for the word user is gonna guess
    for(var i=0; i<startLength; i++){
        dashArr.push("-");
    }
    // Printing it to the console
    console.log(dashArr.join(" "));

    this.word = function(character){
        // Instantiating Letter constructor
        var letter = new Letter(character,false);
        // Passing the random word to be guessed to check function in Letter constructor
        returnedChar = letter.check(wordToBeGuessedArr);
        
        // Index array is returned here
        var indexArr = letter.index(wordToBeGuessedArr, returnedChar);
        // console.log("Inside word.js after return value of indexArr : " + indexArr);
        // Assign user entered character to dash array to display to user
        
        for(var i=0; i<indexArr.length; i++){
        dashArr[indexArr[i]] = returnedChar;
        }

        console.log(dashArr.join(" "));

        if(!(dashArr.includes("-"))){
            // console.log("You got it right! Next Word!");
            var text = "You got it right! Next Word!";
            console.log(text);
            return text;

        }
        return returnedChar;
    }
    
}

module.exports = Word;
