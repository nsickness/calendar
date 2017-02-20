/**
 * Created by Nikita on 2/2/17.
 */

'use strict';

import React, { Component, PropTypes } from 'react'
import CalendarDay from './CalendarDay'

import MapDaysInMonth from './../utils/mapDaysInMonth'
import type from './../utils/type'

export default class Calendar extends Component {
    componentWillMount(){
        this.MapDaysInMonth = new MapDaysInMonth(this.props.focusedDate)
    }
    render(){

        this.MapDaysInMonth.setStartDate(this.props.focusedDate);

        let renderedDays = this.MapDaysInMonth.resultDates.map((day, i) => {
            if(type(day) === 'Object') {
                let isToday = day.date.fullDate.toDateString() === this.props.today.toDateString() ? ' today' : '';
                let isDayoff = day.date.fullDate.getDay() === 0 ||  day.date.fullDate.getDay() === 6 ? ' dayoff': '';
                return (
                    <CalendarDay
                        key={day.date.fullDate}
                        firstDayRef={this.props.firstDayRef}
                        isToday={isToday}
                        isDayoff={isDayoff}
                        {...day}
                    />
                )
            }
            else {
                return <div key={i} className={`day`}></div>
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