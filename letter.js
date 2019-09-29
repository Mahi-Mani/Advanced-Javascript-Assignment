// Letter constructor
function Letter(character, isGuessed){
    this.character = character;
    this.isGuessed = isGuessed;
    var indexArr = [];
    var userGuessArr = [];

    this.check = function(arr){
        // Compares user guessed letter with random array value
    if(arr.includes(this.character)){
        console.log("Yay! Correct");
        return this.character;
    }
    // If not found, then console logs incorrect
    else{
        console.log("Oops! Incorrect");
        return "-";
    }
    }
    this.index = function(arr, char){
        
        // If found in array, pushes the index of character to index array
        for(var i=0; i<arr.length; i++){
        if(arr[i] == char){
            indexArr.push(i);
        }
        
    }
    // Returning index array to word.js file
    return indexArr;
    }

}

module.exports = Letter;