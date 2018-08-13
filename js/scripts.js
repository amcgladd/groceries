// $(document).ready(function() {
//   $("#inputForm").submit(function(event) {
//     event.preventDefault();
//
//     var listString = $("#userInput").val()
//     $("#inputForm").toggle();
//     var foods = listString.toUpperCase().split(" ").sort();
//     foods.forEach(function(food) {
//       $(".groceryList").append('<li>' + food + '</li>');
//     });
//     console.log(foods);
//   });
// });



$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    $("#inputForm").toggle();
    var foods = $("#userInput").val().toUpperCase().split(" ").sort().forEach(function(food) {
      $(".groceryList").append('<li>' + food + '</li>');
    });
    console.log(foods);
  });
});
