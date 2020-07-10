// CLICK LISTENER
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
document.querySelectorAll(".drum")[i].addEventListener("click",function() {
  var keyPressed = this.innerHTML;
  makeSound(keyPressed);
  animateSite(keyPressed);
})

// KEYBOARD LISTENSER
document.addEventListener("keydown",function(evt)
{
  var x = evt.key;
  makeSound(x);
  animateSite(x);
})


//ACTION PERFORMER
function makeSound(key)
{
  switch (key) {
    case 'w':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
      case 'a':
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        case 's':
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
          case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
            case 'j':
              var snare = new Audio("sounds/snare.mp3");
              snare.play();
              break;
              case 'k':
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
                case 'l':
                  var kick = new Audio("sounds/kick-bass.mp3");
                  kick.play();
                  break;
    default: alert("The Pressed key is not supported!! Choose from [W,A,S,D,J,K,L]");

  }
}

// ANIMATIONS

function animateSite(key)
{
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+key).classList.remove("pressed");
  },100);
}





























// // DO NOT THINK THAT IF THE LOOP IS IN ITERATION 3 THEN HOW IS IT DETECTING THE ACTIONS OF BUTTON 4, THIS IS BECAUSE, LOOP HAS ALREADY EXECUTED AND HAS ADDED EVENT LISTENER O ALL THE BUTTONS WITH ID
// // DRUM (WHEN HE WEBSITE WAS LOADED), AND THEREFORE, WHEN WE ARE PRESSING THE BUTTON (CLICKING),ITS JUST PERFORMING THE FUNCTION ASSOCIATED WITH THAT CLICK, SINCE THE LOOP HAS ALREADY ADDED THE LISTENER
// // FOR THE CLICK AT THE BEGINNING OF THE LOADING OF THE WEBSITE.
//
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++)
//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//
//     var pressedKey = this.innerHTML; //INNERHTML BECAUSE IF WE USE ONLY THIS AND START USING IT IN SWITCH, THAT WONT WORK, BECAUSE THIS RETURNS AN OBJECT, AND SWITCH REQUIRES SOME
//     // EXPRESSION IN PLAIN TEXT
//     theDominator(pressedKey);
//     buttonAnimation(pressedKey)
//   })
// // KEYBOARD PRESS
//   document.addEventListener("keydown",function(event){
//     var x=event.key;
//     theDominator(x);
//     buttonAnimation(x)
//   })
//
// function buttonAnimation(key)
// {
//   // Since each each that is pressed/clicked has the same class name
//   // corresponding to it, so we will use that fact.Note:classes
//   // start with a . and hence concatenating with a dot.
//   var activeButton= document.querySelector("."+key);
//   activeButton.classList.add("pressed");
//
//   // Since the button is int pressed state only it doesnt look good,
//   // so to unpress it, lets make a delay of say 100ms and then remove
//   // the pressed class so it seems kinda flashy!!
//   //setTimeout function is used here.
//   setTimeout(function(){
//     activeButton.classList.remove("pressed");
//   },100);
//
//   //The function above waits for 100ms before executing the code insde it.
//
// }
//
//   function theDominator(Key)
//   {
//     switch (Key) {
//       case 'w':
//         var tom1 = new Audio('sounds/tom-1.mp3');
//         tom1.play();
//         break;
//       case 'a':
//         var tom2 = new Audio('sounds/tom-2.mp3');
//         tom2.play();
//         break;
//       case 's':
//         var tom3 = new Audio('sounds/tom-3.mp3');
//         tom3.play();
//         break;
//       case 'd':
//         var tom4 = new Audio('sounds/tom-4.mp3');
//         tom4.play();
//         break;
//       case 'j':
//         var snare = new Audio('sounds/snare.mp3');
//         snare.play();
//         break;
//       case 'k':
//         var crash = new Audio('sounds/crash.mp3');
//         crash.play();
//         break;
//       case 'l':
//         var kick = new Audio('sounds/kick-bass.mp3');
//         kick.play();
//         break;
//       default:
//         console.log(pressedKey + " is not Valid");
//
//     }
//   }
