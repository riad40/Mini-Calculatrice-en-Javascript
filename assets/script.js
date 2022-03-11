// alert('js khdama')

const myResult = document.getElementById('myResult')

let values = {prevNum: null, newNum: null}
let opType = ''
let isLastBtnNumber = false

function getNumbers(num) {

    if (isLastBtnNumber) {
        let screen
        if (values.newNum) {
            screen = values.newNum + '' + num
            values.newNum = screen
            myResult.value = screen
        }else {
            screen = values.prevNum + '' + num
            values.prevNum = screen
            myResult.value = screen
        }
    }else {
        
        myResult.value = num

        if (values.prevNum) {
            values.newNum = num
        }else{
            values.prevNum = num 
        }

        isLastBtnNumber = true
    }
}

function setOperator(op) {
    opType = op
    console.log(values)
    isLastBtnNumber = false
}

function clearScreen() {
    myResult.value = ''
    window.location.reload()
}   

function calculate() {
    if (!values.newNum) {
        return
    }
    if (values.newNum && values.prevNum && opType) {

        switch (opType) {
            
            case '+':
                const plus = Number(values.prevNum) + Number(values.newNum)
                myResult.value = plus
                values.prevNum = plus
                // console.log(values.prevNum + values.newNum)
                break;
            case '-':
                const minus = Number(values.prevNum) - Number(values.newNum)
                myResult.value = minus 
                values.prevNum = minus
                break;
            
            case '*':
                const times = Number(values.prevNum) * Number(values.newNum)
                myResult.value = times 
                values.prevNum = times
                break;
            
            case '/':
                const devide = Number(values.prevNum) / Number(values.newNum)
                myResult.value = devide 
                values.prevNum = devide
                break;

            default:
                break;
        }   

        isLastBtnNumber = false
    }
}
