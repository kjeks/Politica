import types from '../constants/actionTypes/MainPageTypes';
import HomeService from "../Services/HomeService";

export default {
    initializeAction: function (menu) {
        return {
            type: types.MAIN_PAGE_INITIALIZED,
            homeMenu: menu
        }
    },
    contentReceivedAction: function (content) {
        return {
            type: types.MAIN_PAGE_CONTENT_RECEIVED,
            content: content
        }
    },
    initialize: function () {
        return dispatch => {
            HomeService.getMenuItems().then(menu => {
                dispatch(this.initializeAction(menu));
                HomeService.getContent(1).then((content)=> {
                    dispatch(this.contentReceivedAction(content));
                });
            });
        }
    },
    itemClicked: function (itemId) {
        return dispatch => {
            dispatch(this.itemClickedAction(itemId));
            HomeService.getContent(itemId).then((content)=> {
                dispatch(this.contentReceivedAction(content));
            });
        }
    },
    itemClickedAction: function (itemId) {
        return {
            type: types.MAIN_PAGE_ITEM_CLICKED,
            itemId: itemId
        }
    }
}
