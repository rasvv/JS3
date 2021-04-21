// import './howler.js';
loadScript('./src/howler.js', () => {console.log('howler.js')});
loadScript('./src/utils.js', () => {console.log('utils.js')});

let time = document.getElementById("time"); 
let buttonRun = document.getElementById("timerBtn");
let timerShow = document.getElementById("timer__result"); 


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

const btnClick = () => {
	buttonRun.innerHTML = buttonRun.innerHTML === 'Старт' ? 'Стоп' : 'Старт';
	if (buttonRun.innerHTML === 'Старт') {
		clearInterval(timer);
		showText('');
	} else {
		time = time.value*60;
		startTimer;
	}
};