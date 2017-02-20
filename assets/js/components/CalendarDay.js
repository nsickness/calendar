/**
 * Created by Nikita on 2/3/17.
 */

'use strict';

import React, { Component, PropTypes } from 'react'

export default class CalendarDay extends Component {
    constructor(){
        super();
        this.createEvent = this.createEvent.bind(this);
        this.eventId = 0;
    }
    generateEventId(){
        this.eventId++;
        return this.props.date.fullDate + this.eventId
    }
    createEvent(){
        this.context.store.dispatch({
            type:'CREATE_EVENT',
            startDate: this.props.date.fullDate,
            endDate:this.props.date.fullDate,
            id:this.generateEventId()
        })
    }
    render(){

        let {relation, isToday, date, firstDayRef, firstDay, isDayoff} = this.props;

        const store = this.context.store.getState();

        let thisDayEvents = store.events.filter(event => {
            return event.startDate.toString() === date.fullDate.toString()
        });
        let eventsList = !!thisDayEvents.length && thisDayEvents.map(event =>{

                return (
                    <div key={event.id} className="event single"></div>
                )
            });

        return(
            <div
                ref={firstDay && firstDayRef}
                className={`day ${relation}${isToday}${isDayoff}`}
                onDoubleClick={this.createEvent}
            >
                <div className="badge-wrap">
                    <div className="date">
                        <span>{date.plainDate}</span>
                    </div>
                </div>
                {eventsList}
            </div>
        )
    }
}


CalendarDay.contextTypes = {
    store: PropTypes.object
};