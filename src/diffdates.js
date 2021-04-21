// import {DateTime} from './luxon.js';
loadScript('./src/luxon.js', () => {console.log('luxon.js')});

const diffDates = (firstDate, secondDate) => {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);

    if (firstDate > secondDate) {
        [firstDate, secondDate] = [secondDate, firstDate];
    };

    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
};

const diffToHTML = diff => 
    `<span>
        ${diff.years ? 'Лет: ' + diff.years : ' '}
        ${diff.months ? 'Месяцев: ' + diff.months : ' '}
        ${diff.days ? 'Дней: ' + diff.days : ' '}
    </span>`    
;
