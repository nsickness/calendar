/**
 * Created by Nikita on 2/2/17.
 */

'use strict';

import React, { Component, PropTypes } from 'react'
import  mapDaysInMonth from './../utils/mapDaysInMonth'

export default class Calendar extends Component {
    componentDidMount(){
        console.log(this.today);
    }
    render(){
        const store = this.context.store.getState();
        let renderedDays = mapDaysInMonth(store.calendarDates).map((day, i) => {
            if(Object.prototype.toString.call(day).slice(8, -1) === 'Object') {
                let isToday = day.date.fullDate.toDateString() === store.today.toDateString() ? 'today' : null;
                return (
                    <div
                        ref={node => {if(isToday) this.today = node} }
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