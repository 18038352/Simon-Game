
let gamePattern = []
let selectedColour = []
let buttonColours = ["red", "blue", "green", "yellow"]
let level = 0


function nextSequence()
{
  selectedColour = []
  let randomNumber = Math.floor(Math.random() * 4)
  let randomChosenColour = buttonColours[randomNumber]
  gamePattern.push(randomChosenColour)


  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColour).delay(300).fadeIn(200).fadeOut(200).fadeIn(200);

  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

}


function resetGame()
{
  $("h1").text("Incorrect... GAME OVER! Press A Key To Reload Page")

  $(document).keypress(function(event)
  {

    location.reload()

  })
}

function checkAnswer(currentLevel)
{
  //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
  if (gamePattern[currentLevel] === selectedColour[currentLevel]) {

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (selectedColour.length === gamePattern.length){
      $("h1").text("Level " + level++)
      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {

        nextSequence();
      }, 1000);

    }

  }


  else{
    var wrongSound = new Audio("sounds/wrong.mp3")
    wrongSound.play()
    resetGame()
    $("body").css("background-color", "red")

  }
}


$(".btn").on("click", function()
{
//f
  //need to grab id of user clicked button
  let userChosenColour = $(this).attr('id')
  selectedColour.push(userChosenColour)
  $("#" + userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  var sound = new Audio("sounds/" + userChosenColour + ".mp3");
  sound.play();

  checkAnswer(selectedColour.length-1)


})

$(document).keypress(function(event)
{

  level = 0
  nextSequence()
  $("h1").text("Level " + level++)

})
