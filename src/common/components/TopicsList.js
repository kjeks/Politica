import React, {PureComponent} from 'react';
import Immutable from 'immutable';
import TopicListHoc from "../HOCS/TopicListHoc";
import TopicList from "./TopicList";

class TopicsList extends PureComponent {
    static defaultProps = {
        favoriteTopics: Immutable.List(),
        otherTopics: Immutable.List()
    };
    render() {
        return (
            <div className="topic-lists">
                <TopicList topicList={this.props.favoriteTopics}
                           name="favorite Topics"
                           onTopicSelected={this.props.onTopicSelected}
                           selectedTopicId={this.props.selectedTopicId}
                />
                <TopicList topicList={this.props.otherTopics}
                           name="other Topics"
                           onTopicSelected={this.props.onTopicSelected}
                           selectedTopicId={this.props.selectedTopicId}
                />
            </div>
        )
    }
}

export default TopicListHoc(TopicsList);