function finalEvaluate () {
    if (operator.length > 0 && operandTwo.length > 0) {
        // We have enough for a full equation: operate on them.
        let oldOperandOne = operandOne;
        let equalSign = '='
        operandOne = roundAnswer(operate(Number(operandOne), operator, Number(operandTwo)));
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
        operandOne = roundAnswer(operate(Number(operandOne), operator, Number(operandTwo)));
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

function roundAnswer (number) {
    return Math.round(number * 1000) / 1000;
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

function deleteChar () {
    if (operator.length > 0 && operandTwo.length == 0) {
        // operator is occupied, operandTwo isn't, therefore delete operator
        operator = operator.slice(0, -1);
        updateMainDisplay(operandOne);
        updateSmallDisplay(operandOne, operator);
    } else if (operator.length > 0 && operandTwo.length > 0) {
        // operator is occupied, and operandTwo is also occupied, delete operandTwo
        operandTwo = operandTwo.slice(0, -1);
        updateMainDisplay(operandTwo);
    } else if (operator.length == 0) {
        // operator is NOT occupied, therefore delete operandOne-- replace with '0' if there are no other characters.
        if (operandOne.length == 1) {operandOne = '0'}
        else {operandOne = operandOne.slice(0, -1)}
        updateMainDisplay(operandOne)
        }
}
