// Back-end logic:

function pigLatin(str) {
  var array = str.split("");
  var words = str.split(" ");
  var consonants = ["q", "w", "r", "t", "p", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  var vowels = ["a", "i", "e", "o", "u"];

  if (array.length === 1 && (array[0] === "a" || array[0] === "i")) {
    array.push("ay");
    return array;
  } else if (words.length === 1 && isNaN(parseInt(str)) === false) {
    return array;
  } else if (words.length === 1 && vowels.includes(array[0])) {
    array.push("ay");
  } else if (words.length === 1 && consonants.includes(array[0]) && str.includes("qu")) {
    var cloneArray = array.slice();
    for (var index = 0; consonants.includes(array[index]); index += 1) {
      var firstLetter = cloneArray.shift();
      cloneArray.push(firstLetter);
    } 
      var letterU = cloneArray.shift();
      cloneArray.push(letterU);
      cloneArray.push("ay");
      return cloneArray;
    } else if (words.length === 1 && consonants.includes(array[0])) {
    var cloneArray = array.slice();
    for (var index = 0; consonants.includes(array[index]); index += 1) {
      var firstLetter = cloneArray.shift();
      cloneArray.push(firstLetter);
    }
    cloneArray.push("ay");
    return cloneArray;
  } else if (words.length === 1 && array[0] === "y") {
    var cloneArray = array.slice();
    var firstLetter = cloneArray.shift();
    cloneArray.push(firstLetter);
    for (var index = 1; consonants.includes(array[index]); index += 1) {
      var nextLetter = cloneArray.shift();
      cloneArray.push(nextLetter);
    }
    cloneArray.push("ay");
    return cloneArray;
  }
}   

// Front-end logic:

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var sentenceInput = $("input#sentence").val().toLowerCase();

    var newArray = pigLatin(sentenceInput);

    var newSentence = newArray.join("").toLowerCase();;
    
    $("#output").text(newSentence).show();
  });
});