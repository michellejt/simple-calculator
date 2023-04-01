const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')
let accumulativeCalculation
let calculation = []

//callback for button
function calculate(button) {
    const value = button.textContent
    if (value === "clear") {
        calculation = []
        screenDisplay.textContent = '.'
    } else if (value === "=") {
        screenDisplay.textContent = eval(accumulativeCalculation)
    } else {
        calculation.push(value)
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
        console.log(calculation)
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))