

$("#buttonA").on("click", function() {
        var numberup = "";
        for (var i = 0; i < 12; i++) {
          var random = Math.floor(Math.random() * 12) + 1;
          numberup = numberup + random;

        }
        $("#score").prepend("score" + numberup);
}
$("#buttonB").on("click", function() {
    var numberup = "";
        for (var i = 0; i < 12; i++) {
          var random = Math.floor(Math.random() * 12) + 1;
          numberup = numberup + random;

        }
        $("#score").prepend("score" + numberup);
}
$("#buttonC").on("click", function() {
    var numberup = "";
        for (var i = 0; i < 12; i++) {
          var random = Math.floor(Math.random() * 12) + 1;
          numberup = numberup + random;

        }
        $("#score").prepend("score" + numberup);
}
$("#buttonD").on("click", function() {
    var numberup = "";
        for (var i = 0; i < 12; i++) {
          var random = Math.floor(Math.random() * 12) + 1;
          numberup = numberup + random;

        }
        $("#score").prepend("score" + numberup);
}