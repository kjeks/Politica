import CommonConstants from "../constants/CommonConstants";
import Immutable from 'immutable';
export default {
    getUser: function (userId) {
        return fetch(CommonConstants.serverUrl + '/user/' + 1)
            .then(response => response.json())
            .then((res)=> {
                return Immutable.fromJS(res);
            })
    },
    saveUser: function (user) {
        return fetch(CommonConstants.serverUrl + '/user/', {
            body: JSON.stringify(createSaveUserRequest(user)),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        });
    }
}
function createSaveUserRequest (user) {
    return {
        id: user.get('id'),
        name: user.get('name'),
        selectedTopics: user.get('topics').filter(topic => {
            return topic.get('selected') === true;
        }).map(topic => {
            return topic.get('id');
        })
    }

}
