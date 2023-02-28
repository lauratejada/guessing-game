'use strict';

const btnReset = document.querySelector('.reset');
const btnGuess = document.querySelector('.guess');
const input = document.querySelector('.input');
const message = document.querySelector('.guessing-counter p');
let counterMessage = new String();
let counter = 0;
counterMessage = '';

function returnRandomNumber(){
    return (Math.floor(Math.random() * (50 - 5 + 1) ) + 5).toString();
}

console.log(returnRandomNumber());

function isNumber(strNum) { 
    let patternNum = /^\d+(\.\d+)?$/g; 
    const auxNum = strNum.match(patternNum);    
    console.log(`Is valid : ${auxNum}`);
    return (auxNum !== null) ? true : false;
} 

function isRangeValid(num) {
    let numAux = parseInt(num);
    return (numAux >= 5 && numAux <= 50) ? true : false;  
}

function showMessage(stringResult1){
    message.innerText = stringResult1;
    console.log(stringResult1);
}

btnGuess.addEventListener('click', function() {
   // console.log(this.value);
    if (input !== null) {
        if (isRangeValid(input) && isNumber(input)){
            if (input === '') {
                showMessage(`Hurray!! you guessed the number`);
            } else {
                counter++;
                showMessage(`Guesses: ${counter}`);
            }
        } else {
            showMessage('Type a valid number > 5 and < 50');
        }
    } else {
        showMessage('Type or choose number');
    }
});

btnReset.addEventListener('click', function() {
    console.log(this.value);
    counterMessage = '';
    counter = 0;
    input.value = 0;
    //showMessage(counterMessage);
});