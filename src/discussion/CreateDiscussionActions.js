import DiscussionActionTypes from "./DiscussionActionTypes";

export default {
    onTopicSelected: function (id) {
        return dispatch => dispatch({type: DiscussionActionTypes.NEW_DISCUSSION_SELECT_TOPIC, selectedId: id});
    }
}