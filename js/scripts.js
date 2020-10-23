$(document).ready(function() {
  $("p").click(function() {
    $("#show-uses1").toggle();
  });
});

$(document).ready(function() {
  $("#quiz").submit(function() {
    const question1Input = $("#question1").val();

    $("#question1").parseInt(question1Input);

    $("#quiz-results").show();

    event.preventDefault();
  });
});

$(document).ready(function() {
  $("")
}
