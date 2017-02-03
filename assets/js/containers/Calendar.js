/**
 * Created by Nikita on 2/2/17.
 */

'use strict';

import React, { Component, PropTypes } from 'react'
import mapDaysInMonth from './../utils/mapDaysInMonth'
import getDaysInMonth from './../utils/getDaysInMonth'

import type from './../utils/type'

export default class Calendar extends Component {
    componentWillMount(){
        
    }
    generateDates(date) {
        let currentMonth = date.getMonth();
        let currentYear = date.getFullYear();

        let prevDate = new Date(currentMonth === 0 ? currentYear - 1 : currentYear, currentMonth === 0 ? 11 : currentMonth - 1);
        let nextDate = new Date(currentMonth === 11 ? currentYear + 1 : currentYear, currentMonth === 11 ? 0 : currentMonth + 1);

        return {
            currentMonth: getDaysInMonth(date.getMonth(), date.getFullYear()),
            prevMonth: getDaysInMonth(prevDate.getMonth(), prevDate.getFullYear()),
            nextMonth: getDaysInMonth(nextDate.getMonth(), nextDate.getFullYear())
        }
    }
    render(){

        const store = this.context.store.getState();
        const mappedDays = mapDaysInMonth(this.generateDates(store.focusedDate));

        let renderedDays = mappedDays.map((day, i) => {
            if(type(day) === 'Object') {
                let isToday = day.date.fullDate.toDateString() === store.today.toDateString() ? 'today' : null;
                return (
                    <div
                        ref={day.firstDay && this.props.firstDayRef}
                        key={day.date.fullDate}
                        className={`day ${day.relation} ${isToday}`}>
                        <div className="inner">{day.date.plainDate}</div>
                    </div>
                )
            }
            else {
                return <div key={i} className={`day dummy`}></div>
            }
        });
        
        return(
            <div className="scrollAreaContent days">
                {renderedDays}
            </div>
        )
    }
}

Calendar.contextTypes = {
    store: PropTypes.object
};