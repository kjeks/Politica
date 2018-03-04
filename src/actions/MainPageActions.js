import types from '../constants/actionTypes/MainPageTypes';
import HomeAdapter from "../adapters/HomeAdapter";
import MockedHomeItems from '../mockedData/MenuItems';

export function initializeAction() {
    return {
        type: types.MAIN_PAGE_INITIALIZED,
        homeMenu: HomeAdapter.createHomeMenu(MockedHomeItems)
    }
}
export function itemClickedAction(itemId) {
    return {
        type: types.MAIN_PAGE_ITEM_CLICKED,
        itemId: itemId
    }
}