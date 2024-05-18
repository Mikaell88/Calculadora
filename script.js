
let display = document.getElementById('display');
let history = document.getElementById('history');

function NumberDig(num) {
    display.value += num;
}

function appendOperator(operator) {
    display.value += operator;
}

function calculate() {
    try {
        let result = eval(display.value);
        addToHistory(display.value + ' = ' + result);
        display.value = result;
    } catch {
        display.value = 'Erro';
    }
}

function clearInput() {
    display.value = '';
}

function removeLastDigit() {
    display.value = display.value.slice(0, -1);
}

function addToHistory(entry) {
    let historyEntry = document.createElement('div');
    historyEntry.textContent = entry;
    history.appendChild(historyEntry);
}
