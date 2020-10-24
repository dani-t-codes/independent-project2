$(document).ready(function() {
  $("#click-me1").click(function() {
    $("#show-uses1").toggle();
  });
});

$(document).ready(function() {
  $("#click-me2").click(function() {
    $("#show-uses2").toggle();
  });
});

$(document).ready(function() {
  $("#click-me3").click(function() {
    $("#show-uses3").toggle();
  });
});

$(document).ready(function() {
  $("#click-me4").click(function() {
    $("#show-uses4").toggle();
  });
});

$(document).ready(function() {
  $("#click-me5").click(function() {
    $("#show-uses5").toggle();
  });
});

$(document).ready(function() {
  $("#click-me6").click(function() {
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
