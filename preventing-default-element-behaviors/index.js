$(function() {
  $(".js-form").submit(event => {
    event.preventDefault(); // <- stops form default submission actions
    const userTextElement = $(event.currentTarget).find("#user-text");
    $(".js-display-user-text").text(`User text is: ${userTextElement.val()}`);
    userTextElement.val("");
  });
});
