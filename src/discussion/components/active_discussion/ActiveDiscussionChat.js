import React, {PureComponent} from 'react';
import ActiveDiscussionMessage from "./ActiveDiscussionMessage";

export default class ActiveDiscussionChat extends PureComponent {
    render () {
        const messages = this.props.messages.map((message, index) => {
            return <ActiveDiscussionMessage key={index} text={message.get('message')} userName={message.get('userName')}/>
        });

        return <div>{messages}</div>
    }
}