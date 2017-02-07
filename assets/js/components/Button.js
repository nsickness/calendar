/**
 * Created by Nikita on 2/6/17.
 */

'use strict';
import React from 'react'


export default function Button(props) {
    let {clickHandler, children, className} = props;
    return(
        <button onClick={clickHandler} className={`waves-effect waves-light btn-flat ${className}`}>
            {children}
        </button>
    )
}