var cText;
var tempC;
var tempF;

$("button").on("click", function() {
  //cText = document.getElementById("temperature").value;
  cText = $("input").val();
  tempC = parseInt(cText);
  tempF = tempC * 9 / 5 + 32;
  $("span#converted").text(tempF);
})