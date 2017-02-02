/**
 * Created by Nikita on 2/1/17.
 */

'use strict';

export default function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    const startDay = date.getDay();
    var days = [];

    while (date.getMonth() === month) {
        let fullDate = new Date(date);
        days = [...days, {plainDate:fullDate.getDate(), fullDate: fullDate}];
        date.setDate(date.getDate() + 1);
    }

    return {startDay:startDay, daysInMonth: days};
}