/**
 * Created by Nikita on 2/20/17.
 */

'use strict';
import { connect } from 'react-redux'
import { setDefaultOffsetTop, incrementMonth, decrementMonth } from './../reducers/actions'
import ScrollArea from './../components/ScrollArea'

const mapStateToProps = (state) => {
    return {
        defaultOffsetTop: state.defaultOffsetTop,
        focusedDate: state.focusedDate,
        today: state.today
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setDefaultOffsetTop(defaultOffsetTop) {
            dispatch(setDefaultOffsetTop(defaultOffsetTop))
        },
        incrementMonth() {
            dispatch(incrementMonth())
        },
        decrementMonth() {
            dispatch(decrementMonth())
        }
    }
};

const ScrollAreaContainer = connect(mapStateToProps, mapDispatchToProps)(ScrollArea);

export default ScrollAreaContainer