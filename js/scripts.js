//Back-end logic:






//Front-end logic:

$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var array = sentence.split("");
    array.forEach(function (element) {
      if (isNaN(element) === false) {
        element = element;
      }
    });
    $("#output").text(array).show();
  })
});
