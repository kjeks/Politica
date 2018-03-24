import React, {PureComponent} from 'react';

import Checkbox from "../common/Checkbox";

export default class UserTopics extends PureComponent {
    render() {
        const topics = this.props.topics.map((topic, index)=> {
            return <Checkbox label={topic.name}
                             onClick={()=> {this.props.userTopicChange(topic.name)}}
                             selected={topic.selected}
                             changed={topic.hasChanged()}
                             key={index}
            />
        });

        return <div className="user-topics form-checkbox">{topics.toList()}</div>
    }
}