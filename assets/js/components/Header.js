/**
 * Created by Nikita on 2/6/17.
 */

'use strict';

import React, { Component, PropTypes } from 'react'
import Button from './../components/Button'

export default class Header extends Component{
    render(){
        return(
            <header id="header">
                <nav>
                    <div className="nav-wrapper light-blue lighten-3">
                        <span className="brand-logo center"> {this.props.displayedDate}</span>
                        <ul className="right">
                            <li><Button className="blue lighten-0" clickHandler={this.props.decrementMonth} >{'<'}</Button></li>
                            <li><Button className="grey lighten-0" clickHandler={this.props.setToday} >{'today'}</Button></li>
                            <li><Button className="blue lighten-0" clickHandler={this.props.incrementMonth} >{'>'}</Button></li>
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