import MainPageTypes from '../../constants/actionTypes/MainPageTypes';

const initialState = null;

function HomeMenuReducer(state = initialState, action) {
    switch (action.type) {
        case MainPageTypes.MAIN_PAGE_INITIALIZED:
            return action.homeMenu;
        case MainPageTypes.MAIN_PAGE_ITEM_CLICKED:
            return state.set('selectedId', action.itemId);
        default:
            return state;
    }
}

export default HomeMenuReducer