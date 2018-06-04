import React, {PureComponent} from 'react';
import Topic from "./Topic";
import CollapsibleComponent from "./CollapsibleComponent";

export default class TopicList extends PureComponent {
    render () {
        const topicList = this.props.topicList.map(topic=> {
            return <Topic
                topic={topic}
                onTopicSelected={this.props.onTopicSelected}
                selected={topic.get('id') === this.props.selectedTopicId}
                key={topic.get('id')}
            />
        });
        return (
            <CollapsibleComponent title={this.props.name} className="topic-list">
                {topicList}
            </CollapsibleComponent>
        )
    }
}