var guessedItem = [""];

var guesses = 0;
//Wordbank
var wordBank = ["apple", "pineapples", "apples", "kiwi", "peach", "bananas", "reserved", "pears", "mangoes"];


//Randomise selections
var randomItem = wordBank[Math.floor(Math.random() * wordBank.length)];

var actualWordArray = tokenWord(randomItem);
console.log("Actual word section " + actualWordArray);

var wordToDash = actualWordArray;

actualWordArray = tokenWord(randomItem);

//Function to replace values
function tokenWord(actualWord) {
    var tokenized = actualWord.split("");
    return tokenized;
}

//Convert words to dashes
var result = convertToDashes(wordToDash);

function convertToDashes(wordToDash) {
    console.log(actualWordArray);
    var result = wordToDash;
    for (var i = 0; i < result.length; i++) {
        result[i] = "_";
        console.log(actualWordArray);
    }
    return result;
}


function counter(guesses) {
    return guesses += 1;
}

function compareWord(guessedLetter, actualWordArray, result) {
    for (var i = 0; i < actualWordArray.length; i++) {
        if (guessedLetter == actualWordArray[i]) {
            result[i] = guessedLetter;

            guessedItem[i] += guessedLetter;

            if (actualWordArray === result) {
                return result;
            }
        }
    }
}


// All above is working. Trying to work on the comparison
//Function to locate letters in the first loop
function locateWords(guessedLetter, actualWordArray, result) {
    
    var check = actualWordArray.find(function (element) { return element === guessedLetter; });
    console.log("In check " + check);
    if (check != undefined ) {
        compareWord(guessedLetter, actualWordArray, result);
    } else {
        guesses += 1;
        guessedItem.push(guessedLetter);
        console.log(guessedItem);
        console.log("result test in else " + guessedItem);
    }
    return [result, guesses, guessedItem];
}

//var y = locateWords(guessedLetter, actualWordArray, result);
//     guesses += 1;
// }

function run(guesses) {
    while (guesses < 5) {
        var guessedLetter = prompt("Enter a Guess");
        console.log("guessed word section " + guessedLetter);
        var y = locateWords(guessedLetter, actualWordArray, result);
        console.log("results " + y[0]);
        console.log("guesses " + guesses);
        console.log("guesses made: "+ guessedItem );

        guesses = y[1];
    }
}

run(guesses);

// var guessedLetter = prompt("Enter a Guess");
// console.log("guessed word section " + guessedLetter);
// var y = locateWords(guessedLetter, actualWordArray, result);
// console.log("results " + y);
// var guessedLetter = prompt("Enter a Guess");
// console.log("guessed word section " + guessedLetter);
// var y = locateWords(guessedLetter, actualWordArray, result);
// console.log("results " + y);
// var guessedLetter = prompt("Enter a Guess");
// console.log("guessed word section " + guessedLetter);
// var y = locateWords(guessedLetter, actualWordArray, result);
// console.log("results " + y);
// var guessedLetter = prompt("Enter a Guess");
// console.log("guessed word section " + guessedLetter);
// var y = locateWords(guessedLetter, actualWordArray, result);
// console.log("results " + y);
// var guessedLetter = prompt("Enter a Guess");
// console.log("guessed word section " + guessedLetter);
// var y = locateWords(guessedLetter, actualWordArray, result);
// console.log("results " + y);
// var guessedLetter = prompt("Enter a Guess");
// console.log("guessed word section " + guessedLetter);
// var y = locateWords(guessedLetter, actualWordArray, result);
// console.log("results " + y);





