function add () {
    let final = 0;
    for (let i = 0; i < arguments.length; i++) {
        final += arguments[i];
    }
    return final;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    if (b === 0) {
        return ('You can\'t divide by 0!');
    }
    return a / b;
}


function operate (a, op, b) {
    switch (op) {
        case '+':
            return add(a, b);
            break;
        case '−':
            return subtract(a, b);
            break;
        case String.fromCharCode(215):
            return multiply(a, b);
            break;
        case String.fromCharCode(247):
            return divide(a, b);
            break;
        default:
            return 'There has been an error.';
    }
}