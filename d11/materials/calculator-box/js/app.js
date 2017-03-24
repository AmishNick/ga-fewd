// 1. Besure to write your code within the $(document).ready(...)
// 2. Add .click() event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, var count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - . text() or .html()
// - .css()

  console.log("start");
outVal = 0;


$("#a10").on("click", function() {
  console.log("clicked");
  outVal += 10;
  $("#out").text(outVal);
})

$("#a20").on("click", function() {
  console.log("clicked");
  outVal += 20;
  $("#out").text(outVal);
})

$("#a30").on("click", function() {
  console.log("clicked");
 outVal += 30;
  $("#out").text(outVal);
})

$("#n10").on("click", function() {
  console.log("clicked");
  outVal -= 10;
  $("#out").text(outVal);
})

$("#n20").on("click", function() {
  console.log("clicked");
  outVal -= 20;
  $("#out").text(outVal);
})

$("#n30").on("click", function() {
  console.log("clicked");
 outVal -= 30;
  $("#out").text(outVal);
})

$("#out").on("click", function() {
  console.log("clicked");
  outVal = 0;
  $("#out").text(outVal);
 // $("#out").toggleClass("white");
 $("#out").css("background-color", "white");
})

$("#red").on("click", function() {
  console.log("clicked");
  //$("#out").toggleClass("red");
  $("#out").css("background-color", "red");
})
$("#blue").on("click", function() {
  console.log("clicked");
  //$("#out").toggleClass("blue");
  $("#out").css("background-color", "blue");
})