$(function() {
  $(".foo,p,ul,li").click(function(event) {
    event.stopPropagation();
    $("h2").text(`\`this\`'s text is: ${$(this).text()}`);
  });
});
