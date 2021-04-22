import './changeForm.js';

const dateCalcForm = document.getElementById('datecalcform');
const timerForm = document.getElementById('timerform');


const dateCalcBtnRun = document.getElementById('run');


const btnCurrentFormCalc = document.getElementById('btnCurrentFormCalc');
const btnCurrentFormTimer = document.getElementById('btnCurrentFormTimer');

// let buttonRun = document.getElementById("timerBtn");

dateCalcForm.addEventListener('submit', (event) => {
	event.preventDefault();
	new Promise((resolve) => {
		setTimeout(() => { 
		loadScript('./src/datecalc.js', console.log('datecalc.js'))

		// loadScript('./src/datecalc.js', dateDiff());
		console.log('main.js - datecalc.js');
		resolve(1);
		document.body.insertAdjacentHTML('beforeend', `<div>.</div>`)

		},1000).then (dateDiff(event));

	});

	// loadScript('./src/datecalc.js', console.log('datecalc.js'));
	// dateDiff(event);

});

// const btnClick = () => {
// 	buttonRun.innerHTML = buttonRun.innerHTML === 'Старт' ? 'Стоп' : 'Старт';
// 	if (buttonRun.innerHTML === 'Старт') {
// 		clearInterval(timer);
// 		showText('');
// 	} else {
// 		time = time.value*60;
// 		startTimer;
// 	}
// };

timerForm.addEventListener('submit', (event) => {
	event.preventDefault();
	// new Promise((resolve) => {
	// 	setTimeout(() => { 
	// 	loadScript('./src/timer.js', console.log('timer.js'));

	// 	// loadScript('./src/datecalc.js', btnClick());
		console.log('main.js - timer.js');
	// 	resolve(1);
	// 	},100).then (btnClick());
	// const runFunc = (() => {
	// 	btnClick();
	// });			
	// });

	// btnClick();

});


// currentlyForm.addEventListener('submit', (event) => {
// 	event.preventDefault();
// 	if (currentForm.id = 'datecalcform') {
// 		new Promise((resolve) => {
// 			setTimeout(() => { 
// 			loadScript('./src/datecalc.js', console.log('datecalc.js'))

// 			// loadScript('./src/datecalc.js', dateDiff());
// 			console.log('main.js - datecalc.js');
// 			resolve(1);
// 			document.body.insertAdjacentHTML('beforeend', `<div>.</div>`)

// 			},1000).then (dateDiff(event));

// 		});		
// 	};

// 	if (currentForm.id = 'timerform') {
// 		console.log('main.js - timerform.js');
// 		// btnClick();
// 	}



// 	// loadScript('./src/datecalc.js', console.log('datecalc.js'));
// 	// dateDiff(event);

// });

btnCurrentFormCalc.addEventListener('click', () => {
	changeForm(dateCalcForm);
});

btnCurrentFormTimer.addEventListener('click', () => {
	changeForm(timerForm);
});