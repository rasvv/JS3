import './howler.js';

let time = document.getElementById("time"); 
let buttonRun = document.getElementById("timerBtn");
let timerShow = document.getElementById("timer__result"); 
import { formatError } from './utils.js';

let sound = new Howl({
    src: ['./src/sounds/alarm.mp3']
  });

let timer = null;
  
const startTimer = () => {
    timer = setInterval(() => {
        let seconds = time%60
        let minutes = time/60%60
        let hour = time/60/60%60

        if (time <= 0) {
            clearInterval(timer);
				showText(formatError('Время закончилось!'));
				buttonRun.innerHTML = 'Стоп'; 
            sound.play();
        } else {
            showText(`${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`);
        }
        --time;
    }, 1000);
};

const showText = (str) => {
	timerShow.innerHTML = str;
};

buttonRun.addEventListener('click', () => {
	buttonRun.innerHTML = buttonRun.innerHTML === 'Старт' ? 'Стоп' : 'Старт';
	if (buttonRun.innerHTML === 'Старт') {
		clearInterval(timer);
		showText('');
	} else {
		time = time.value*60;
		startTimer();
	}
});