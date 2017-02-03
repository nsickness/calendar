/**
 * Created by Nikita on 2/1/17.
 */

'use strict';

import React, { Component, PropTypes } from 'react'
import {Provider} from 'react-redux'
import ScrollArea from './../components/ScrollArea'
import Calendar from './Calendar'
import store from './../reducers/index'

export default class App extends Component{
    componentWillMount(){
        
    }
    componentDidMount(){
        
        let unsubscribe = store.subscribe(()=>this.forceUpdate());
    }
    render(){
       return (
           <Provider store={store}>
               <div id="root">
                   <header id="header">
                       <div className="title">
                           <h3>{store.getState().focusedMonth + ' ' + store.getState().focusedDate.getFullYear()}</h3>
                       </div>
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
                   <ScrollArea />
               </div>
           </Provider>
       )
    }
}
App.childContextTypes = {
    store: PropTypes.object
};
