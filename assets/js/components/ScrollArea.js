/**
 * Created by Nikita on 2/3/17.
 */

'use strict';
import React, { Component, PropTypes } from 'react'

import Calendar from './Calendar'

export default class ScrollArea extends Component {
    constructor(){
        super();
        this.changeMonth = this.changeMonth.bind(this);
    }
    componentDidMount(){
        
        let defaultOffsetTop = this.firstDay.offsetTop;

        this.mainView.scrollTop = defaultOffsetTop;

        this.props.setDefaultOffsetTop(defaultOffsetTop);

        if(window.navigator.platform !== 'MacIntel'){
            this.mainView.style.marginRight = '-16px';
        }
    }
    componentDidUpdate(){
        this.mainView.scrollTop = this.props.defaultOffsetTop
    }
    changeMonth(event){
        const scrollArea = event.nativeEvent.target;
        let scrollOffset = 0;

        setTimeout(()=>{
            let shouldLoadPrev = scrollArea.scrollTop === scrollOffset;
            let shouldLoadNext = scrollArea.scrollTop >= scrollArea.scrollHeight - this.mainView.clientHeight - 1;
            new Promise((resolve,reject) =>{
                if(shouldLoadPrev){
                    this.props.decrementMonth();
                    resolve()
                } else if(shouldLoadNext) {
                    this.props.incrementMonth();
                    resolve()
                }
            }).then(()=>{
                this.props.setDefaultOffsetTop(this.firstDay.offsetTop);
            })
        },200)

    }
    render(){
       
        return(
            <section onScroll={this.changeMonth} id="main-view" ref={node => this.mainView = node}>
                <div className="days">
                    <Calendar 
                        firstDayRef={node =>this.firstDay = node} 
                        focusedDate={this.props.focusedDate} 
                        today={this.props.today} 
                    />
                </div>
            </section>
        )
    }
}
ScrollArea.contextTypes = {
    store: PropTypes.object
};