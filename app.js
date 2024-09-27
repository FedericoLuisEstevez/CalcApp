const buttonNum = document.getElementsByName("data-number");
const buttonOp = document.getElementsByName("data-op");
const buttonDel = document.getElementsByName("data-del")[0];
const buttonEq = document.getElementsByName("data-eq")[0];

var currentOperation = '';
var prevOperation = '';
var operation = undefined;

var result = document.getElementById("result");

buttonNum.forEach(function(button){
    button.addEventListener('click', function(){
        addANumber(button.innerText);
    })
});

buttonOp.forEach(function(button){
    button.addEventListener('click', function(){
        chooseOp(button.innerText);
    })
});

buttonEq.addEventListener('click', function(){
    calculate();
    updateDisplay();
});

buttonDel.addEventListener('click', function(){
    clear();
    updateDisplay();
});

function chooseOp(op){
    if(currentOperation === '') return;
    if(prevOperation !== ''){
        calculate();
    }
    operation = op.toString();
    prevOperation = currentOperation;
    currentOperation = '';
}

function calculate(){
    var calculus;
    const prev = parseFloat(prevOperation);
    const current = parseFloat(currentOperation);
    if(isNaN(prev) || isNaN(current)) return;
    switch(operation){
        case '+':
            calculus = prev + current;
            break;
        case '-':
            calculus = prev - current;
            break;
        case 'x':
            calculus = prev * current;
            break;
        case '/':
            calculus = prev / current;
            break;
        default:
            return;
    }
    currentOperation = calculus;
    operation = undefined;
    prevOperation = '';
}

function addANumber(num){
    currentOperation = currentOperation.toString() + num.toString();
    updateDisplay();
}

function updateDisplay(){
    result.value = currentOperation;
}

function clear(){
    currentOperation = '';
    prevOperation = '';
    operation = '';
}

clear();