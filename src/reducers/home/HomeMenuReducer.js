import MainPageTypes from '../../constants/actionTypes/MainPageTypes';
import Immutable from 'immutable';

const initialState = Immutable.Map({
    homeMenu: null,
    selectedId: 1
});

export default function HomeMenuReducer(state = initialState, action) {
    switch (action.type) {
        case MainPageTypes.MAIN_PAGE_INITIALIZED:
            console.log(state, initialState, action);
            return state.set('homeMenu', action.homeMenu);
        case MainPageTypes.MAIN_PAGE_ITEM_CLICKED:
            return state.set('selectedId', action.itemId);
        default:
            return state;
    }
}
