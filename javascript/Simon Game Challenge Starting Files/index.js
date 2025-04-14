var buttoncolors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var started = false;
var userclickedpattern = [];
var level = 0;


function nextsequence() {
  userclickedpattern = [];
  level++;
  $("#level-title").text("level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttoncolors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
  //   $("#" + randomChosenColor)
  //     .animate({ opacity: 0.5 }, 100)
  //     .animate({ opacity: 1 }, 100);
  //     playSound(randomChosenColor);
}
$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userclickedpattern.push(userChosenColor);
  console.log(userclickedpattern);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkanswer(userclickedpattern.length - 1);
});
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(() => {
    $("#" + currentColor).removeClass("pressed");
  }, (timeout = 100));
}
$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("level " + level);
    nextsequence();
    started = true;
  }
});
function checkanswer(currentLevel)
{
  if(gamePattern[currentLevel]=== userclickedpattern[currentLevel]
  )
    {
    console.log("success");
      if(userclickedpattern.length===gamePattern.length)
      {
        setTimeout(() => {
          nextsequence();
        }, 1000);
      }
  }
  else
  {
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(()=>
    {
      $("body").removeClass("game-over");
    },200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }

}
function startOver()
{
  level = 0;
  gamePattern = [];
  started = false;
  
}