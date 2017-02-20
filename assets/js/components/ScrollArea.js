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
    }
    componentDidMount(){
        
        let defaultOffsetTop = this.firstDay.offsetTop;

        this.mainView.scrollTop = defaultOffsetTop;

        this.context.store.dispatch({type:'SET_DEFAULT_OFFSET_TOP',offsetTop:defaultOffsetTop});

        if(window.navigator.platform !== 'MacIntel'){
            this.mainView.style.marginRight = '-16px';
        }
    }
    componentDidUpdate(){
        this.mainView.scrollTop = this.context.store.getState().defaultOffsetTop
    }
    changeMonth(event){
        const scrollArea = event.nativeEvent.target;
        let scrollOffset = 0;
        let store = this.context.store;
        setTimeout(()=>{
            let shouldLoadPrev = scrollArea.scrollTop === scrollOffset;
            let shouldLoadNext = scrollArea.scrollTop >= scrollArea.scrollHeight - this.mainView.clientHeight - 1;
            new Promise((resolve,reject) =>{
                if(shouldLoadPrev){
                    store.dispatch({type:'DECREMENT_MONTH'});
                    resolve()
                } else if(shouldLoadNext) {
                    store.dispatch({type:'INCREMENT_MONTH'});
                    resolve()
                }
            }).then(()=>{
                store.dispatch({type:'SET_DEFAULT_OFFSET_TOP',offsetTop:this.firstDay.offsetTop})
            })
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