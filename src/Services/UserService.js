import CommonConstants from "../constants/CommonConstants";
import UserAdapter from "../adapters/UserAdapter";

export default {
    getUser: function (userId) {
        return fetch(CommonConstants.serverUrl + '/user/' + 1)
            .then(response => response.json())
            .then((res)=> {
                return UserAdapter.createUser(res);
            })
    }
}