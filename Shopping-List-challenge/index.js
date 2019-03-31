$(function() {
  $(".container").submit(event => {
    event.preventDefault();
    // Prevent form default

    const addedItem = $("#shopping-list-entry")
      .val()
      .trim();
    $("#shopping-list-entry").val(" ");
    //input listed new <li></li> added for entry

    let item =
      "<li><span class='shopping-item'>" +
      addedItem +
      "</span>" +
      "<div class='shopping-item-controls'><button class='shopping-item-toggle'>" +
      "<span class='button-label'>check</span></button><button class='shopping-item-delete'>" +
      "<span class='button-label'>delete</span></button></div></li>";
    //declaring a variable for shopping list for the .append

    $(".shopping-list").append(item);
    //sending new shopping list item to bottom of list

    /* ************ CHECK ************ */
    $(".shopping-list").on("click", ".shopping-item-toggle", function() {
      $(this)
        .closest("li")
        .find(".shopping-item")
        .toggleClass("shopping-item__checked");
    });
    // this check marks mark your item on your list

    /* ************ DELETE *************** */
    $(".shopping-list").on("click", ".shopping-item-delete", function() {
      $(this)
        .closest("li")
        .remove();
    });
    //this button delets an item on your list
  });
});
