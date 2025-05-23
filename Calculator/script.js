function appendToDisplay(value){
    const operators = ['+', '-', '*', '/', '%'];
    const current = display.value || '';
    const lastChar = current.charAt(current.length - 1);
    if (operators.includes(lastChar) && operators.includes(value)) {
        return;
    }
    let DataDisplay = document.getElementById('display').value += value;    
}

function ClearDisplay(){
    let DataDisplay = document.getElementById('display').value = 0;
}

function clearLast(){
    let DataDisplay = document.getElementById('display');
    DataDisplay.value = DataDisplay.value.slice(0,-1);
}

function CalculateResult(){
    let resultUP = eval(document.getElementById('display').value);
    document.getElementById('display').value=resultUP;
    
}