import UserTypes from "../../constants/actionTypes/UserTypes";
const initialState = null;

export default function (state = initialState, action) {
    console.log(action);
    switch(action.type) {
        case UserTypes.USER_INITIALIZED:
            return action.user;
        case UserTypes.USER_VALUE_CHANGED:
            return state.set(action.changedField, action.newValue);
        case UserTypes.USER_TOPIC_CHANGED:
            return state.updateIn(['topics', action.name], (topic)=> {
                return topic.set('selected', !topic.selected);
            });
        case UserTypes.USER_CANCEL_CHANGES:
            return state.restoreInitialValues();
        case UserTypes.USER_SAVE_CHANGES:
            return state.saveChanges();
        default:
            return state;
    }
}