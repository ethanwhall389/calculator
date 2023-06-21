

function operate (op, a, b) {
    switch (op) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case 'x':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
        default:
            return 'There has been an error.';
    }
}



// BUTTONS

let bttns = document.querySelector('.bttn');

let bttn0 = document.querySelector('.bttn0');
let bttn1 = document.querySelector('.bttn1');
let bttn2 = document.querySelector('.bttn2');
let bttn3 = document.querySelector('.bttn3');
let bttn4 = document.querySelector('.bttn4');
let bttn5 = document.querySelector('.bttn5');
let bttn6 = document.querySelector('.bttn6');
let bttn7 = document.querySelector('.bttn7');
let bttn8 = document.querySelector('.bttn8');
let bttn9 = document.querySelector('.bttn9');
let bttnAdd =document.querySelector('.bttnAdd');
let bttnSub = document.querySelector('.bttnSub');
let bttnMult = document.querySelector('.bttnMult');
let bttnDivi = document.querySelector('.bttnDivi');
let bttnEqual = document.querySelector('.bttnEqual');
let bttnClear = document.querySelector('.bttnClear');

let displayDiv = document.querySelector('.display');

let display = '';

function updateDisplay (value) {
    p = document.createElement('p');
    p.textContent = value;
    displayDiv.appendChild(p);

    display += value;

    console.log(display);
}

function clearDisplay () {
    while (displayDiv.firstChild) {
        displayDiv.removeChild(displayDiv.lastChild);
    }
    display = '';
}

let num1;

let operator;

let num2;

function storeVal () {
    array = display.split(' ');
    console.log(array)
    num1 = array[0];
    operator = array[1];
}

bttns.addEventListener('click', (event) => {
    let text = event.target.textContent
    updateDisplay(text);
    console.log(event);
})

// bttn1.addEventListener('click', () => {updateDisplay('1')})

// bttn2.addEventListener('click', () => {updateDisplay('2')})

// bttn3.addEventListener('click', () => {updateDisplay('3')})

// bttn4.addEventListener('click', () => {updateDisplay('4')})

// bttn5.addEventListener('click', () => {updateDisplay('5')})

// bttn6.addEventListener('click', () => {updateDisplay('6')})

// bttn7.addEventListener('click', () => {updateDisplay('7')})

// bttn8.addEventListener('click', () => {updateDisplay('8')})

// bttn9.addEventListener('click', () => {updateDisplay('9')})

// bttnAdd.addEventListener('click', () => {updateDisplay(' + '); storeVal();})

// bttnSub.addEventListener('click', () => {updateDisplay(' - '); storeVal()})

// bttnMult.addEventListener('click', () => {updateDisplay(' x '); storeVal()})

// bttnDivi.addEventListener('click', () => {updateDisplay(' / '); storeVal()})

bttnEqual.addEventListener('click', () => {
    array = display.split(' ');
    
    num2 = array[2];

    // Can't get it to string together multiple operators in one go-- 
    // maybe create an array of objects??

    clearDisplay();
    updateDisplay(operate(operator, Number(num1), Number(num2)));
})

bttnClear.addEventListener('click', clearDisplay);

