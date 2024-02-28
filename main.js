
function greenGradient(){

}
function clickGreen() {
    var sound = new Audio('158914__carlmartin__cajun-kick-hit-19.wav');
    sound.play();
    document.body.className='';
    document.body.classList.add('green-gradient');
    let button = document.getElementById('button1');
    button.classList.add("green-clicked");
        setTimeout(function() {
            button.classList.remove("green-clicked");
        }, 100); 
}

document.addEventListener("keydown", e => {
 e.preventDefault();
 if (
    e.key.toLowerCase() === "w"
 ){
   clickGreen();
   greenGradient();
 }
 });
 function redGradient(){

 }
 function clickRed() {
    var sound = new Audio('678742__cloud-10__martin-garrix-animals-drop-pluck-original.wav');
    sound.play();
    document.body.className='';
    document.body.classList.add('red-gradient');
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

 function yellowGradient(){

 }
 function clickYellow() {
    var sound = new Audio('680995__cloud-10__m1-classic-organ.wav');
    sound.play();
    document.body.className='';
    document.body.classList.add('yellow-gradient');
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

 function blueGradient(){

 }
 function clickBlue() {
    var sound = new Audio('563387__badoink__woop.wav');
    sound.play();
    document.body.className='';
    document.body.classList.add('blue-gradient');
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


