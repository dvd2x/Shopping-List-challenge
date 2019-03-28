function handleClicks() {
  let clickCount = 0;
  $(".js-click-counter").text(clickCount);
  $(".js-clicker").click(function(event) {
    clickCount += 1;
    $(".js-click-counter").text(clickCount);
  });
}
$(handleClicks);
