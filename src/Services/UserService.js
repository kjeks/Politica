import CommonConstants from "../constants/CommonConstants";
import UserAdapter from "../adapters/UserAdapter";

export default {
    getUser: function (userId) {
        return fetch(CommonConstants.serverUrl + '/user/' + 1)
            .then(response => response.json())
            .then((res)=> {
                return UserAdapter.createUser(res);
            })
    },
    saveUser: function (user) {
        console.log(UserAdapter.createUserResponse(user));
        console.log(JSON.stringify(UserAdapter.createUserResponse(user)));
        return fetch(CommonConstants.serverUrl + '/user/', {
            body: JSON.stringify(UserAdapter.createUserResponse(user)),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        });
    }
}