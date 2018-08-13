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
  $("#caveMan").submit(function(event) {
    event.preventDefault();
    $("#caveMan").toggle();
    var speech = $("#caveInput").val().split(" ");
    var bigWords = [];
    speech.forEach(function(word) {
      if (word.length >= 3) {
        bigWords.push(word);
        console.log(bigWords);
      };
    });
    var reverseWords = bigWords.reverse();
    $(".caveSpeech").text(reverseWords.join(" "));
  });
});
