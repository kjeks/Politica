import UserTypes from "../../constants/actionTypes/UserTypes";
import Immutable from 'immutable';
const initialState = Immutable.Map({
    id: null,
    name: null,
    initialName: null,
    topics: Immutable.List(),
    initialTopics: Immutable.List()
});

export default function (state = initialState, action) {
    console.log(action);
    switch(action.type) {
        case UserTypes.USER_INITIALIZED:
            const user = action.user;
            return state.set('id', user.get('id'))
                .set('initialName', user.get('name'))
                .set('name', user.get('name'))
                .set('topics', user.get('topics'))
                .set('initialTopics', user.get('topics'));
        case UserTypes.USER_VALUE_CHANGED:
            return state.set(action.changedField, action.newValue);
        case UserTypes.USER_TOPIC_CHANGED:
            const indexOfUpdated =  state.get('topics').findIndex((topic) => {
                return topic.get('name') === action.name;
            });
            return state.updateIn(['topics', indexOfUpdated], (topic) => {
                return topic.set('selected', !topic.get('selected'));
            });

        case UserTypes.USER_CANCEL_CHANGES:
            return state.set('name', state.get('initialName')).set('topics', state.get('initialTopics'));
        case UserTypes.USER_SAVE_CHANGES:
            return state.saveChanges();
        default:
            return state;
    }
}