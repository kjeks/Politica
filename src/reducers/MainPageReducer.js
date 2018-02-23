import MainPageTypes from '../constants/actionTypes/MainPageTypes';

const initialState = [];

function MainPageReducer(state = initialState, action) {
    switch (action.type) {
        case MainPageTypes.MAIN_PAGE_INITIALIZE:
            console.log("setting state", state, action);
            return [...state, 1];
        default:
            return state;
    }
}

export default MainPageReducer