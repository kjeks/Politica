import React, {PureComponent} from 'react';

export default class Topic extends PureComponent {
    onTopicClick () {
        this.props.onTopicClick(this.props.id)
    }
    render () {
        return (
            <div onClick={this.onTopicClick}>{this.props.name}</div>
        )
    }
}