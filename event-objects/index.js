$(function() {
  $("button").mousedown(event =>
    $(".output").text(`Button clicked: ${event.which}`)
  );

  $("input").keydown(event => $(".output").text(`Key pressed: ${event.key}`));
});
