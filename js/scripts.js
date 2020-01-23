// Back-end logic:

function pigLatin(str) {
  var array = str.split("");
  var words = str.split(" ");
  var consonants = ["q", "w", "r", "t", "y", "p", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  var vowels = ["a", "i", "e", "o", "u"];
  if (array.length === 1 && (array[0] === "a" || array[0] === "i")) {
    array.push("ay");
    return array;
  } else if (array.length === 1 && isNaN(parseInt(str)) === false) {
    return array;
  } else if (array.length > 1) {
    for (index = 0; index < array.length; index += 1) {
      if (isNaN(array[index]) === false) {
        array[index] = array[index];
      } else if (words.length === 1 && (vowels.includes(array[0]))) {
        array.push("ay");
      } else if (words.length === 1 && (consonants.includes(array[0]))) {
        var firstLetter = array.shift();
        console.log(firstLetter);
        array.push(firstLetter);
        console.log(array);
        array.push("ay");
        console.log(array);
      } 
     }
    return array;
    }
}


// Front-end logic:

$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    var sentenceInput = $("input#sentence").val().toLowerCase();

    
    var newArray = pigLatin(sentenceInput);
    console.log(newArray);
    var newSentence = newArray.join("").toLowerCase();;
    
    $("#output").text(newSentence).show();
  });
});