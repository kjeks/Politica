import CommonConstants from "../common/CommonConstants";
import Immutable from 'immutable';

export default {
    getContent(id) {
        return fetch(CommonConstants.serverUrl + `/homeContent/${id}`)
            .then(response => response.json())
            .then((res) => {
                return Immutable.fromJS(res);
            });
    },
    getMenuItems() {
        return fetch(CommonConstants.serverUrl + '/homemenu')
            .then(response => response.json())
            .then((res) => {
                return Immutable.fromJS(res.menuItems);
            });
    }
}