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
        if (result1 === "1") {
        $(this).remove();
        $('#swift-logo').show();
      } else if (result1 === "2") {
        $(this).remove();
        $('#java-logo').show();
      } else if (result1 === "3") {
        $(this).remove();
        $('#javascript-logo').show();
      } else if (result1 === "4") {
        $(this).remove();
        $('#python-logo').show();
      }
  });
});