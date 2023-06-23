let operandOne = '';
let operandTwo = '';
let operator = '';

let numBttns = document.querySelectorAll('.numBttn');
let operatorBttns = document.querySelectorAll('.opBttn');
let equalsBttn = document.querySelector('.equalsBttn');
let clearBttn = document.querySelector('.clearBttn');
let mainDisplay = document.querySelector('.displayMain');
let smallDisplay = document.querySelector('.displaySmall');
let mainDisplayPara = document.createElement('p');
let mainDisplayText = '0';
mainDisplayPara.textContent = mainDisplayText;
mainDisplay.appendChild(mainDisplayPara);
let smallDisplayPara = document.createElement('p');
let smallDisplayText = '';
smallDisplay.appendChild(smallDisplayPara);

numBttns.forEach( (bttn) => {
    bttn.addEventListener('click', () =>  checkOperator(bttn));
})

operatorBttns.forEach( (bttn) => {
    bttn.addEventListener('click', () => checkForEquation(bttn));
})

equalsBttn.addEventListener('click', () => finalEvaluate())

clearBttn.addEventListener('click', () => {
    mainDisplayText = '0';
    mainDisplayPara.textContent = mainDisplayText;
    smallDisplayText = '';
    smallDisplayPara.textContent = smallDisplayText;
    operandOne = '';
    operator = '';
    operandTwo = ''
})

function finalEvaluate () {
    if (operator.length > 0) {
        // We have enough for a full equation: operate on them.
        let oldOperandOne = operandOne;
        let equalSign = '='
        operandOne = operate(Number(operandOne), operator, Number(operandTwo));
        updateSmallDisplay(oldOperandOne, operator, operandTwo, equalSign, operandOne);
        updateMainDisplay(operandOne);
        operandTwo = '';
    } else if (operandTwo.length == 0) {
        // we don't have enough for a full equation
        return;
    }
}

function checkForEquation (bttn) {
    if (operator.length > 0) {
        // We have enough for a full equation: operate on them.
        operandOne = operate(Number(operandOne), operator, Number(operandTwo));
        updateMainDisplay(operandOne);
        operator = bttn.textContent;
        operandTwo = '';
        updateSmallDisplay(operandOne, operator);
    } else {
        // we don't have enough for a full equation
        operator = bttn.textContent;
        updateSmallDisplay(operandOne, operator);
    }
}


function checkOperator (bttn) {
    if (operator.length == 0) {
        // operator does not contain content
        operandOne += bttn.textContent;
        updateMainDisplay(operandOne);
    } else {
        // operator contains content
        operandTwo += bttn.textContent;
        updateMainDisplay(operandTwo);
    }
}

function updateMainDisplay (textToDisplay) {
    // remove current display
    if (mainDisplayText.length > 0) {
        mainDisplayText = '';
    }
    // update
    mainDisplayText = textToDisplay;
    mainDisplayPara.textContent = mainDisplayText;
}

function updateSmallDisplay () {
    // remove current display
    if (smallDisplayText.length > 0) {
        smallDisplayText = '';
    }
    // update
    for (let i = 0; i < arguments.length; i++) {
        smallDisplayText += `${arguments[i]} `;
    }
    smallDisplayPara.textContent = smallDisplayText;
}