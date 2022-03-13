/* ====================== grab the dom elements ====================== */

const clear = document.querySelector('#clear')
const operators = document.querySelectorAll('#operator')
const numbers = document.querySelectorAll('#number')
const equal = document.querySelector('#equal')
const decimal = document.querySelector('#decimal')
const previousNumberDisplayer = document.querySelector('.previousNumber')
const currentNumberDisplayer = document.querySelector('.currentNumber')

/* ====================== Create variables ====================== */

let previousNum = ''
let currentNum = ''
let operator = ''

/* ====================== handle displaying numbers in our screen ====================== */

numbers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleNumbers(e.target.textContent)
    })
})

function handleNumbers(number){
    // console.log(number)

    /* === handle lenght of current number === */
    if(currentNum.length <= 20){
        currentNum += number
        currentNumberDisplayer.textContent = currentNum
    }

    /* === be able to do another operation using the previous result === */
    if(previousNum !== '' && currentNum !== '' && operator === ''){
        previousNum = ''
        currentNumberDisplayer.textContent = currentNum
    }
}

/* ====================== handle displaying Operators in our screen and be able take the final result as previous number ====================== */

operators.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleOperators(e.target.textContent)
    })
})

function handleOperators(op){
    // console.log(operator)
    if (previousNum === '') {
        previousNum = currentNum
        checkOperators(op)
    } else if (currentNum === '') {
        checkOperators(op)
    } else {
        calculate()
        operator = op
        previousNumberDisplayer.textContent = previousNum + ' ' + operator
        currentNumberDisplayer.textContent = '0'
    }
}

function checkOperators(op1) {
    operator = op1
    previousNumberDisplayer.textContent = previousNum + ' '  + operator
    currentNumberDisplayer.textContent = '0' 
    currentNum = ''
}

/* ====================== handle Clear screen button and make it work ====================== */

clear.addEventListener('click', clearScreen)

function clearScreen() {
    // console.log('clear button is working')
    previousNum = ''
    currentNum = ''
    operator = ''
    previousNumberDisplayer.textContent = ''
    currentNumberDisplayer.textContent = '0'
}

/* ====================== handle decimal button and make it work ====================== */

decimal.addEventListener('click', decimalPoint)

function decimalPoint() {
    // console.log('decimal button is working')
    if(!currentNum.includes('.')){
        currentNum += '.'
        currentNumberDisplayer.textContent = currentNum
    }
}

/* ====================== handle equal button and make it work ====================== */

equal.addEventListener('click', () => {
    if(previousNum != '' && currentNum != ''){
        calculate()
    }
})

function calculate() {
    // console.log('equal button is working')
    previousNum = Number(previousNum)
    currentNum = Number(currentNum)
    switch (operator) {
        case '+':
            previousNum += currentNum
            break;

        case '-':
            previousNum -= currentNum
            break;
        case 'x':
            previousNum *= currentNum
            break;
        case '/':
            if (currentNum == 0) {
                currentNumberDisplayer.textContent = 'syntax error'
                return
            }else
            previousNum /= currentNum
            break;
        default:
            break;
    }

    previousNum = previousNum.toString()
    displayResult()
}

/* ====================== handle displaying result ====================== */

function displayResult() {
    currentNumberDisplayer.textContent = previousNum
    previousNumberDisplayer.textContent = ''
    operator = ''
    currentNum = ''
}