import React, {PureComponent} from 'react';
import Topic from "./Topic";
import Immutable from 'immutable';
import TopicListHoc from "../HOCS/TopicListHoc";

class TopicsList extends PureComponent {
    static defaultProps = {
        favoriteTopics: Immutable.List(),
        otherTopics: Immutable.List()
    };
    render() {
        const favoriteTopics = this.props.favoriteTopics.map(topic => {
            return <Topic id={topic.get('id')} name={topic.get('name')} key={topic.get('id')}/>
        });
        const otherTopics = this.props.otherTopics.map(topic => {
            return <Topic id={topic.get('id')} name={topic.get('name')} key={topic.get('id')}/>
        });
        return (
            <div className="topic-lists">
                <div className="topic-list">
                    <div className="topic-list__title">Favorite Topics</div>
                    {favoriteTopics}
                </div>
                <div className="topic-list">
                    <div className="topic-list__title">other Topics</div>
                    {otherTopics}
                </div>
            </div>
        )
    }
}

export default TopicListHoc(TopicsList);