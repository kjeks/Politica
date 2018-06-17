import Reducer from '../HomeContentReducer';
import Immutable from "immutable";
import MainPageTypes from "../MainPageTypes";

const INITIAL_STATE = Immutable.Map({
    content: Immutable.Map({
        text: "this is a test mode for testing"
    })
});

it('on MAIN_PAGE_CONTENT_RECEIVED, it should set the content to the received content', ()=> {
    const newContent = Immutable.Map({
        text: "here is some new text"
    });
    const action = {type: MainPageTypes.MAIN_PAGE_CONTENT_RECEIVED, content: newContent};

    expect(INITIAL_STATE.get('content')).not.toEqual(newContent);
    expect(Reducer(INITIAL_STATE, action).get('content')).toEqual(newContent);
});
