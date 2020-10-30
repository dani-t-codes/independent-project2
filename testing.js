//This document serves the purpose of holding previous iterations of code that (desperately) needed refactoring, debugging and testing info, as well as "future" code that would advance the existing code in the scripts page from returning the result for only question 1 to returning combined results for *all* questions. 


//    let results = highest # of answers ... or total occurences of x value
//Test1: Get question const to return selected option's value
//Test1: Success
//Test 2: Create empty arrays for all 4 coding langs. 



//quiz.html page  

//  $("form#quiz").submit(function(event) {
//    event.preventDefault();
//    const result1 = $("#question1").val();
//    const result2 = $("#question2").val();
//    const result3 = $("#question3").val();
//    const result4 = $("#question4").val(); 
//    const result5 = $("#question5").val();

// OR could I do one const results = [];

//    let swiftValues = [];
//    let javaValues = [];
//    let javascriptValues = [];
//    let pythonValues = [];


//    if (result1 === 1) {
//      swiftValues.push(result1); 
//    } else if (result1 === 2) {
//      javaValues.push(result1); 
//    } else if (result1 === 3) {
//      javascriptValues.push(result1);
//    } else if (result1 === 4) {
//      pythonValues.push(result1)
//   }    
    
// ----------------------------------
// .push to javaValues
//and so on
  

    // is result1 the right thing to put at the beginning of the next method?
    // is 'for each' the right thing to use, or should I use for? 
    // will have to repeat for each Q if it IS right/OK : 
    //result2.foreach , result3.foreach etc. 
    // maybe MDN's elements.join(); will be a thing? 

//    result1.forEach(function(value) {
//    }
    

    //THEN when each Q's answer is pushed into the appropriate array
    //val1Swift.length 


    // if (results) {
    //   if val1Swift.length > val2Java.length && val3Javascript.length %% val4Python.length
    //   then...
    //   $(this).remove();
    //   $("#swift-logo").fadeIn(); 

      // else if val2Java.length > other three .length
      // then...
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

//  what if there are even number of A,B,C,D answers returned ??    

      // else if any valx === another valy
      // then 5th result 
      // $(('#id1') + ' or ' + ('#id2)').fadeIn;
      //OR skip and include bug in README

      //else if 0 answers
      //alert("Please select answers to the questions before submitting.")
// });
//   }


//---------------------------------------------

// Very 1st iteration of code, pre-refactored, for reference

//    $("form#quiz").submit(function(event) {
//     event.preventDefault();
//     const question1 = $("select#question1").val();

//     $("#question1").parseInt(question1Input);
//     if (question1 === "1") {
//       $(this).remove();
//       $("#swift-logo").fadeIn();
//     } else if (question1 === "2") {
//       $(this).remove();
//       $('#java-logo').fadeIn();
//     } else if (question1 === "3") {
//       $(this).remove();
//       $('#javascript-logo').fadeIn();
//     } else if (question1 === "4") {
//       $(this).remove();
//       $('#python-logo').fadeIn();
//     }
    
//   });

//   $("form#quiz").submit(function(event) {
//     event.preventDefault();
//     const question2 = $("select#question2").val();

//     if (question2 === "1") {
//       $(this).remove();
//       $("#swift-logo").fadeIn();
//     } else if (question2 === "2") {
//       $(this).remove();
//       $('#java-logo').fadeIn();
//     } else if (question2 === "3") {
//       $(this).remove();
//       $('#javascript-logo').fadeIn();
//     } else if (question2 === "4") {
//       $(this).remove();
//       $('#python-logo').fadeIn();
//     }
    
//   });
// });

//   $("form#quiz").submit(function(event) {
//     event.preventDefault();
//     const question3 = $("select#question3").val();

//     if (question3 === "1") {
//       $(this).remove();
//       $("#swift-logo").fadeIn();
//     } else if (question3 === "2") {
//       $(this).remove();
//       $('#java-logo').fadeIn();
//     } else if (question3 === "3") {
//       $(this).remove();
//       $('#javascript-logo').fadeIn();
//     } else if (question3 === "4") {
//       $(this).remove();
//       $('#python-logo').fadeIn();
//     }
//   });

//   $("form#quiz").submit(function(event) {
//     event.preventDefault();
//     const question4 = $("select#question4").val();  

//     if (question4 === "1") {
//       $(this).remove();
//       $("#swift-logo").fadeIn();
//     } else if (question4 === "2") {
//       $(this).remove();
//       $('#java-logo').fadeIn();
//     } else if (question4 === "3") {
//       $(this).remove();
//       $('#javascript-logo').fadeIn();
//     } else if (question4 === "4") {
//       $(this).remove();
//       $('#python-logo').fadeIn();
//     }
    
//   });

//   $("form#quiz").first().submit(function(event) {
//     event.preventDefault();
//     const question5 = $("select#question5").val();

//     if (question5 === "1") {
//       $(this).remove();
//       $('#swift-logo').fadeIn();
//     } else if (question5 === "2") {
//       $(this).remove();
//       $('#java-logo').fadeIn();
//     } else if (question5 === "3") {
//       $(this).remove();
//       $('#javascript-logo').fadeIn();
//     } else if (question5 === "4") {
//       $(this).remove();
//       $('#python-logo').fadeIn();
//     }
//   });