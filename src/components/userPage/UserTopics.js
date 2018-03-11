import React, {PureComponent} from 'react';
import {CheckboxGroup, Checkbox} from 'react-checkbox-group';

export default class UserTopics extends PureComponent {
    topicChanged = (values) => {
        this.props.userTopicChange(values);
    };

    render() {
        return (
            <div className="user-topics">
                <CheckboxGroup onChange={this.topicChanged} checkboxDepth={2} value={this.props.topics}>
                    <div className='topic'>
                        <div className="topic-name">Politics:</div>
                        <Checkbox className="checkbox" value="politics"/></div>
                    <div className='topic'>
                        <div className="topic-name">economics:</div>
                        <Checkbox className="checkbox" value="economics"/></div>
                    <div className='topic'>
                        <div className="topic-name">gender issues:</div>
                        <Checkbox className="checkbox" value="gender issues"/></div>
                    <div className='topic'>
                        <div className="topic-name">philosophy:</div>
                        <Checkbox className="checkbox" value="philosophy"/></div>
                </CheckboxGroup>
            </div>
        )
    }
}