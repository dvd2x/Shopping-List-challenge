$(function handleBulbClicks() {
  $(".js-lightbulb").on("click", event => {
    const targetBulb = $(event.currentTarget);
    const otherBulb = $(".js-lightbulb").not(targetBulb);
    const pressBool = $(targetBulb).attr("aria-pressed", true);

    otherBulb.removeClass("bulb-on").attr("aria-pressed", false);
    targetBulb.toggleClass("bulb-on").attr("aria-pressed", !pressBool);
  });
});
$(handleBulbClicks);
