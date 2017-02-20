/**
 * Created by Nikita on 2/2/17.
 */

'use strict';

export default class MapDaysInMonth {
    constructor(startDate){
        this.sartDate = startDate;
    }
    setStartDate(newDate){
        this.sartDate = newDate;
        this._generateDates()._mapDaysInMonth();
        return this.resultDates;
    }
    get resultDates(){
        return this.mappedDays;
    }
    _getDaysInMonth(month, year) {
        var date = new Date(year, month, 1);
        const startDay = date.getDay();
        var days = [];

        while (date.getMonth() === month) {
            let fullDate = new Date(date);
            days = [...days, {plainDate: fullDate.getDate(), fullDate: fullDate}];
            date.setDate(date.getDate() + 1);
        }

        return {startDay: startDay, daysInMonth: days};
    }
    _generateDates() {
        let currentMonth = this.sartDate.getMonth();
        let currentYear = this.sartDate.getFullYear();

        let prevDate = new Date(currentMonth === 0 ? currentYear - 1 : currentYear, currentMonth === 0 ? 11 : currentMonth - 1);
        let nextDate = new Date(currentMonth === 11 ? currentYear + 1 : currentYear, currentMonth === 11 ? 0 : currentMonth + 1);

        this.generatedDates = {
            currentMonth: this._getDaysInMonth(this.sartDate.getMonth(), this.sartDate.getFullYear()),
            prevMonth: this._getDaysInMonth(prevDate.getMonth(), prevDate.getFullYear()),
            nextMonth: this._getDaysInMonth(nextDate.getMonth(), nextDate.getFullYear())
        };
        return this;
    }
    _mapDaysInMonth() {
        let {prevMonth, currentMonth, nextMonth} = this.generatedDates;
        let prevMonthLength = prevMonth.daysInMonth.length;
        let currentMonthLength = currentMonth.daysInMonth.length -1;
        let nextMonthLength = nextMonth.daysInMonth.length;
        let prevMonthStartDay = prevMonth.startDay;

        let mappedDays = [];

        for(let i = prevMonthLength - 1; i >= 0; i--){
            mappedDays = [{date:prevMonth.daysInMonth[i], relation:'prev'}, ...mappedDays];
        }
        if(prevMonthStartDay > 0) {
            for(let j = 0; j < prevMonthStartDay; j++){
                mappedDays = ['', ...mappedDays]
            }
        }
        for(let i = 0; i <= currentMonthLength; i++){
            mappedDays = [...mappedDays, {date:currentMonth.daysInMonth[i], relation:'current', firstDay: i === 0}];
        }
        for(let i = 0; i < nextMonthLength; i++){
            mappedDays = [...mappedDays, {date:nextMonth.daysInMonth[i], relation:'next'}];
        }

        this.mappedDays = mappedDays;
        return this;
    }
}
