//index.html page 

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


//quiz.html page  

  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const question1 = $("select#question1").val();
    const question2 = $("select#question2").val();
    const question3 = $("select#question3").val();
    const question4 = $("select#question4").val(); 
    const question5 = $("select#question5").val();

//    let results = highest # of answers ... or total occurences of x value

//if (results === "")

//this line of code is for totalling up value inputs once I can figure out how to do that. Must parse value for accurate result!
//    $("#question1").parseInt(question1Input);

    if (results) {
      (1 > all others)
      then A
      $(this).remove();
      $("#swift-logo").fadeIn();   
      else if (2 > all others)
      then B
      $(this).remove();
      $('#java-logo').fadeIn();
      else if (3 > all others)
      then C
      $(this).remove();
      $('#javascript-logo').fadeIn();
      else if (4 > all others)
      $(this).remove();
      $('#python-logo').fadeIn();
      }
  });

 //   }
    //this line of code is also for totalling up all value inputs - once I figure that out.
    //    $("#quiz-results").show();