import types from './MainPageTypes';
import HomeService from "./HomeService";

export default {
    initialize: function () {
        return dispatch => {
            HomeService.getMenuItems().then(menu => {
                dispatch({type: types.MAIN_PAGE_INITIALIZED, homeMenu: menu});
                HomeService.getContent(1).then((content)=> {
                    dispatch({type: types.MAIN_PAGE_CONTENT_RECEIVED, content: content});
                });
            });
        }
    },
    itemClicked: function (itemId) {
        return dispatch => {
            dispatch({type: types.MAIN_PAGE_ITEM_CLICKED, itemId: itemId});
            HomeService.getContent(itemId).then((content)=> {
                dispatch({type: types.MAIN_PAGE_CONTENT_RECEIVED, content: content});
            });
        }
    }
}
