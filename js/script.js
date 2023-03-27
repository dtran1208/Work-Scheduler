$(function () {
    // Display the current date in the header of the page.
    const currentDay = dayjs().format("MMMM D, YYYY");
    $("#currentDay").text(currentDay);
  
    function saveEvent() {
      const timeBlockId = $(this).parent().attr("id");
      const description = $(this).siblings(".description").val();
      localStorage.setItem(timeBlockId, description);
    }
  
    function setColorCode() {
      const currentHour = parseInt(dayjs().format("H"));
  
      $(".time-block").each(function () {
        const timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
  
        if (timeBlockHour < currentHour) {
          $(this).addClass("past");
        } else if (timeBlockHour === currentHour) {
          $(this).addClass("present");
        } else {
          $(this).addClass("future");
        }
      });
    }
  
    function loadSavedEvents() {
      $(".time-block").each(function () {
        const timeBlockId = $(this).attr("id");
        const savedEvent = localStorage.getItem(timeBlockId);
  
        if (savedEvent) {
          $(this).children(".description").val(savedEvent);
        }
      });
    }
  
    $(".saveBtn").on("click", saveEvent);
    setColorCode();
    loadSavedEvents();
  });
  