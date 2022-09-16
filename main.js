//Function to to take, hold and print the end product of the calculation where the input id is 'inputwindow'
const inputwindow=document.getElementById('inputwindow')

function takeValue(x) {
    inputwindow.value += x;
}

function clearInput(y) {
    inputwindow.value = y;
}

function calculateResult() {
    const result = eval(inputwindow.value);
    inputwindow.value = result;
}