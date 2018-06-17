import MainPageTypes from "../MainPageTypes";
import Immutable from "immutable";
import Reducer from '../HomeMenuReducer';

const INITIAL_STATE = Immutable.Map({
    homeMenu: null,
    selectedId: 1
});

const homeMenu = Immutable.List([
        Immutable.Map({
            id: 1,
            name: 'competitive'
        }),
        Immutable.Map({
            id: 2,
            name: 'tutor'
        }),
        Immutable.Map({
            id: 3,
            name: 'discussion'
        }),

    ]);

it('on MAIN_PAGE_INITIALIZED, it should set the homeMenu to the received menu', ()=> {
    const action = {type: MainPageTypes.MAIN_PAGE_INITIALIZED, homeMenu: homeMenu};

    expect(INITIAL_STATE.get('homeMenu')).not.toEqual(homeMenu);
    expect(Reducer(INITIAL_STATE, action).get('homeMenu')).toEqual(homeMenu);
});
it('on MAIN_PAGE_ITEM_CLICKED, it should set the selectedId to the received itemId', ()=> {
    const newItemId = 5;
    const action = {type: MainPageTypes.MAIN_PAGE_ITEM_CLICKED, itemId: newItemId};

    expect(INITIAL_STATE.get('selectedId')).not.toEqual(newItemId);
    expect(Reducer(INITIAL_STATE, action).get('selectedId')).toEqual(newItemId);
});