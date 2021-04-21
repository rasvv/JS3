// import './datecalc.js';
// import './timer.js'
// import { loadScript } from './load.js'

// loader.loadScript('./src/datecalc.js', () => {console.log('datecalc.js')});
// loadScript('./src/timer.js', () => {console.log('timer.js')});

// const dateCalcBtn = document.getElementById('datecalc');
const dateCalcForm = document.getElementById('datecalcform');
const timerForm = document.getElementById('timerform');
const dateCalcBtnRun = document.getElementById('run');

dateCalcForm.addEventListener('submit', (event) => {
	event.preventDefault();
	new Promise((resolve) => {
		setTimeout(() => { 
		loadScript('./src/datecalc.js', console.log('datecalc.js'))

		// loadScript('./src/datecalc.js', dateDiff());
		console.log('main.js - datecalc.js');
		resolve(1);
		},100).then (dateDiff(event));
			
	});
});

timerForm.addEventListener('submit', (event) => {
	event.preventDefault();
	new Promise((resolve) => {
		setTimeout(() => { 
		loadScript('./src/timer.js', console.log('timer.js'))

		// loadScript('./src/datecalc.js', dateDiff());
		console.log('main.js - timer.js');
		resolve(1);
		},100).then (btnClick());
			
	});
});

