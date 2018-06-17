import React,{PureComponent} from 'react';

export default class ActiveDiscussionNewMessage extends PureComponent {
    onKeyPress = (e) => {
        if(e.key === "Enter") {
            this.props.onMessageSent(e.target.value);
        }
    };
    render () {
        return <input className="chat__message-input" placeholder="enter message" onKeyPress={this.onKeyPress}/>
    }
}