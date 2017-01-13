var results;
$(document).ready(function() {
  var slideSpeed = 1000;
  var resultsArray = [0, 0, 0]; //index 0, 1, 2 are # of A, B, C radio inputs selected respectively

  var assignToArray = function(radioInput) { //reads input value to + 1 to an array index based on radio selection
    switch (radioInput) {
      case "A":
        resultsArray[1] += 1;
        break;
      case "B":
        resultsArray[1] += 1;
        break;
      case "C":
        resultsArray[1] += 1;
        break;
      default: alert("error refresh page");

    }
  };
  $("form").submit(function(event) {
    event.preventDefault();
  });
  $("#start-button").click(function(){
    $("#start-button").fadeOut(75);
    $(".question1").slideDown(slideSpeed);
});
  $("#question1-button").click(function(){
    $(".question1").slideUp(slideSpeed);
    $(".question2").slideDown(slideSpeed);
    var test = $("#answer1 input[type='radio']:checked").val()
    assignToArray(test);
    alert(resultsArray);
});
  $("#question2-button").click(function(){
    $(".question2").slideUp(slideSpeed);
    $(".question3").slideDown(slideSpeed);
});
  $("#question3-button").click(function(){
    $(".question3").slideUp(slideSpeed);
    $(".question4").slideDown(slideSpeed);
});
  $("#question4-button").click(function(){
    $(".question4").slideUp(slideSpeed);
    $(".question5").slideDown(slideSpeed);
});
  $("#question5-button").click(function(){
    $(".question5").slideUp(slideSpeed);
    $(".question6").slideDown(slideSpeed);
});
  $("#question6-button").click(function(){
    $(".question6").slideUp(slideSpeed);
    $(".question1").slideDown(slideSpeed);
});

})
