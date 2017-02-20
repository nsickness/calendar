/**
 * Created by Nikita on 2/6/17.
 */

'use strict';
import React from 'react'


export default function Button(props) {
    return(
        <button onClick={props.clickHandler} className={`waves-effect waves-light btn-flat ${props.className}`}>
            {props.children}
        </button>
    )
}