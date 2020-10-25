//index.html page functions
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

//quiz page functions 

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const question1 = $("select#question1").val();
//this line of code is for totalling up value inputs once I can figure out how to do that. Must parse value for accurate result!
//    $("#question1").parseInt(question1Input);
    if (question1 === "1") {
      $("#swift-logo").removeClass();
      $("#swift-logo").fadeIn();
    } else if (question1 === "2") {
      $('#java-logo').removeClass();
      $('#java-logo').fadeIn();
    } else if (question1 === "3") {
      $('#javascript-logo').removeClass();
      $('#javascript-logo').fadeIn();
    } else if (question1 === "4") {
      $('#python-logo').removeClass();
      $('#python-logo').fadeIn();
    }
    
  });
});

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const question2 = $("select#question2").val();

    if (question2 === "1") {
      $("#swift-logo").removeClass();
      $("#swift-logo").fadeIn();
    } else if (question2 === "2") {
      $('#java-logo').removeClass();
      $('#java-logo').fadeIn();
    } else if (question2 === "3") {
      $('#javascript-logo').removeClass();
      $('#javascript-logo').fadeIn();
    } else if (question2 === "4") {
      $('#python-logo').removeClass();
      $('#python-logo').fadeIn();
    }
    
  });
});

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const question3 = $("select#question3").val();

    if (question3 === "1") {
      $("#swift-logo").removeClass();
      $("#swift-logo").fadeIn();
    } else if (question3 === "2") {
      $('#java-logo').removeClass();
      $('#java-logo').fadeIn();
    } else if (question3 === "3") {
      $('#javascript-logo').removeClass();
      $('#javascript-logo').fadeIn();
    } else if (question3 === "4") {
      $('#python-logo').removeClass();
      $('#python-logo').fadeIn();
    }
    
  });
});

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const question4 = $("select#question4").val();  

    if (question4 === "1") {
      $("#swift-logo").removeClass();
      $("#swift-logo").fadeIn();
    } else if (question4 === "2") {
      $('#java-logo').removeClass();
      $('#java-logo').fadeIn();
    } else if (question4 === "3") {
      $('#javascript-logo').removeClass();
      $('#javascript-logo').fadeIn();
    } else if (question4 === "4") {
      $('#python-logo').removeClass();
      $('#python-logo').fadeIn();
    }
    
  });
});

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const question5 = $("select#question5").val();

    if (question5 === "1") {
      $("#swift-logo").removeClass();
      $("#swift-logo").fadeIn();
    } else if (question5 === "2") {
      $('#java-logo').removeClass();
      $('#java-logo').fadeIn();
    } else if (question5 === "3") {
      $('#javascript-logo').removeClass();
      $('#javascript-logo').fadeIn();
    } else if (question5 === "4") {
      $('#python-logo').removeClass();
      $('#python-logo').fadeIn();
    }
    
  });
});

 //   }
    //this line of code is also for totalling up all value inputs - once I figure that out.
    //    $("#quiz-results").show();