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

    $("#deckcards").submit(function(event) {
      event.preventDefault();
      var suits = [" of Clubs"," of Diamonds"," of Spades"," of Hearts"];
      var numbers = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];

      suits.forEach(function(suit) {
        numbers.forEach(function(number) {
          if (suit === " of Clubs") { $(".Clubs").append('<li>'+number+suit+'</li>');
        } else if (suit === " of Diamonds") { $(".Diamonds").append('<li>'+number+suit+'</li>');
      } else if (suit === " of Spades") { $(".Spades").append('<li>'+number+suit+'</li>');
          } else {
          $(".Hearts").append('<li>'+number+suit+'</li>');
          }
        });
      });


    });

});
