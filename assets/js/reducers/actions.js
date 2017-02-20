/**
 * Created by Nikita on 2/20/17.
 */

'use strict';

export function setDefaultOffsetTop(offset) {
    return {
        type:'SET_DEFAULT_OFFSET_TOP',
        offsetTop:offset
    }
}

export function incrementMonth() {
    return {
        type:'INCREMENT_MONTH'
    }
}
export function decrementMonth() {
    return {
        type:'DECREMENT_MONTH'
    }
}

export function setToday() {
    return {
        type:'SET_TODAY'
    }
}
