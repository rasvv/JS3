import {changeForm} from './changeForm.js';
import { dateDiff } from './datecalc.js';
import { runTimer } from './timer.js';


const dateCalcForm = document.getElementById('datecalcform');
const timerForm = document.getElementById('timerform');

const btnCurrentFormCalc = document.getElementById('btnCurrentFormCalc');
const btnCurrentFormTimer = document.getElementById('btnCurrentFormTimer');

// let buttonRun = document.getElementById("timerBtn");

dateCalcForm.addEventListener('submit', (event) => {
	event.preventDefault();
	dateDiff(event);
});


timerForm.addEventListener('submit', (event) => {
	event.preventDefault();
	runTimer();
});

btnCurrentFormCalc.addEventListener('click', () => {
	changeForm(dateCalcForm, btnCurrentFormCalc);
});

btnCurrentFormTimer.addEventListener('click', () => {
	changeForm(timerForm, btnCurrentFormTimer);
});