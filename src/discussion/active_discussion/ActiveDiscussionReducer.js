import Immutable from 'immutable';
import DiscussionActionTypes from "../DiscussionActionTypes";
import PushActionTypes from "../../PushActionTypes";

const initialState = Immutable.Map({
    againstDebaters: null,
    forDebaters: null,
    maxLevel: null,
    minLevel: null,
    questionText: "",
    selectedTopicId: 2,
    spectatorsAllowed: false,
    discussionName: null,
    messages: Immutable.List(),
    socket: null
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
                .set('discussionName', data.discussionName)
                .set('socket', data.socket);
        case PushActionTypes.PUSH_MESSAGE_RECEIVED:
            const newMessage = Immutable.Map({
                message: action.message,
                userName:"hardcoded name"
            });
            return state.set('messages', state.get('messages').push(newMessage));
        default:
            return state;
    }
}