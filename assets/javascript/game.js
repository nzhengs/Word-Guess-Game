var randomWords = ["apple", "banana", "cat", "mango"];

function getRandomInt(max) {
  var random = Math.random();
  var randomNumber = random * max;
  var randomInt = Math.floor(randomNumber);
  return randomInt;
}
function getRandomSelected(){
    var randomIndex = getRandomInt(randomWords.length);
    var randomSelected = randomWords[randomIndex];
    return randomSelected;
}
 var dash = "_ ";
 var guessedWord = getRandomSelected()
 var totalDashes = dash.repeat(guessedWord.length);
 document.onkeyup = function (event) {
    var keyPress = event.key;
    console.log(keyPress)
    for(var i=0;i<guessedWord.length;i++){
    if (keyPress === guessedWord[i]) {
        ;
        
    
 }
}

// console.log(totalDashes);
// console.log(guessedWord);