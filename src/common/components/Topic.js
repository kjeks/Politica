import React, {PureComponent} from 'react';
import cx from 'classnames';

export default class Topic extends PureComponent {
    onTopicClick = () => {
        this.props.onTopicSelected(this.props.topic.get('id'))
    };
    createClassName = () => {
        return cx(
            'topic-list__item',
            this.props.selected && 'topic-list__item--selected'
            )
    };
    render () {
        return (
            <div onClick={this.onTopicClick} className={this.createClassName()}>{this.props.topic.get('name')}</div>
        )
    }
}