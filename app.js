const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')
let accumulativeCalculation
let calculation = []
let themes = document.querySelector('.msg')

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

// Listen for all focus events in the document
/* theme.forEach(item => {
    item.addEventListener('click', event => {
     item.classList.toggle('.color');
    })
  })


  function optionClicked(){
    switch(true){
      case this.classList.contains('option1'):
        alert( 'user clicked option1' );
        break;
      case this.classList.contains('option2'):
        alert( 'user clicked option2' );
        break;
      case this.classList.contains('option3'):
        alert( 'user clicked option3' );
        break;
    }
  } */

/*   theme.forEach(function (i) {
  i.addEventListener('click', function() {
    document.querySelector('.msg').innerHTML = i.innerHTML;
  });
}); */
let themeSelections = document.querySelectorAll('.theme');

/* themes.forEach(function (i) {
  i.addEventListener('click', function() {
    let themeSelection = innerHTML = i.innerHTML;
    theme.classList.toggle(themeSelection);
    console.log(themeSelection)
  });
});
 */

themeSelections.forEach((themeSelection, themeSelectionIndex) => {
    themeSelection.addEventListener('click', (e) => {
      e.preventDefault();
        themeSelections.forEach((theme, themeIndex) => {   
            console.log(themeSelection)    
        // If button is for next step, add class to next step, else remove
        if (themeSelectionIndex === themeIndex) {
            theme.classList.add('activeFieldset');
        } else {
            theme.classList.remove('activeFieldset');
        }
      });
    });
  });