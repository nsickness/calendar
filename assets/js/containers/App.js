/**
 * Created by Nikita on 2/1/17.
 */

'use strict';

import React, { Component, PropTypes } from 'react'
import {Provider} from 'react-redux'
import getDaysInMonth from './../utils/getDaysInMonth'
import Calendar from './Calendar'
import store from './../reducers/index'

export default class App extends Component{
    componentDidMount(){
       let unsubscribe = store.subscribe(()=>this.forceUpdate());
        console.log(store.getState());
        // this.mainView.scrollTop = 400
    }
    render(){
        // console.log(this.state);
        // if(!this.state){
        //     return null
        // }
        // let data = {
        //     startDay: this.state.current.startDay,
        //     daysInPrevMonth: this.state.prev.daysInMonth,
        //     daysInCurrentMonth: this.state.current.daysInMonth,
        //     daysInNextMonth: this.state.next.daysInMonth
        // };
        //
        // let renderedDays = mapDaysInMonth(data).map((day, i) => {
        //     return <div key={day.date.fullDate} className={`day ${day.relation}`}><div className="inner">{day.date.plainDate}</div></div>
        // })
       return (
           <Provider store={store}>
               <div id="root">
                   <header id="header">
                       <div className="title">la la la</div>
                       <div className="days">
                           <div className="day"><div className="inner">sun</div></div>
                           <div className="day"><div className="inner">mon</div></div>
                           <div className="day"><div className="inner">tue</div></div>
                           <div className="day"><div className="inner">wed</div></div>
                           <div className="day"><div className="inner">thu</div></div>
                           <div className="day"><div className="inner">fri</div></div>
                           <div className="day"><div className="inner">sat</div></div>
                       </div>
                   </header>
                   <section id="main-view" ref={node => this.mainView = node}>
                       <div className="days">
                           <Calendar />
                       </div>
                   </section>
               </div>
           </Provider>

       )
    }
}
App.childContextTypes = {
    store: PropTypes.object
};