$(document).ready(function() {
  $("p").click(function() {
    $("#show-uses1").toggle();
    $("#show-uses2").toggle();
    $("#show-uses3").toggle();
    $("#show-uses4").toggle();
    $("#show-uses5").toggle();
    $("#show-uses6").toggle();
  });
});

$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();

    const question1Input = $("select#question1").val();

    //this line of code is for totalling up value inputs once I can figure out how to do that. Must parse value for accurate result!
//    $("#question1").parseInt(question1Input);
    if (question1Input === "1") {
      $("#swift").fadeIn();
    } else if (question1Input === "2") {
      $('#java').fadeIn();
    } else if (question1Input === "3") {
      $('#javascript').fadeIn();
    } else if (question1Input === "4") {
      $('#python').fadeIn();
    }
//this line of code is also for totalling up all value inputs - once I figure that out.
//    $("#quiz-results").show();
  });
});

$(document).ready(function() {
  $("")
}
