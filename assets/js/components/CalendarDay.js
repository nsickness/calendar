/**
 * Created by Nikita on 2/3/17.
 */

'use strict';

import React, { Component, PropTypes } from 'react'

export default class CalendarDay extends Component {
    render(){
        
        let {relation, isToday, date, firstDayRef, firstDay, isDayoff} = this.props;
        
        return(
            <div
                ref={firstDay && firstDayRef}
                className={`day ${relation}${isToday}${isDayoff}`}>
                <div className="inner">{date.plainDate}</div>
            </div>
        )
    }
}
