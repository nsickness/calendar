/**
 * Created by Nikita on 2/6/17.
 */

'use strict';

import React, { Component, PropTypes } from 'react'
import Button from './../components/Button'

export default class Header extends Component{
    switchMonth(actionType){
        this.context.store.dispatch({type:actionType})
    }
    render(){
        const store = this.context.store.getState();
        return(
            <header id="header">
                <nav>
                    <div className="nav-wrapper light-blue lighten-3">
                        <span className="brand-logo center"> {store.focusedMonth + ' ' + store.focusedDate.getFullYear()}</span>
                        <ul className="right">
                            <li><Button className="grey lighten-0" clickHandler={()=>this.switchMonth('DECREMENT_MONTH')} >{'<'}</Button></li>
                            <li><Button className="grey lighten-0" clickHandler={()=>this.switchMonth('SET_TODAY')} >{'today'}</Button></li>
                            <li><Button className="grey lighten-0" clickHandler={()=>this.switchMonth('INCREMENT_MONTH')} >{'>'}</Button></li>
                        </ul>
                    </div>
                </nav>

                <div className="days">
                    <div className="day dayoff"><div className="badge-wrap">sun</div></div>
                    <div className="day"><div className="badge-wrap">mon</div></div>
                    <div className="day"><div className="badge-wrap">tue</div></div>
                    <div className="day"><div className="badge-wrap">wed</div></div>
                    <div className="day"><div className="badge-wrap">thu</div></div>
                    <div className="day"><div className="badge-wrap">fri</div></div>
                    <div className="day dayoff"><div className="badge-wrap">sat</div></div>
                </div>

            </header>
        )
    }
}
Header.contextTypes = {
    store: PropTypes.object
};