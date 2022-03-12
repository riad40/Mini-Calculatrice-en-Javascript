let currentNum = ""
let previousNum = ""
let operator = ""

const currentDisplayNumber = document.querySelector(".currentNumber")
const previousDisplayNumber = document.querySelector(".previousNumber")

const clearScreen = document.querySelector('#clear')
const equal = document.querySelector('#equal')
const decimal = document.querySelector('#decimal')
const operators = document.querySelectorAll('#operator')
const numberButtons = document.querySelectorAll('#number')

numberButtons.forEach((btn) => {
    btn.addEventListener('click', (e) =>{
        handleNumber(e.target.innerText)
    })
});

clear.addEventListener('click', clearCalculator)

function clearCalculator() {
    previousNum = ""
    currentNum = ""
    operator = ""
    currentDisplayNumber.innerText = "0"
    previousDisplayNumber.innerText = ""
}

function handleNumber(number) {
    // console.log(number)
    if (previousNum !== "" && currentNum !== "" && operator === "") {
        previousNum = "";
        currentDisplayNumber.textContent = currentNum;
      }
    if (currentNum.length <= 20) {
        currentNum += number;
        currentDisplayNumber.textContent = currentNum;
    }
}

operators.forEach((btn) => {
    btn.addEventListener('click', (e) => {  
        handleOperator(e.target.innerText)
    })
})

function handleOperator(op) {
    // console.log(operator)
    if (previousNum === "") {
        previousNum = currentNum
        operatorCheck(op)
    } else if (currentNum === "") {
        operatorCheck(op)
    } else {
        calculate()
        operator = op
        previousDisplayNumber.innerText = previousNum + " " + operator
        currentDisplayNumber.innerText = "0"
    }
}

function operatorCheck(op1) {
    operator = op1
    previousDisplayNumber.innerText = previousNum + " " + operator
    currentDisplayNumber.innerText = "0"
    currentNum = ""
}

decimal.addEventListener('click', addDecimal)

function addDecimal() {
    if (!currentNum.includes(".")) {
        currentNum += "."
        currentDisplayNumber.innerText = currentNum
    }
}

equal.addEventListener('click', () =>{
    if (currentNum != "" && previousNum != "") {
        calculate()
    }
})

function calculate() {
    previousNum = Number(previousNum)
    currentNum  = Number(currentNum)

    switch (operator) {
        case "+":
            previousNum += currentNum
            break;
        case "-":
            previousNum -= currentNum
            break;    
        case "x":
            previousNum *= currentNum
            break;
        case "/":
            if (currentNum == 0) {
                previousNum = "Syntax Error"
                displayResult()
                return
            }
            previousNum /= currentNum
            break;
        default:
            break;
    }
    previousNum = previousNum.toString();
    displayResult()
}

function displayResult() {
    previousDisplayNumber.innerText = ""
    currentDisplayNumber.innerText = previousNum
    currentNum = ""
    operator = ""   
}
