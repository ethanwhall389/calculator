let operandOne = '';
let operandTwo = '';
let operator = '';

let numBttns = document.querySelectorAll('.numBttn');
let operatorBttns = document.querySelectorAll('.opBttn');
let equalsBttn = document.querySelector('.equalsBttn');
let clearBttn = document.querySelector('.clearBttn');
let mainDisplay = document.querySelector('.displayMain');
let smallDisplay = document.querySelector('.displaySmall');


numBttns.forEach( (bttn) => {
    bttn.addEventListener('click', () =>  checkOperator(bttn));
})


function checkOperator (bttn) {
    if (operator.length == 0) {
        // operator does not contain content
        operandOne += bttn.textContent;
        updateMainDisplay(operandOne);
    } else {
        // operator contains content
    }
}

function updateMainDisplay (textToDisplay) {
    let text;
    // remove current display
    if (text.textContent) {
        mainDisplay.removeChild(text);
    }
    // update
    text = document.createElement('p');
    text.textContent = textToDisplay;
    mainDisplay.appendChild(text);
}