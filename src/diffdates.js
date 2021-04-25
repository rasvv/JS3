import {DateTime} from 'luxon';

export const diffDates = (firstDate, secondDate) => {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);

    if (firstDate > secondDate) {
        [firstDate, secondDate] = [secondDate, firstDate];
    };

    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
};

export const diffToHTML = diff => 
    `<span>
        ${diff.years ? 'Лет: ' + diff.years : ' '}
        ${diff.months ? 'Месяцев: ' + diff.months : ' '}
        ${diff.days ? 'Дней: ' + diff.days : ' '}
    </span>`    
;
