/**
 * Created by Nikita on 2/3/17.
 */

'use strict';
import React, { Component, PropTypes } from 'react'
import Calendar from './../containers/Calendar'

export default class ScrollArea extends Component {
    constructor(){
        super();
        this.changeMonth = this.changeMonth.bind(this);

        this.scrollOffset = 200
    }
    componentDidMount(){
        this.mainView.scrollTop = this.firstDay.offsetTop
    }
    changeMonth(event){
        let scrollArea = event.target;
        setTimeout(()=>{
            if(scrollArea.scrollTop < this.scrollOffset){
                this.context.store.dispatch({type:'DECREMENT_MONTH'});
                this.mainView.scrollTop = this.firstDay.offsetTop
            } else if(scrollArea.scrollTop > this.firstDay.offsetTop + this.scrollOffset * 2) {
                this.context.store.dispatch({type:'INCREMENT_MONTH'});
                this.mainView.scrollTop = this.firstDay.offsetTop - this.scrollOffset * 2
            }
        },200)

    }
    render(){
        return(
            <section onScroll={this.changeMonth} id="main-view" ref={node => this.mainView = node}>
                <div className="days">
                    <Calendar firstDayRef={node =>this.firstDay = node} />
                </div>
            </section>
        )
    }
}

ScrollArea.contextTypes = {
    store: PropTypes.object
};