/**
 * Created by Nikita on 2/1/17.
 */

'use strict';

import React, { Component, PropTypes } from 'react'
import {Provider} from 'react-redux'
import ScrollAreaContainer from './../containers/scrollAreaContainer'
import HeaderContainer from './HeaderContainer'
import store from './../reducers/index'

export default class App extends Component{
    render(){
       return (
           <Provider store={store}>
               <div id="root">
                   <HeaderContainer />
                   <ScrollAreaContainer />
               </div>
           </Provider>
       )
    }
}
App.childContextTypes = {
    store: PropTypes.object
};