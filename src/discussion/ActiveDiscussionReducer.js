import Immutable from 'immutable';
import DiscussionActionTypes from "./DiscussionActionTypes";

const initialState = Immutable.Map({
    againstDebaters: null,
    forDebaters: null,
    maxLevel: null,
    minLevel: null,
    questionText: "",
    selectedTopicId: 2,
    spectatorsAllowed: false,
    discussionName: null
});

export default function ActiveDiscussionReducer(state = initialState, action) {
    switch(action.type) {
        case DiscussionActionTypes.ACTIVE_DISCUSSION_DATA_RECEIVED:
            const data = action.data;
            return state.set('againstDebaters', data.againstDebaters)
                .set('forDebaters', data.forDebaters)
                .set('maxLevel', data.maxLevel)
                .set('minLevel', data.minLevel)
                .set('questionText', data.questionText)
                .set('spectatorsAllowed', data.spectatorsAllowed)
                .set('discussionName', data.discussionName);
        default:
            return state;
    }
}