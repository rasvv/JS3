// import { diffDates, diffToHTML } from './diffdates.js';
// import { formatError } from './utils.js';
import { loadScript } from './load.js';

loadScript('./src/diffdates.js', () => {
    console.log('diffdates.js')
    loadScript('./src/utils.js', () => {
        dateCalcForm.addEventListener('submit', dateDiff);
        console.log('utils.js')
    });
});


const dateCalcForm = document.getElementById('datecalc');
const dateCalcResult = document.getElementById('datecalc__result');

const dateDiff = event => {
    event.preventDefault(); 
    dateCalcResult.innerHTML = '';

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        // const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHTML(diffDates(firstDate, secondDate));
    }
    else dateCalcResult.innerHTML = formatError('Для расчета промежутка необходимо заполнить оба поля');
};

// dateCalcForm.addEventListener('submit', dateDiff);
