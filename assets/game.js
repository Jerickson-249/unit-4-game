var blue = document.getElementById("blue");
var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");

var targetScore = document.getElementById('targetScore');
    targetScore.innerHTML = getRandomValue(49, 101);

var yourScore = document.getElementById('yourScore');
    yourScore.innerHTML = 0;

function addToScore(val) {
var numberToAdd = parseInt(val); 
var currentScore = parseInt(yourScore.innerHTML); yourScore.innerHTML = numberToAdd + currentScore;
}

function getRandomValue (y, z){
    return Math.floor((Math.random() * y) + z);
}

function checkPlayerScore() {
    var playerInt = parseInt(yourScore.innerHTML); 
    var targetInt = parseInt(targetScore.innerHTML);

    if (playerInt === targetInt) {
        alert("Congratulations! You WON!");
    } else if (playerInt > targetInt) {
        alert ("Boo! You LOST! Try again!");
    }
}

blue.addEventListener('click', function() {
    addToScore(this.value);
    checkPlayerScore();
});

red.addEventListener('click', function() {
    addToScore(this.value);
    checkPlayerScore();
});

yellow.addEventListener('click', function() {
    addToScore(this.value);
    checkPlayerScore();
});

green.addEventListener('click', function() {
    addToScore(this.value);
    checkPlayerScore();
});
