let randomNumber = parseInt(Math.random() * 100);
let wrongGuessCount = 0;

function guessTheNumber() {


    let userInput = parseInt(document.querySelector("input").value);
    if (userInput < randomNumber) {
        alert("too small");
        wrongGuessCount++;
    } else if (userInput > randomNumber) {
        alert("too Big");
        wrongGuessCount++;
    } else {
        alert("congratulations" + wrongGuessCount);
        let randomNumber = parseInt(Math.random() * 100);
        wrongGuessCount = 0;
    }






}