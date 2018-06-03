import Immutable from 'immutable';
import CommonActionTypes from "./CommonActionTypes";

const initialState = Immutable.Map({
    favoriteTopics: Immutable.List(),
    otherTopics: Immutable.List()
});

export default function(state = initialState, action) {
    switch(action.type) {
        case CommonActionTypes.TOPIC_LISTS_RECEIVED:
            return state.set('favoriteTopics', action.favoriteTopics).set('otherTopics', action.otherTopics);
        default:
            return state;
    }
}