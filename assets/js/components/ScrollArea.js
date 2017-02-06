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

        this.scrollOffset = 0
    }
    componentDidMount(){
        this.mainView.scrollTop = this.firstDay.offsetTop
    }
    changeMonth(event){
        let scrollArea = event.nativeEvent.target;

        setTimeout(()=>{
            let shouldLoadPrev = scrollArea.scrollTop === this.scrollOffset;
            let shouldLoadNext = scrollArea.scrollTop === scrollArea.scrollHeight - this.mainView.clientHeight - 1;
            if(shouldLoadPrev){
                this.context.store.dispatch({type:'DECREMENT_MONTH'});
                this.mainView.scrollTop = this.firstDay.offsetTop;
            } else if(shouldLoadNext) {
                 this.context.store.dispatch({type:'INCREMENT_MONTH'});
                 this.mainView.scrollTop = this.firstDay.offsetTop
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