var cText;
var tempC;
var tempF;
var CorF = $("select").val();

$("button").on("click", function() {
  //cText = document.getElementById("temperature").value;
   if (CorF === "Celsius") 
   {  
     cText = $("input").val();
     tempC = parseInt(cText);
     tempF = tempC * 9 / 5 + 32;
     $("span#converted").text(tempF);
    }
})