import Reducer from '../TopicListReducer';
import Immutable from "immutable";
import CommonActionTypes from "../CommonActionTypes";

const INITIAL_STATE = Immutable.Map({
    favoriteTopics: Immutable.List(),
    otherTopics: Immutable.List()
});
const favoriteTopics = Immutable.List([
    Immutable.Map({
        id: 1,
        name: "some cool topic"
    }),
    Immutable.Map({
        id: 2,
        name: "another cool topic"
    }),
]);
const otherTopics = Immutable.List([
    Immutable.Map({
        id: 3,
        name: "some boring topic"
    }),
    Immutable.Map({
        id: 4,
        name: "another boring topic"
    }),
]);

describe('on TOPIC_LISTS_RECEIVED', ()=> {
    const action = {type: CommonActionTypes.TOPIC_LISTS_RECEIVED, favoriteTopics: favoriteTopics, otherTopics: otherTopics};

    it('should set the favoriteTopics to the received favoriteTopics', ()=> {
        expect(INITIAL_STATE.get('favoriteTopics')).not.toEqual(favoriteTopics);
        expect(Reducer(INITIAL_STATE, action).get('favoriteTopics')).toEqual(favoriteTopics);
    });

    it('should set the otherTopics to the received otherTopics', ()=> {
        expect(INITIAL_STATE.get('otherTopics')).not.toEqual(otherTopics);
        expect(Reducer(INITIAL_STATE, action).get('otherTopics')).toEqual(otherTopics);
    });
});
