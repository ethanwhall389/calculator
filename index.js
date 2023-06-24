let operandOne = '';
let operandTwo = '';
let operator = '';

let numBttns = document.querySelectorAll('.numBttn');
let operatorBttns = document.querySelectorAll('.opBttn');
let equalsBttn = document.querySelector('.equalsBttn');
let clearBttn = document.querySelector('.clearBttn');
let decimalBttn = document.querySelector('.decimalBttn');
let deleteBttn = document.querySelector('.deleteBttn');

let mainDisplay = document.querySelector('.displayMain');
let smallDisplay = document.querySelector('.displaySmall');
let mainDisplayPara = document.createElement('p');
let mainDisplayText = '0';
    mainDisplayPara.textContent = mainDisplayText;
    mainDisplay.appendChild(mainDisplayPara);
let smallDisplayPara = document.createElement('p');
let smallDisplayText = '';
    smallDisplay.appendChild(smallDisplayPara);

// EVENT LISTENERS

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


decimalBttn.addEventListener('click', () => {
    if (operator.length > 0) {
        //we have an operator-- go to second number
        if (operandTwo.includes('.')) return; 
        else {
            operandTwo += decimalBttn.textContent;
            updateMainDisplay(operandTwo);
        }
    } else {
        //we do not have an operator-- go to first number
        if (operandOne.includes('.')) return; 
        else {
            operandOne += decimalBttn.textContent;
            updateMainDisplay(operandOne);
        }
    }
})

deleteBttn.addEventListener('click', () => {deleteChar(); console.log('click')});





