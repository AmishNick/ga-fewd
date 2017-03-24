console.log("im working");

$("button").on("click", function() {
  $("p.text1").text("beenclicked");
  $("div#box1").css("background-color", "blue");
})

$("div#box1").on("click", function(){
  $("div#box1").css("width", "500px")
  $("div#box1").css("height", "500px")
  //$("div#box1").toggleClass("bigger");
})