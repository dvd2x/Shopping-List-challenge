$(function handleBulbClicks() {
  $(".js-lightbulb").on("click", event => {
    const targetBulb = $(event.currentTarget);
    const otherBulbs = $(".js-lightbulb").not(targetBulb);

    otherBulbs.removeClass("bulb-on");
    targetBulb.toggleClass("bulb-on");
  });
});
$(handleBulbClicks);

// $(function handleBulbClicks() {
//   $(".js-lightbulb").on("click", function(event) {
//     const targetBulb = $(event.currentTarget);
//     const otherBulbs = $(".js-lightbulb").not(targetBulb);
//     otherBulbs.removeClass("bulb-on");
//     targetBulb.toggleClass("bulb-on");
//   });
// });
// return handleBulbClicks;
