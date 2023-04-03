const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')
let accumulativeCalculation
let calculation = []
let msg = document.querySelector('.msg')

let calculator = document.querySelector('#calculator')

let themeSelections = document.querySelectorAll('#theme');

let themeSelected

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

   for (i of themeSelections) {
      i.addEventListener('click', (e) => {
        themeSelected = (e.target.classList[0]);
        let applyTheme = calculator.classList.length;
        console.log(themeSelected)
        console.log(applyTheme)
        if (applyTheme === 2) {
          calculator.classList.add(themeSelected);
        } else {
          calculator.classList.remove(...calculator.classList);
          calculator.classList.add(themeSelected);
        }
      });
    }

