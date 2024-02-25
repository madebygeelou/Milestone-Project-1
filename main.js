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
    document.body.style.backgroundColor="#6886ff";
    let button = document.getElementById('button1');
    button.classList.add("green-clicked");
        setTimeout(function() {
            button.classList.remove("green-clicked");
        }, 100); // Change 1000 to the desired duration in milliseconds
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
    var sound = new Audio('678742__cloud-10__martin-garrix-animals-drop-pluck-original.wav');
    sound.play();
    document.body.style.backgroundColor="#ffa268";
    let button = document.getElementById('button2');
    button.classList.add("red-clicked");
        setTimeout(function() {
            button.classList.remove("red-clicked");
        }, 100);
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
    var sound = new Audio('680995__cloud-10__m1-classic-organ.wav');
    sound.play();
    document.body.style.backgroundColor="#cdffb2";
    let button = document.getElementById('button3');
    button.classList.add("yellow-clicked");
        setTimeout(function() {
            button.classList.remove("yellow-clicked");
        }, 100);
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
    var sound = new Audio('563387__badoink__woop.wav');
    sound.play();
    document.body.style.backgroundColor="#ff86b6";
    let button = document.getElementById('button4');
    button.classList.add("blue-clicked");
        setTimeout(function() {
            button.classList.remove("blue-clicked");
        }, 100);
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

