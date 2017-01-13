var results;
$(document).ready(function() {
  var slideSpeed = 1000;
  var resultsArray = [0, 0, 0]; //index 0, 1, 2 are # of A, B, C radio inputs selected respectively
  var selectedAnswer = null;
  var assignToArray = function(radioInput) { //reads input value to + 1 to an array index based on radio selection
    switch (radioInput) {
      case "A":
        resultsArray[0] += 1;
        break;
      case "B":
        resultsArray[1] += 1;
        break;
      case "C":
        resultsArray[2] += 1;
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
    selectedAnswer = $("#answer1 input[type='radio']:checked").val();
    assignToArray(selectedAnswer);
    alert(resultsArray);
});
  $("#question2-button").click(function(){
    $(".question2").slideUp(slideSpeed);
    $(".question3").slideDown(slideSpeed);
    selectedAnswer = $("#answer2 input[type='radio']:checked").val();
    assignToArray(selectedAnswer);
    alert(resultsArray);
});
  $("#question3-button").click(function(){
    $(".question3").slideUp(slideSpeed);
    $(".question4").slideDown(slideSpeed);
    selectedAnswer = $("#answer3 input[type='radio']:checked").val();
    assignToArray(selectedAnswer);
    alert(resultsArray);

});
  $("#question4-button").click(function(){
    $(".question4").slideUp(slideSpeed);
    $(".question5").slideDown(slideSpeed);
    selectedAnswer = $("#answer4 input[type='radio']:checked").val();
    assignToArray(selectedAnswer);
    alert(resultsArray);
});
  $("#question5-button").click(function(){
    $(".question5").slideUp(slideSpeed);
    $(".question6").slideDown(slideSpeed);
    selectedAnswer = $("#answer5 input[type='radio']:checked").val();
    assignToArray(selectedAnswer);
    alert(resultsArray);
});
  $("#question6-button").click(function(){
    $(".question6").slideUp(slideSpeed);
    selectedAnswer = $("#answer6 input[type='radio']:checked").val();
    assignToArray(selectedAnswer);
    alert(resultsArray);
});

})
