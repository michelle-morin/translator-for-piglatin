// Back-end logic:

function pigLatin(str) {
  var array = str.split("");
  array.forEach(function(element) {
    if (isNaN(element) === false) {
      element = element;
    } else if (array.length === 1 && (array[0] === "a" || array[0] === "i" || array[0] === "A" || array[0] === "I")) {
      array.push("ay");
    }
  })
}

// Front-end logic:

$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    var sentenceInput = $("input#sentence").val();

    pigLatin(sentenceInput);
    var newSentence = array.join("");
    
    // array.forEach(function (element) {
    //   if (isNaN(element) === false) {
    //     element = element;
    //   } else if (sentence === "a" || sentence === "i" || sentence === "A" || sentence === "I") {
    //     sentence = sentence + "ay";
    //   } 
    // });
    $("#output").text(newSentence).show();
  });
});
