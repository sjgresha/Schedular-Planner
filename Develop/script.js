$(document).ready(function () {
  //Code that displays todays date
  function displayTodaysDate() {
    var currentDay = dayjs().format('dddd, MMMM D YYYY');

    $("#currentDay").html(currentDay);
    console.log(dayjs);
  }

  //Code that listens for when the save button is clicked
  $(".saveBtn").click(function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);

    console.log(text);
    console.log(time);
  });
  //Code for color coding the differnet events that may be scheduled and see if they are past due
  function hourTracker() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      var hourBlock = parseInt($(this).attr("id").split("hour-")[1]);

      if (hourBlock < parseInt(currentHour)) {

        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");

      } else if (hourBlock === parseInt(currentHour)) {

        $(this).removeClass("future");
        $(this).addClass("present");
        $(this).removeClass("past");

      } else {

        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");

      }
    });
  }

  $(".time-block").each(function () {
    var time = $(this).attr("id");
    var savedText = localStorage.getItem(time);

    if (savedText !== null) {
      $(this).find(".description").val(savedText);
    }
  });;

  hourTracker();
  displayTodaysDate();

});