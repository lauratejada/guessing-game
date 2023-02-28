'use strict';

const btnReset = document.querySelector('.reset');
const btnGuess = document.querySelector('.guess');
const showCounter = document.querySelector('.guessing-counter p');
let counterString = new String();
counterString = '';

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

function showResult(stringResult1){
    showCounter.innerText = stringResult1;
}

btnReset.addEventListener('click', function() {
        console.log(this.value);
        counterString = '';
        showResult(counterString);
});

btnGuess.addEventListener('click', function() {
    console.log(this.value);

});

