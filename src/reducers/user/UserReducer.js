import UserTypes from "../../constants/actionTypes/UserTypes";
import Immutable from 'immutable';
const initialState = null;

export default function (state = initialState, action) {
    console.log(action);
    switch(action.type) {
        case UserTypes.USER_INITIALIZED:
            return action.user;
        case UserTypes.USER_VALUE_CHANGED:
            return state.set(action.changedField, action.newValue);
        case UserTypes.USER_TOPIC_CHANGED:
            return state.set('topics', Immutable.List(action.newValues));
        default:
            return state;
    }
}