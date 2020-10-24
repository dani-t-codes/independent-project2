$(document).ready(function() {
  $(".click-me").click(function() {
    $(".show-uses").toggle();
    $("#show-uses6").toggle();
  });
});

$(document).ready(function() {
  $("form-group#quiz").submit(function(event) {
    event.preventDefault();

    const question1Input = $("select#question1Input").val();

    //this line of code is for totalling up value inputs once I can figure out how to do that. Must parse value for accurate result!
//    $("#question1").parseInt(question1Input);
    if (question1Input === "1") {
      $("#swift-logo").fadeIn();
    } else if (question1Input === "2") {
      $('#java-logo').fadeIn();
    } else if (question1Input === "3") {
      $('#javascript-logo').fadeIn();
    } else if (question1Input === "4") {
      $('#python-logo').fadeIn();
    }
//this line of code is also for totalling up all value inputs - once I figure that out.
//    $("#quiz-results").show();
  });
});

$(document).ready(function() {
  $("")
});
