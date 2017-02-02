/**
 * Created by Nikita on 2/1/17.
 */

'use strict';

import {createStore} from 'redux'
import getDaysInMonth from './../utils/getDaysInMonth'
import  mapDaysInMonth from './../utils/mapDaysInMonth'

function visibleDates() {
    let date = new Date(2017, 1);
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();

    let prevDate = new Date(currentYear, currentMonth === 0 ? 11 : currentMonth - 1);
    let nextDate = new Date(currentYear, currentMonth === 11 ? 0 : currentMonth + 1);

    return {
        currentMonth: getDaysInMonth(date.getMonth(), date.getFullYear()),
        prevMonth: getDaysInMonth(prevDate.getMonth(), prevDate.getFullYear()),
        nextMonth: getDaysInMonth(nextDate.getMonth(), nextDate.getFullYear())
    }
}


const initialState = {
    today: new Date(),
    calendarDates: visibleDates()
}

function dates(state = initialState, action){
    switch(action.type){
        default:
            return state
    }
}

const store = createStore(dates);

export default store;