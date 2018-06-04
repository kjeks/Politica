import React, {PureComponent} from 'react';
import Topic from "./Topic";
import Immutable from 'immutable';
import TopicListHoc from "../HOCS/TopicListHoc";
import CollapsibleComponent from "./CollapsibleComponent";

class TopicsList extends PureComponent {
    static defaultProps = {
        favoriteTopics: Immutable.List(),
        otherTopics: Immutable.List()
    };
    render() {

        const favoriteTopics = this.props.favoriteTopics.map(topic => {
            return <Topic
                topic={topic}
                onTopicSelected={this.props.onTopicSelected}
                selected={topic.get('id') === this.props.selectedTopicId}
                key={topic.get('id')}
            />
        });

        const otherTopics = this.props.otherTopics.map(topic => {
            return <Topic
                topic={topic}
                onTopicSelected={this.props.onTopicSelected}
                selected={topic.get('id') === this.props.selectedTopicId}
                key={topic.get('id')}
            />
        });
        return (
            <div className="topic-lists">
                <CollapsibleComponent title='Favorite Topics' className="topic-list">
                    <div className="topic-list__items">
                        {favoriteTopics}
                    </div>
                </CollapsibleComponent>
                <CollapsibleComponent title="Other Topics" className="topic-list">
                    <div className="topic-list__items">
                        {otherTopics}
                    </div>
                </CollapsibleComponent>
            </div>
        )
    }
}

export default TopicListHoc(TopicsList);