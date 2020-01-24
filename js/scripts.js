// Back-end logic:

function pigLatin(str) {
  var wordArray = str.split("");
  var consonants = ["q", "w", "r", "t", "p", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  var vowels = ["a", "i", "e", "o", "u"];

  if (wordArray.length === 1 && (wordArray[0] === "a" || wordArray[0] === "i")) {
  wordArray.push("ay");
  var outputWord = wordArray.join("");
  return outputWord;
} else if (isNaN(parseInt(str)) === false) {
  var outputWord = wordArray.join("");
  return outputWord;
} else if (vowels.includes(wordArray[0])) {
  wordArray.push("ay");
  var outputWord = wordArray.join("");
  return outputWord;
} else if (consonants.includes(wordArray[0]) && str.includes("qu")) {
  var cloneArray = wordArray.slice();
  for (var index = 0; consonants.includes(wordArray[index]); index += 1) {
    var firstLetter = cloneArray.shift();
    cloneArray.push(firstLetter);
  } 
  var letterU = cloneArray.shift();
  cloneArray.push(letterU);
  cloneArray.push("ay");
  var outputWord = cloneArray.join("");
  return outputWord;
  } else if (consonants.includes(wordArray[0])) {
    var cloneArray = wordArray.slice();
    for (var index = 0; consonants.includes(wordArray[index]); index += 1) {
      var firstLetter = cloneArray.shift();
      cloneArray.push(firstLetter);
      }
  cloneArray.push("ay");
  var outputWord = cloneArray.join("");
  return outputWord;
  } else if (wordArray[0] === "y") {
    var cloneArray = wordArray.slice();
    var firstLetter = cloneArray.shift();
    cloneArray.push(firstLetter);
    for (var index = 1; consonants.includes(wordArray[index]); index += 1) {
      var nextLetter = cloneArray.shift();
      cloneArray.push(nextLetter);
    }
    cloneArray.push("ay");
    var outputWord = cloneArray.join("");
    return outputWord;
  }
} 

// Front-end logic:

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var sentenceInput = $("input#sentence").val().toLowerCase().split(" ");

    var pigLatinArray = [];
    sentenceInput.forEach(function(word) {
      var pigLatinWord = pigLatin(word);
      pigLatinArray.push(pigLatinWord);
    })

    var pigLatinSentence = pigLatinArray.join(" ").toLowerCase();;
    
    $("#output").text(pigLatinSentence).show();
  });
});