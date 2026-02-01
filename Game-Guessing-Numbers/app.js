var playAgain = true;

while (playAgain) {
    var random = Math.floor(Math.random() * 10 + 1);
    var userInput = Number(prompt("Guess a number between 1 to 10: "));

    if(userInput === random){
        alert("Congratulation! You gussed the Correct number: " + random)
    } else if (userInput < random){
        alert ("Too low The correct number was: " + random);
    } else if(userInput > random){
        alert("Too high! The correct number was: " + random)
    }
    
    playAgain = confirm("Do you want to play again")
}


