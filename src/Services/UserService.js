import CommonConstants from "../constants/CommonConstants";
import UserAdapter from "../adapters/UserAdapter";
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
            body: JSON.stringify(UserAdapter.createUserResponse(user)),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        });
    }
}