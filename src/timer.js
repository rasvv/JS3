import './howler.js';
import { formatError } from './utils.js';

let buttonRun = document.getElementById("timerBtn");
let timerShow = document.getElementById("timer__result"); 


const sound = new Howl({
	src: ['./src/sounds/alarm.mp3']
});

let timer = null;
 

const showText = (str) => {
	timerShow.innerHTML = str;
};

export const runTimer = () => {
	buttonRun.innerHTML = buttonRun.innerHTML === 'Старт' ? 'Стоп' : 'Старт';
	if (buttonRun.innerHTML === 'Старт') {
		clearInterval(timer);
		showText('');
	} else {
		let time = document.getElementById("time"); 
		time = time.value*60;
		// startTimer;
		timer = setInterval(() => {
			let seconds = time%60
			let minutes = time/60%60
			let hour = time/60/60%60
 
			if (time <= 0) {
				 clearInterval(timer);
				 showText(formatError('Время закончилось!'));
				 buttonRun.innerHTML = 'Старт'; 
				 sound.play();
			} else {
				 showText(
				`	Осталось: 
					${Math.trunc(hour) ? 'Часов: ' + Math.trunc(hour) : ' '}
					${Math.trunc(minutes) ? 'Минут: ' + Math.trunc(minutes) : ' '}
					${seconds ? 'Секунд: ' + seconds : ' '}
				 `
				 );
			}
			--time;
	  }, 1000);
	}
};