import CommonActionTypes from "./CommonActionTypes";
import CommonService from "./CommonService";

export default {
    fetchTopicList(userId) {
        return dispatch => {
            dispatch({type: CommonActionTypes.FETCH_TOPIC_LIST, id: userId});
            CommonService.fetchTopicLists(userId).then(topicLists => {
                dispatch({type: CommonActionTypes.TOPIC_LISTS_RECEIVED, favoriteTopics: topicLists.get('favoriteTopics'), otherTopics: topicLists.get('otherTopics')})
            });
        }
    }
}