import MainPageTypes from './MainPageTypes';
import Immutable from 'immutable';

const initialState = Immutable.Map({
    content: null
});

export default function HomeContentReducer(state = initialState, action) {
    switch(action.type){
        case MainPageTypes.MAIN_PAGE_CONTENT_RECEIVED:
            return state.set('content', action.content);
        default:
            return state;
    }
}