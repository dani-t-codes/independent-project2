//index.html page functions
$(document).ready(function() {
  $("#click-me1").click(function() {
    $("#show-uses1").toggle();
  });


  $("#click-me2").click(function() {
    $("#show-uses2").toggle();
  });

  $("#click-me3").click(function() {
    $("#show-uses3").toggle();
  });


  $("#click-me4").click(function() {
    $("#show-uses4").toggle();
  });

  $("#click-me5").click(function() {
    $("#show-uses5").toggle();
  });

  $("#click-me6").click(function() {
    $("#show-uses6").toggle();
  });

//quiz page functions 

  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const question1 = $("select#question1").val();
//this line of code is for totalling up value inputs once I can figure out how to do that. Must parse value for accurate result!
//    $("#question1").parseInt(question1Input);
    if (question1 === "1") {
      $(this).remove();
      $("#swift-logo").fadeIn();
    } else if (question1 === "2") {
      $(this).remove();
      $('#java-logo').fadeIn();
    } else if (question1 === "3") {
      $(this).remove();
      $('#javascript-logo').fadeIn();
    } else if (question1 === "4") {
      $(this).remove();
      $('#python-logo').fadeIn();
    }
    
  });

  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const question2 = $("select#question2").val();

    if (question2 === "1") {
      $(this).remove();
      $("#swift-logo").fadeIn();
    } else if (question2 === "2") {
      $(this).remove();
      $('#java-logo').fadeIn();
    } else if (question2 === "3") {
      $(this).remove();
      $('#javascript-logo').fadeIn();
    } else if (question2 === "4") {
      $(this).remove();
      $('#python-logo').fadeIn();
    }
    
  });
});

  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const question3 = $("select#question3").val();

    if (question3 === "1") {
      $(this).remove();
      $("#swift-logo").fadeIn();
    } else if (question3 === "2") {
      $(this).remove();
      $('#java-logo').fadeIn();
    } else if (question3 === "3") {
      $(this).remove();
      $('#javascript-logo').fadeIn();
    } else if (question3 === "4") {
      $(this).remove();
      $('#python-logo').fadeIn();
    }
  });

  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const question4 = $("select#question4").val();  

    if (question4 === "1") {
      $(this).remove();
      $("#swift-logo").fadeIn();
    } else if (question4 === "2") {
      $(this).remove();
      $('#java-logo').fadeIn();
    } else if (question4 === "3") {
      $(this).remove();
      $('#javascript-logo').fadeIn();
    } else if (question4 === "4") {
      $(this).remove();
      $('#python-logo').fadeIn();
    }
    
  });

  $("form#quiz").first().submit(function(event) {
    event.preventDefault();
    const question5 = $("select#question5").val();

    if (question5 === "1") {
      $(this).remove();
      $('#swift-logo').fadeIn();
    } else if (question5 === "2") {
      $(this).remove();
      $('#java-logo').fadeIn();
    } else if (question5 === "3") {
      $(this).remove();
      $('#javascript-logo').fadeIn();
    } else if (question5 === "4") {
      $(this).remove();
      $('#python-logo').fadeIn();
    }
  });


 //   }
    //this line of code is also for totalling up all value inputs - once I figure that out.
    //    $("#quiz-results").show();