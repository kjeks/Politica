import types from '../constants/actionTypes/MainPageTypes';
import HomeAdapter from "../adapters/HomeAdapter";
import MockedHomeItems from '../mockedData/MenuItems';
import HomeService from "../Services/HomeService";

export function initializeAction() {
    const menu = HomeAdapter.createHomeMenu(MockedHomeItems);
    return {
        type: types.MAIN_PAGE_INITIALIZED,
        homeMenu: menu
    }
    HomeService.getContent(menu.selectedId)

}
export function itemClickedAction(itemId) {
    return {
        type: types.MAIN_PAGE_ITEM_CLICKED,
        itemId: itemId
    }
}