// var random = Math.floor(Math.random() * 10) + 1

// var userInput = Number(prompt("Guess a number between 1 to 10: "));

// if(userInput === random){
//     alert("Congratulations! You guessed the correct number: " + random);
// }else if (userInput < random){
//     alert("Too low! The correct number was: " + random);
// }else if (userInput > random){
//     alert("Too high! The correct number was: " + random);
// }

// var confirmResult = confirm("Do you want to play again?");
// if(confirmResult){
//     location.reload();

// }



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

// var playAgain = 1;

// while (playAgain === 1) {
//     var random = Math.floor(Math.random() * 10) + 1;
//     var userInput = Number(prompt("Guess a number between 1 to 10: "));

//     if (userInput === random) {
//         alert("Congratulations! You guessed the correct number: " + random);
//     } else if (userInput < random) {
//         alert("Too low! The correct number was: " + random);
//     } else {
//         alert("Too high! The correct number was: " + random);
//     }

//     playAgain = Number(prompt("Press 1 to play again, any other number to exit"));
// }



