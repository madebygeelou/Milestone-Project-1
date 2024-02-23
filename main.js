// var x = document.getElementById("audio1");

// function playAudio() {
//   x.play();
// }

// function pauseAudio() {
//   x.pause();
// }

// var input = document.getElementById("button1");

// input.addEventListener("keypress", function(event) {
//  if (event.key === "W") {
//    event.preventDefault();
//    document.getElementById("myBtn").click();
//  }
// }); 

function clickGreen() {
    var sound = new Audio('158914__carlmartin__cajun-kick-hit-19.wav');
    sound.play();
    debugger
    let button = document.getElementById('button1');
    button.classList.add("green-clicked");
        setTimeout(function() {
            button.classList.remove("green-clicked");
        }, 1000); // Change 1000 to the desired duration in milliseconds
}

document.addEventListener("keydown", e => {
 e.preventDefault();
 if (
    e.key.toLowerCase() === "w"
 ){
   clickGreen();
 }
 });

 function clickRed() {
    var sound = document.getElementById('audio2');
    sound.play();

        setTimeout(function() {
            button.classList.remove("button1-clicked");
        }, 1000); // Change 1000 to the desired duration in milliseconds
}
document.addEventListener("keydown", e => {
 e.preventDefault();
 if (
    e.key.toLowerCase() === "a"
 ){
   clickRed();
 }
 });

 function clickYellow() {
    var sound = document.getElementById('audio3');
    sound.play();

//         setTimeout(function() {
//             button.classList.remove("button1-clicked");
//         }, 1000); // Change 1000 to the desired duration in milliseconds
// }
}
document.addEventListener("keydown", e => {
 e.preventDefault();
 if (
    e.key.toLowerCase() === "s"
 ){
   clickYellow();
 }
 });

 function clickBlue() {
    var sound = document.getElementById('audio4');
    sound.play();

//         setTimeout(function() {
//             button.classList.remove("button1-clicked");
//         }, 1000); // Change 1000 to the desired duration in milliseconds
// }
}
document.addEventListener("keydown", e => {
 e.preventDefault();
 if (
    e.key.toLowerCase() === "d"
 ){
   clickBlue();
 }
 });
// document.addEventListener("DOMContentLoaded", function() {
//     var input = document.getElementById("button1");
// debugger
//     input.addEventListener("keypress", function(event) {
//         if (event.key === "W") {
//             event.preventDefault();
//             clickGreen(); 
//         }
//     });

//     function clickGreen() {
//         var sound = document.getElementById('audio1');
//         sound.play();
//     }
// });

