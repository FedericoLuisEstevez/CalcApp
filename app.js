const buttonNum = document.getElementsByName("data-number");
const buttonOp = document.getElementsByName("data-op");
const buttonDel = document.getElementsByName("data-del")[0];
const buttonEq = document.getElementsByName("data-eq")[0];

var result = document.getElementById("result");

buttonNum.forEach(function(button){
    button.addEventListener('click', function(){
        addANumber(button.innerText);
    })
});

buttonOp.forEach(function(button){
    button.addEventListener('click', function(){
        addAnOp(button.innerText);
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