import HomeAdapter from '../adapters/HomeAdapter';
import CommonConstants from "../constants/CommonConstants";

export default {
    getContent(id) {
        return fetch(CommonConstants.serverUrl + '/homeContent/' + id)
            .then(response => response.json())
            .then((res) => {
                return HomeAdapter.createContent(res);
            });
    },
    getMenuItems() {
        return fetch(CommonConstants.serverUrl + '/homemenu')
            .then(response => response.json())
            .then((res) => {
                return HomeAdapter.createHomeMenu(res)
            });
    }
}