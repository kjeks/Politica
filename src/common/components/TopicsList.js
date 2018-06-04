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
                <TopicList topicList={this.props.favoriteTopics} name="favorite Topics"/>
                <TopicList topicList={this.props.otherTopics} name="other Topics"/>
            </div>
        )
    }
}

export default TopicListHoc(TopicsList);