/**
 * Created by Nikita on 2/2/17.
 */

'use strict';

export default function mapDaysInMonth({prevMonth, currentMonth, nextMonth}) {
    let prevMonthLength = prevMonth.daysInMonth.length;
    let currentMonthLength = currentMonth.daysInMonth.length -1;
    let nextMonthLength = nextMonth.daysInMonth.length;
    let prevMonthStartDay = prevMonth.startDay === 0 ? 0 : prevMonth.startDay - 1;

    let mappedDays = [];
    
    for(let i = prevMonthLength - 1; i >= 0; i--){
        mappedDays = [{date:prevMonth.daysInMonth[i], relation:'prev'}, ...mappedDays];
    }
    if(prevMonthStartDay > 0) {
        for(let i = 0; i <= prevMonthStartDay; i++){
            mappedDays = ['', ...mappedDays]
        }
    }
    for(let i = 0; i <= currentMonthLength; i++){
        mappedDays = [...mappedDays, {date:currentMonth.daysInMonth[i], relation:'current', firstDay: i === 0}];
    }
    for(let i = 0; i < nextMonthLength; i++){
        mappedDays = [...mappedDays, {date:nextMonth.daysInMonth[i], relation:'next'}];
    }
    
    return mappedDays;
}