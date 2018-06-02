import React, {PureComponent} from 'react';

import Checkbox from "../../common/components/Checkbox";

export default class UserTopics extends PureComponent {
    render() {
        const topics = this.props.topics.map((topic, index)=> {
            return <Checkbox label={topic.get('name')}
                             onClick={()=> {this.props.userTopicChange(topic.get('name'))}}
                             selected={topic.get('selected')}
                             changed={topic.get('selected')!== this.props.initialTopics.get(index).get('selected')}
                             key={index}
            />
        });

        return <div className="user-topics user-topics--small">
            <div className="user-topics__title">My topics</div>
            {topics.toList()}
            </div>
    }
}