import Reducer from '../CreateDiscussionReducer';
import Immutable from "immutable";
import DiscussionActionTypes from "../../DiscussionActionTypes";

const INITIAL_STATE = Immutable.Map({
    selectedTopicId: null,
    minLevel: 1,
    maxLevel: 100,
    questionText: "",
    forDebaters: 1,
    againstDebaters: 1,
    spectatorsAllowed: false
});

it('on NEW_DISCUSSION_SELECT_TOPIC, it should set the selectedTopicId to the received selectedId', ()=> {
    const selectedId = 5;
    const action = {type: DiscussionActionTypes.NEW_DISCUSSION_SELECT_TOPIC, selectedId: selectedId};

    expect(INITIAL_STATE.get('selectedTopicId')).not.toEqual(selectedId);
    expect(Reducer(INITIAL_STATE, action).get('selectedTopicId')).toEqual(selectedId);
});
it('on NEW_DISCUSSION_QUESTION_TEXT_CHANGE, it should set the questionText to the received newValue', ()=> {
    const newText = "this is the next questions text";
    const action = {type: DiscussionActionTypes.NEW_DISCUSSION_QUESTION_TEXT_CHANGE, newValue: newText};

    expect(INITIAL_STATE.get('questionText')).not.toEqual(newText);
    expect(Reducer(INITIAL_STATE, action).get('questionText')).toEqual(newText);
});
describe('on NEW_DISCUSSION_NUMBER_OF_DEBATERS_CHANGE', ()=> {
    const newValue = 5;
    describe('if the received typeOfDebater is for', ()=> {
        const action = {type: DiscussionActionTypes.NEW_DISCUSSION_NUMBER_OF_DEBATERS_CHANGE, typeOfDebater: 'for', newValue: newValue};

        it('should set forDebaters to the received newValue', ()=> {
            expect(INITIAL_STATE.get('forDebaters')).not.toEqual(newValue);
            expect(Reducer(INITIAL_STATE, action).get('forDebaters')).toEqual(newValue);
        });
        it('should NOT change the againstDebaters', ()=> {
            expect(INITIAL_STATE.get('againstDebaters')).not.toEqual(newValue);
            expect(Reducer(INITIAL_STATE, action).get('againstDebaters')).toEqual(INITIAL_STATE.get('againstDebaters'));
        })
    });
    describe('if the received typeOfDebater is against', ()=> {
        const action = {type: DiscussionActionTypes.NEW_DISCUSSION_NUMBER_OF_DEBATERS_CHANGE, typeOfDebater: 'against', newValue: newValue};

        it('should set againstDebaters to the received newValue', ()=> {
            expect(INITIAL_STATE.get('againstDebaters')).not.toEqual(newValue);
            expect(Reducer(INITIAL_STATE, action).get('againstDebaters')).toEqual(newValue);
        });
        it('should NOT change the againstDebaters', ()=> {
            expect(INITIAL_STATE.get('forDebaters')).not.toEqual(newValue);
            expect(Reducer(INITIAL_STATE, action).get('forDebaters')).toEqual(INITIAL_STATE.get('forDebaters'));
        })
    });
});
describe('on NEW_DISCUSSION_LEVEL_RANGE_CHANGE', ()=> {
    const newValue = 5;
    describe('if the received rangeType is min', ()=> {
        const action = {type: DiscussionActionTypes.NEW_DISCUSSION_LEVEL_RANGE_CHANGE, rangeType: 'min', newValue: newValue};

        it('should set minLevel to the received newValue', ()=> {
            expect(INITIAL_STATE.get('minLevel')).not.toEqual(newValue);
            expect(Reducer(INITIAL_STATE, action).get('minLevel')).toEqual(newValue);
        });
        it('should NOT change the maxLevel', ()=> {
            expect(INITIAL_STATE.get('maxLevel')).not.toEqual(newValue);
            expect(Reducer(INITIAL_STATE, action).get('maxLevel')).toEqual(INITIAL_STATE.get('maxLevel'));
        })
    });
    describe('if the received rangeType is max', ()=> {
        const action = {type: DiscussionActionTypes.NEW_DISCUSSION_LEVEL_RANGE_CHANGE, rangeType: 'max', newValue: newValue};

        it('should set maxLevel to the received newValue', ()=> {
            expect(INITIAL_STATE.get('maxLevel')).not.toEqual(newValue);
            expect(Reducer(INITIAL_STATE, action).get('maxLevel')).toEqual(newValue);
        });
        it('should NOT change the minLevel', ()=> {
            expect(INITIAL_STATE.get('minLevel')).not.toEqual(newValue);
            expect(Reducer(INITIAL_STATE, action).get('minLevel')).toEqual(INITIAL_STATE.get('minLevel'));
        })
    });
});
it('on NEW_DISCUSSION_TOGGLE_SPECTATORS_ALLOWED, it should toggle the state of spectatorsAllowed', ()=> {
    const action = {type: DiscussionActionTypes.NEW_DISCUSSION_TOGGLE_SPECTATORS_ALLOWED};

    expect(Reducer(INITIAL_STATE, action).get('spectatorsAllowed')).not.toEqual(INITIAL_STATE.get('spectatorsAllowed'));
});
