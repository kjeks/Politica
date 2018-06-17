import Reducer from '../ActiveDiscussionReducer';
import Immutable from "immutable";
import DiscussionActionTypes from '../../DiscussionActionTypes';
import PushActionTypes from "../../../PushActionTypes";

const INITIAL_STATE = Immutable.Map({
    againstDebaters: null,
    forDebaters: null,
    maxLevel: null,
    minLevel: null,
    questionText: "",
    selectedTopicId: 2,
    spectatorsAllowed: false,
    discussionName: null,
    messages: Immutable.List()
});
const data = {
    againstDebaters: 1,
    forDebaters: 1,
    maxLevel: 100,
    minLevel: 1,
    discussionName: "gender issues",
    questionText: "some issue",
    selectedTopicId: 3,
    spectatorsAllowed: true
};

describe('on ACTIVE_DISCUSSION_DATA_RECEIVED', ()=> {
    actionChangesFieldTests('againstDebaters');
    actionChangesFieldTests('forDebaters');
    actionChangesFieldTests('maxLevel');
    actionChangesFieldTests('minLevel');
    actionChangesFieldTests('discussionName');
    actionChangesFieldTests('questionText');
    actionChangesFieldTests('selectedTopicId');
    actionChangesFieldTests('spectatorsAllowed');

    function actionChangesFieldTests(field) {
        const action = {type: DiscussionActionTypes.ACTIVE_DISCUSSION_DATA_RECEIVED, data: data};

        it(`set the ${field} t the received data.${field}`, ()=> {
            expect(INITIAL_STATE.get(field)).not.toEqual(data[field]);
            expect(Reducer(INITIAL_STATE, action).get(field)).toEqual(data[field]);
        })
    }
});
it('on PUSH_MESSAGE_RECEIVED, it should create a new message with received message text to the end of the message list', () => {
    const newMessage = "some new message";
    const action = {type: PushActionTypes.PUSH_MESSAGE_RECEIVED, message: newMessage};
    const messageNumber = INITIAL_STATE.get('messages').size;

    expect(messageNumber + 1).toEqual(Reducer(INITIAL_STATE, action).get('messages').size);
    expect(Reducer(INITIAL_STATE, action).get('messages').last().get('message')).toEqual(newMessage);
});



