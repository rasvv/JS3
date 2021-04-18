// import {Duration} from './luxon.js';
import { Howl } from './howler.js';


const timerForm = document.getElementById('timer');
// let timerInput = document.getElementById("time"); 
// let buttonRun = document.getElementById("timerBtn");
let timerShow = document.getElementById("timer__result"); 

let timeMinut = '';

let sound = new Howl({
    src: ['./sounds/sound.mp3']
  });
  
  

const startTimer = event => {
    event.preventDefault(); 
    timerShow.innerHTML = '';
    console.log('timer is srarted');

    let { time } = event.target.elements;
    time = time.value*60;
    console.log(time);   

    let timer = setInterval(function () {
        let seconds = time%60
        let minutes = time/60%60
        let hour = time/60/60%60

        if (time <= 0) {
            // Таймер удаляется
            clearInterval(timer);
            // Выводит сообщение что время закончилось
            sound.play();
            alert("Время закончилось");
        } else { // Иначе
            // Создаём строку с выводом времени
            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
            // Выводим строку в блок для показа таймера
            timerShow.innerHTML = strTimer;
        }
        --time;
    }, 1000);

};

timerForm.addEventListener('submit', startTimer);