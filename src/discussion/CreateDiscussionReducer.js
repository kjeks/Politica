import Immutable from 'immutable';
import DiscussionActionTypes from "./DiscussionActionTypes";

const initialState = Immutable.Map({
    selectedTopicId: null
});

export default function (state = initialState, action) {
    switch (action.type) {
        case DiscussionActionTypes.NEW_DISCUSSION_SELECT_TOPIC:
            return state.set('selectedTopicId', action.selectedId);
        default:
            return state;
    }
}