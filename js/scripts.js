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
    const result1 = $("#question1").val();
    const result2 = $("#question2").val();
    const result3 = $("#question3").val();
    const result4 = $("#question4").val(); 
    const result5 = $("#question5").val();

    let val1Swift = [];
    result1.forEach(function(element) {
      // (if result1 === 1  val1Swift.push() 
      // else if result1 === 2 val2Java.push()
      //else if result1 === 3 val3Javascript.push()
      //else if result1 === 4 val4Javascript.push()
    }
    let val2Java = [];
    let val3Javascript = [];
    let val4Python = [];

    //THEN when each Q's answer is pushed into the appropriate array


    });
//    let results = highest # of answers ... or total occurences of x value

//this line of code is for totalling up value inputs once I can figure out how to do that. Must parse value for accurate result!
//    $("#question1").parseInt(question1Input);

    // if (results) {
    //   (total # of 1 values > all others)
    //   then A
    //   $(this).remove();
    //   $("#swift-logo").fadeIn();   
      // else if (2 > all others)
      // then B
      // $(this).remove();
      // $('#java-logo').fadeIn();
      // else if (3 > all others)
      // then C
      // $(this).remove();
      // $('#javascript-logo').fadeIn();
      // else if (4 > all others)
      // $(this).remove();
      // $('#python-logo').fadeIn();
      // }
  });

 //   }
    //this line of code is also for totalling up all value inputs - once I figure that out.
    //    $("#quiz-results").show()