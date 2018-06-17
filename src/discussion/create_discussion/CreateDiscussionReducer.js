import Immutable from 'immutable';
import DiscussionActionTypes from "../DiscussionActionTypes";

const initialState = Immutable.Map({
    selectedTopicId: null,
    minLevel: 1,
    maxLevel: 100,
    questionText: "",
    forDebaters: 1,
    againstDebaters: 1,
    spectatorsAllowed: false
});

export default function (state = initialState, action) {
    switch (action.type) {
        case DiscussionActionTypes.NEW_DISCUSSION_SELECT_TOPIC:
            return state.set('selectedTopicId', action.selectedId);
        case DiscussionActionTypes.NEW_DISCUSSION_QUESTION_TEXT_CHANGE:
            return state.set('questionText', action.newValue);
        case DiscussionActionTypes.NEW_DISCUSSION_NUMBER_OF_DEBATERS_CHANGE:
            return action.typeOfDebater === 'for' ? state.set('forDebaters', action.newValue): state.set('againstDebaters', action.newValue);
        case DiscussionActionTypes.NEW_DISCUSSION_LEVEL_RANGE_CHANGE:
            return action.rangeType === 'min' ? state.set('minLevel', action.newValue): state.set('maxLevel', action.newValue);
        case DiscussionActionTypes.NEW_DISCUSSION_TOGGLE_SPECTATORS_ALLOWED:
            return state.set('spectatorsAllowed', !state.get('spectatorsAllowed'));
        default:
            return state;
    }
}