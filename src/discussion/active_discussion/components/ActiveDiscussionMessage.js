import React, {PureComponent} from 'react';

export default class ActiveDiscussionMessage extends PureComponent {
    render () {
        return (
            <div className="chat-message">
                <div className="chat-message__user-name">{this.props.userName}:</div>
                <div className="chat-message__text">{this.props.text}</div>
            </div>
        )
    }
}