




// BUTTONS


let bttnEqual = document.querySelector('.bttnEqual');
let bttnClear = document.querySelector('.bttnClear');

let displayDiv = document.querySelector('.display');
let display = '';

let numCatcher = [];
let operator;
let num2;

let equations = [];

let activeBttnWindow = document.querySelector('.activeButtons');


function updateDisplay (value) {
    p = document.createElement('p');
    p.textContent = value;
    displayDiv.appendChild(p);

    display += value;

    numCatcher.push(value);

    console.log(display);
    console.log(numCatcher)
}

function clearDisplay () {
    while (displayDiv.firstChild) {
        displayDiv.removeChild(displayDiv.lastChild);
    }
    display = '';
    numCatcher = [];
    equations.length = 0;
}


function storeVal () {
    array = display.split(' ');
    console.log(array)
    num1 = array[0];
    operator = array[1];
}


activeBttnWindow.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
        let bttnText = event.target.textContent
        updateDisplay(bttnText);
        switch (event.target.textContent) {
            case '/':
                numCatcher.pop();
                equations.push({'num': Number(numCatcher.join('')), 'op': '/'});
                numCatcher = [];
                break;
            case 'x':
                numCatcher.pop();
                equations.push({'num': Number(numCatcher.join('')), 'op': 'x'});
                numCatcher = [];
                break;
            case '-':
                numCatcher.pop();
                equations.push({'num': Number(numCatcher.join('')), 'op': '-'});
                numCatcher = [];
                break;
            case '+':
                numCatcher.pop();
                equations.push({'num': Number(numCatcher.join('')), 'op': '+'});
                numCatcher = [];
                break;
        }
    }
    return;
})

// add each to an array, loop through the entire array and do math

bttnClear.addEventListener('click', clearDisplay)

let initial = 0;
bttnEqual.addEventListener('click', () => {
    equations.push({'num': Number(numCatcher.join('')) });
    for (let i = 0; i < equations.length; i++) {
        if (i = 0) {
            initial = operate(equations[i].num, equations[i].op, equations[i+1].num)
        } else if (i = equations.length - 1) {
            console.log(`we are on index ${i} of ${equations.length} total indexes.`)
            initial = operate(initial, equations[i-1].op, equations[i].num);
        } else {
            initial = operate(initial, equations[i].op, equations[i+1].num);
        }
    }
    console.log(`final = ${initial}`);
    return initial;
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

