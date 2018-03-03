import MainPageTypes from '../constants/actionTypes/MainPageTypes';
import TestObject from '../domain/TestObject';

const initialState = new TestObject();

function MainPageReducer(state = initialState, action) {
    switch (action.type) {
        case MainPageTypes.MAIN_PAGE_INITIALIZE:

            return state.set('test', 5);
        default:
            return state;
    }
}

export default MainPageReducer