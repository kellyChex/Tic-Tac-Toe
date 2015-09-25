$(document).ready(function(){
  var totalTurnCount = 0;
  var winningCombinations = [7,56,448,73,146,292,273,84]
  var rebelX;
  var empireO;
  var rebelXGameCount = 0;
  var empireOGameCount = 0;

  function nameClick(){
    var clicks = 0;
    $("#nameEnterButton").click(function(){
      if(clicks === 0) {
        rebelX = $("#enterNameInput").val();
        $("#enterNameInput").val("");
        $("#rebelName").append(rebelX);
        $("#inputBoxInfo").text("Darth Vader's minion, enter your name:");
      } else if (clicks === 1) {
        empireO = $("#enterNameInput").val();
        console.log(empireO);
        $("#enterNameInput").val("");
        $("#empireName").append(empireO);
      } else {
        alert("No more players");
      }
      clicks++;
    }); //clickFunctio


  }; //nameClick
  nameClick();

  function playerClickX(){
    var playerX = 0;
    var playerO = 0;

    $("td").click(function(){
      if(totalTurnCount % 2 === 0){

        $(this).append('<img src ="X-Wing_Render.png">');
        var addX = +$(this).text();
        playerX = playerX + addX;
        var hasImage = $("img", this).length > 0;
        if (hasImage) {
          $(this).off("click");
        };
        if(winningCombinations.indexOf(playerX) >= 0){
          alert(rebelX + " you win!");
          rebelXGameCount++;
          $("#rebelTally").empty();
          $("#rebelTally").append(rebelXGameCount);
          $("#hiddenPrompt").css("visibility", "visible");
          $("#endGameButton").click(function(){
            $("td").empty();
            $("#hiddenPrompt").css("visibility", "hidden");
          });
        };
      }
      else {
        $(this).append('<img src="deathStar.jpg">');
        var addO = +$(this).text();
        playerO = playerO + addO;
        var hasImage = $("img", this).length > 0;
        if (hasImage) {
          $(this).off("click");
        }
        };
        if(winningCombinations.indexOf(playerO) >= 0){
          alert(empireO + ", you win!");
          empireOGameCount++;
          $("#minionTally").empty();
          $("#minionTally").append(empireOGameCount);
          $("#hiddenPrompt").css("visibility", "visible");
          $("#endGameButton").click(function(){
            $("td").empty();
            $("#hiddenPrompt").css("visibility", "hidden");
          });
        };

      totalTurnCount++;
      if(totalTurnCount === 9) {
        alert("Game Over");
        $("#hiddenPrompt").css("visibility", "visible");
        $("#endGameButton").click(function(){
          $("td").empty();
          $("#hiddenPrompt").css("visibility", "hidden");
      });
    }
    }); //td on click
  }; //playerClick
  playerClickX();


});//ready function
