import CommonConstants from "./CommonConstants";
import Immutable from 'immutable';

export default {
    fetchTopicLists: (userId) => {
        return fetch(CommonConstants.serverUrl + `/topicsLists/${1}`).then(response => response.json()).then(res => {
            return Immutable.fromJS(res);
        })
    }
}