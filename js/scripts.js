// Back-end logic:

function pigLatin(str) {
  var array = str.split("");
  var words = str.split(" ");
  if (array.length === 1 && (array[0] === "a" || array[0] === "i")) {
    array.push("ay");
    return array;
  } else if (array.length === 1 && isNaN(parseInt(str)) === false) {
    return array;
  } else if (array.length > 1) {
    for (index = 0; index < array.length; index += 1) {
      if (isNaN(array[index]) === false) {
        array[index] = array[index];
      } else if (words.length === 1 && (array[0] === "a" || array[0] === "e" || array[0] === "i" || array[0] === "o" || array[0] === "u")) {
        array.push("ay");
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
