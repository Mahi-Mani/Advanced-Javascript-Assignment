# Advanced-Javascript-Assignment

## Summary
Word Guess command-line game using constructor functions.
User will have to guess the name of a fruit by attempting character by character. User will have 5 guesses to make. User will play 5 rounds in total. Once 5 rounds is completed, user is prompted to either continue playing or to quit the game. 

## Installation Guide
* User has to download all files from github
* User can either clone the repository or can download all files manually
* Package.json file has required depencies to be installed. So, user can type `npm install` to install all needed packages
* User can type `node index.js` to play the game
* Letter.js and Word.js have constructors inside. Index.js utilises those constructors by requiring those for the functioning of game

## Technologies Used
- Javascript : used to provide interactive effects
- Node : used to run javascript file outside the browser. Supports command line user input. Node is useful is different ways. As
far as this code is concerned, utilised inquirer to dynamically prompt question to user

## Results
Game starts upon running the command `node index.js` Gif image below explains the game flow.
![Site](Gif/logAfterConcert.png)

## Game Logic
* User has to play 5 rounds and attempt to guess the word correctly
* When user chooses the letter correctly, the correct letter is placed in the placeholder of the word and user can try guessing repeatedly
* If user attempts to try the same character again, user is prompted with a warning of already guessed character
* If user attempts to try a whole word, all in one chance, then user is prompted with a warning
* Guess left decrements each time when user makes an incorrect guess
* User can either quit or restart the game at the end of 5 rounds

## Code Snippet
```Javascript
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
    
    // If user attempts to enter whole word
    if(answer.userGuess.length > 1){
        console.log("\nAttempt character by character rather than typing the whole word !");
    }

    if(!(userGuessArr.includes(answer.userGuess))){
        userGuessArr.push(answer.userGuess);
    }
    // If user had already guessed a character, then prompts the user that letter was already guessed
    else{
        alreadyGuessed = "Already guessed! Try a different character";
        console.log("\n" + alreadyGuessed);
        
    }
```
The above code snippet marks the start of the game flow. User is prompted to guess a letter. This code checks crucial functionality of game logic 
that if user repeats his/her guesses, then alerts user that guess has already been made. Since it is a letter guess game, if user tries to guess a whole word, then a warning is issued to the user

## Learning Points
* Constructors

Since I had worked with constructors throughout the application, I experimented and learnt a lot with javascript constructors

## Future Enhancement
A future enhancement could be made to this game logic if user guesses the whole word at an early stage, then allow user to type the whole word in one go.

## Author Links
[LinkedIn](https://www.linkedin.com/in/mahisha-gunasekaran-0a780a88/)

[GitHub](https://github.com/Mahi-Mani)
