/**
 * Created by Nikita on 2/1/17.
 */

'use strict';

import React, { Component, PropTypes } from 'react'
import {Provider} from 'react-redux'
import ScrollArea from './../components/ScrollArea'
import Header from './Header'
import store from './../reducers/index'

export default class App extends Component{
    
    componentDidMount(){
        
        let unsubscribe = store.subscribe(()=>this.forceUpdate());
    }
    render(){
       return (
           <Provider store={store}>
               <div id="root">
                   <Header />
                   <ScrollArea />
               </div>
           </Provider>
       )
    }
}
App.childContextTypes = {
    store: PropTypes.object
};
