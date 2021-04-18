const timerForm = document.getElementById('timer');
const timerTimer = document.getElementById('timer__result');

const startTimer = event => {
    event.preventDefault(); 
    timerTimer.innerHTML = '';

    let { interval } = event.target.elements;
    interval = interval.value;

    if (interval) {
        // const diff = diffDates(firstDate, secondDate);
        timerTimer.innerHTML = timerToHTML(diffDates(firstDate, secondDate));
    }
    else timerTimer.innerHTML = formatError('Для расчета промежутка необходимо заполнить оба поля');
};

const timerCountdown = () => {

}

export const timerToHTML = diff => 
    `<span>
        ${diff.years ? 'Часов: ' + diff.years : ' '}
        ${diff.months ? 'Минут: ' + diff.months : ' '}
        ${diff.days ? 'Секунд: ' + diff.days : ' '}
    </span>`    
;

const timer = setInterval => {
    seconds = interval%60 // Получаем секунды
    minutes = interval/60%60 // Получаем минуты
    hour = interval/60/60%60 // Получаем часы
    // Условие если время закончилось то...
    if (interval <= 0) {
        // Таймер удаляется
        clearInterval(timer);
        // Выводит сообщение что время закончилось
        alert("Время закончилось");
    } else { // Иначе
        // Создаём строку с выводом времени
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}`;
        // Выводим строку в блок для показа таймера
        timerShow.innerHTML = strTimer;
    }
    --interval; // Уменьшаем таймер
}, 1000;

dateCalcForm.addEventListener('submit', startTimer);