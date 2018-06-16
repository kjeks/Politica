import Reducer from "../UserReducer";
import Immutable from "immutable";
import UserTypes from "../UserTypes";

const INITIAL_STATE = Immutable.Map({
    id: null,
    name: null,
    initialName: null,
    topics: Immutable.List(),
    initialTopics: Immutable.List()
});
const user = Immutable.Map({
    id: 1,
    name: "Jon Magnus",
    topics: Immutable.List([
        Immutable.Map({
            id: 2,
            name: "economics",
            selected: true
        }),
        Immutable.Map({
            id: 3,
            name: "Politics",
            selected: true
        })
    ])
});

describe('on USER_INITIALIZED', ()=> {
    const action = {type: UserTypes.USER_INITIALIZED, user: user};
    const newFirstName = user.get('name');
    it('should set the name to the received name', ()=> {
        expect(INITIAL_STATE.get('name')).not.toEqual(newFirstName);
        expect(Reducer(INITIAL_STATE, action).get('name')).toEqual(newFirstName);
    });
    it('should set the initialName to the received name', ()=> {
        expect(INITIAL_STATE.get('name')).not.toEqual(newFirstName);
        expect(Reducer(INITIAL_STATE, action).get('initialName')).toEqual(newFirstName);
    });
    it('should set the id to the received id', ()=> {
        const newId = user.get('id');
        expect(INITIAL_STATE.get('id')).not.toEqual(newId);
        expect(Reducer(INITIAL_STATE, action).get('id')).toEqual(newId);
    });
    it('should set the topics to the received topics', ()=> {
        const newTopics = user.get('topics');
        expect(INITIAL_STATE.get('topics')).not.toEqual(newTopics);
        expect(Reducer(INITIAL_STATE, action).get('topics')).toEqual(newTopics);
    });
    it('should set the initialTopics to the received topics', ()=> {
        const newTopics = user.get('topics');
        expect(INITIAL_STATE.get('initialTopics')).not.toEqual(newTopics);
        expect(Reducer(INITIAL_STATE, action).get('initialTopics')).toEqual(newTopics);
    });
});
it('on USER_VALUE_CHANGED, it should change the received key to the received value', ()=> {
    const newValue = "Jon Magnus";
    const action = {type: UserTypes.USER_VALUE_CHANGED, changedField: 'name', newValue: newValue};
    expect(INITIAL_STATE.get('name')).not.toEqual(newValue);
    expect(Reducer(INITIAL_STATE, action).get('name')).toEqual(newValue);
});
it('on USER_TOPIC_CHANGED, it should change the selected state of the topic with received name', ()=> {
   const nameOfTopic = 'politics';
   const action = {type: UserTypes.USER_TOPIC_CHANGED, name: nameOfTopic};

   const state = Immutable.Map({
       id: null,
       name: null,
       initialName: null,
       topics: Immutable.List([
           Immutable.Map({
               id: 2,
               name: "economics",
               selected: true
           }),
           Immutable.Map({
               id: 3,
               name: "politics",
               selected: true
           })
       ]),
       initialTopics: Immutable.List()
   });
    const indexOfUpdated =  state.get('topics').findIndex((topic) => {
        return topic.get('name') === action.name;
    });
    const currentTopicState = state.getIn(['topics', indexOfUpdated, 'selected']);

   expect(Reducer(state, action).getIn(['topics', indexOfUpdated, 'selected'])).not.toEqual(currentTopicState);
});

describe('on USER_CANCEL_CHANGES', ()=> {
    const action = {type: UserTypes.USER_CANCEL_CHANGES};
    it('should reset the name to the initialName', ()=> {
        const state = INITIAL_STATE.set('name', "anotherName");
        expect(state.get('name')).not.toEqual(INITIAL_STATE.get('name'));
        expect(Reducer(state, action).get('name')).toEqual(INITIAL_STATE.get('name'));
    });
    it('should reset the topics to the initialTopics', ()=> {
        const newTopics = INITIAL_STATE.setIn(['topics', 1, 'selected'], false);
        const state = INITIAL_STATE.set('topics', newTopics);
        expect(state.get('topics')).not.toEqual(INITIAL_STATE.get('topics'));
        expect(Reducer(state, action).get('topics')).toEqual(INITIAL_STATE.get('topics'));
    });
});

describe('on USER_SAVE_CHANGES', ()=> {
    const action = {type: UserTypes.USER_SAVE_CHANGES};
    it('should set the initialName to the value of current name', ()=> {
        const state = INITIAL_STATE.set('name', "anotherName");
        expect(state.get('name')).not.toEqual(INITIAL_STATE.get('name'));
        expect(Reducer(state, action).get('initialName')).toEqual(state.get('name'));
    });
    it('should set the initialTopics to the current topics', ()=> {
        const newTopics = INITIAL_STATE.setIn(['topics', 1, 'selected'], false);
        const state = INITIAL_STATE.set('topics', newTopics);
        expect(state.get('topics')).not.toEqual(INITIAL_STATE.get('topics'));
        expect(Reducer(state, action).get('initialTopics')).toEqual(state.get('topics'));
    });
});
