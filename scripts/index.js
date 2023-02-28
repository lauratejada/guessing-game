'use strict';

const btnReset = document.querySelector('.reset');
const btnGuess = document.querySelector('.guess');
const input = document.querySelector('.input-value');
const message = document.querySelector('.guessing-counter p');
let counterMessage = new String();
let randNum = '';
let counter = 0;
counterMessage = '';
console.log(input);
console.log(input.value);
//showMessage(counterMessage);

function returnRandomNumber() {
    return (Math.floor(Math.random() * (15 - 5 + 1) ) + 5).toString();
}

randNum = returnRandomNumber();

function isNumber(strNum) { 
    let patternNum = /^\d+(\.\d+)?$/g; 
    const auxNum = strNum.match(patternNum);    
    console.log(`Is valid : ${auxNum}`);
    return (auxNum !== null) ? true : false;
} 

function isRangeValid(num) {
    let numAux = parseInt(num);
    return (numAux >= 5 && numAux <= 15) ? true : false;  
}

function showMessage(stringResult1){
    message.innerText = stringResult1;
    console.log(stringResult1);
}

btnGuess.addEventListener('click', function() {
    console.log(input.value);
    console.log('random # is ' + randNum);

    if (input.value !== null || input.value !== '') {
        console.log('input not null or empty');
        if (isRangeValid(input.value) && isNumber(input.value)){
            console.log('input is valid');
            if (input.value === randNum) {
                showMessage(`Hurray!! you guessed the number`);
            } else {
                counter++;
                showMessage(`Guesses: ${counter}`);
            }
        } else {
            showMessage('Type a valid number > 5 and < 15');
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
    showMessage(counterMessage);
    randNum = returnRandomNumber();
});