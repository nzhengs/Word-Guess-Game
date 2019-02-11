var randomWords = ["apicort", "brinjal", "cat", "mango", "banana"];

var fruits = {
    mango: "https://www.titosvodka.com/uploads/recipes/_auto1000/ingredient-mango.jpg",
}

function getRandomInt(max) {
  var random = Math.random();
  var randomNumber = random * max;
  var randomInt = Math.floor(randomNumber);
  return randomInt;
}
function getRandomSelected() {
  var randomIndex = getRandomInt(randomWords.length);
  var randomSelected = randomWords[randomIndex];
  return randomSelected;
}
function getCharIndices(str, char) {
  var indices = [];
  for (var i = 0; i < str.length; i++) {
    var c = str.charAt(i);
    if (char.toLowerCase() === c.toLowerCase()) {
      indices.push(i);
    }
  }
  return indices;
}

function displayWithDashes(array) {
  var dashed = array.map(function(a) {
    return (a === "") ? "_" : a;
  });

  var dashes = dashed.join(" ");
  $("#dashes").text(dashes);
}

var guessedWord = getRandomSelected();
var remainingAttempts = guessedWord.length + 6;
var correctAttempt = new Array(guessedWord.length);
correctAttempt.fill("");
console.log(guessedWord);
displayWithDashes(correctAttempt);

var incorrectAttempt = [];
var allKeyPressed = [];
document.onkeyup = function(event) {
  var keyPress = event.key;
  keyPress = keyPress.toLowerCase();
  if (allKeyPressed.indexOf(keyPress) >= 0) {
    return;
  }
  allKeyPressed.push(keyPress);

  var index = guessedWord.indexOf(keyPress);
  if (index >= 0) {
    var indices = getCharIndices(guessedWord, keyPress);
    indices.forEach(function(i) {
      correctAttempt[i] = keyPress;
    });
    displayWithDashes(correctAttempt);
   
    if (guessedWord === correctAttempt.join("")) {
        $("#displayImage").attr("src", fruits[guessedWord]);
        setTimeout(function() {// timeout to prevent browser update delay issue
            alert("Congratulation!!!You Won!!");
            location.reload();
        }, 100);

    }
  } else {
    if (incorrectAttempt === keyPress) {
    }
    incorrectAttempt.push(keyPress);
    $("#falseAttempts").html(incorrectAttempt.join(", "));
  }

  remainingAttempts--;
  $("#remainingAttempt").html(remainingAttempts);

  if (remainingAttempts === 0) {
    setTimeout(function() {// timeout to prevent browser update delay issue
        alert("Sorry!!, Please Try Again!!!!!");
        location.reload();
    });
    
    
  }
};
