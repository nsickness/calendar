/**
 * Created by Nikita on 2/20/17.
 */

'use strict';

import { connect } from 'react-redux'
import { incrementMonth, decrementMonth, setToday } from './../reducers/actions'
import Header from './../components/Header'

const mapStateToProps = (state) => {
    return {
        displayedDate: state.focusedMonth + ' ' + state.focusedDate.getFullYear()
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementMonth() {
            dispatch(incrementMonth())
        },
        decrementMonth() {
            dispatch(decrementMonth())
        },
        setToday(){
            dispatch(setToday())
        }
    }
};


const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer