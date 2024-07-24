let display=document.getElementById("display");
let currentOperand='';
let previousOperand='';
let operator=null;

function appendNumber(number) {     
    if (number==='.' && currentOperand.includes('.')) return;
    currentOperand=currentOperand.toString()+number.toString();
    updateDisplay();
}
function chooseOperator(op) {
    if (currentOperand==='') return;
    if (currentOperand!=='') {
        calculate();
    }
    operator=op;
    previousOperand=currentOperand;
    currentOperand='';
    display.innerText=previousOperand+''+operator
}
function calculate(){
    let result;
    const prev=parseFloat(previousOperand);
    const current=parseFloat(currentOperand);
    if (isNaN(prev)||isNaN(current)) return;
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case 'x':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentOperand=parseFloat(result.toFixed(7));
    operator=null
    previousOperand=''
    updateDisplay();
}
function clearDisplay() {
    currentOperand='';
    previousOperand='';
    operator=null;
    updateDisplay();
}
function deleteNumber() {
    currentOperand=currentOperand.toString().slice(0,-1);
    if (currentOperand==='');
    updateDisplay();
}
function updateDisplay() {
    if (operator!=null) {
        display.innerText=previousOperand+''+operator+''+currentOperand;
    } else {
        display.innerText=currentOperand;
    }
    let fontSize=2;//rem
    if (display.innerText.length>11) {
        fontSize=1.6
    }
    if (display.innerText.length>17) {
        fontSize=1.2
    }
    if (display.innerText.length>23) {
        fontSize=1
    }
    display.style.fontSize=`${fontSize}rem`
}
updateDisplay();