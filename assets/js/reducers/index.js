/**
 * Created by Nikita on 2/1/17.
 */

'use strict';

import {createStore} from 'redux'

const initialDate =  new Date();

const months = ['January', 
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const initialState = {
    today: initialDate,
    focusedDate: initialDate,
    focusedMonth: months[initialDate.getMonth()]
};

function dates(state = initialState, action){
    switch(action.type){
        
        case 'DECREMENT_MONTH':

            return (()=>{
                let currentMonth = state.focusedDate.getMonth();
                let currentYear = state.focusedDate.getFullYear();
                let newMonth = currentMonth === 0 ? 11 : currentMonth - 1;
                let newYear = newMonth === 11 ? currentYear - 1 : currentYear;
                let newDate = new Date(newYear, newMonth);

                return Object.assign({}, state, {
                    focusedDate: newDate,
                    focusedMonth: months[newDate.getMonth()]
                });
            })();

        case 'INCREMENT_MONTH':
            return (()=>{
                let currentMonth = state.focusedDate.getMonth();
                let currentYear = state.focusedDate.getFullYear();
                let newMonth = currentMonth === 11 ? 0 : currentMonth + 1;
                let newYear = newMonth === 0 ? currentYear + 1 : currentYear;
                let newDate = new Date(newYear, newMonth);

                return Object.assign({}, state, {
                    focusedDate: newDate,
                    focusedMonth: months[newDate.getMonth()]
                });
            })();
        case 'SET_TODAY':
            return Object.assign({}, state, initialState);
        case 'SET_DEFAULT_OFFSET_TOP':
            return Object.assign({}, state, {
                defaultOffsetTop: action.offsetTop
            });
        default:
            return state
    }
}

const store = createStore(dates);

export default store;