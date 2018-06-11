import React, {Component} from 'react';
import {connect} from 'react-redux';
import DiscussionActions from "./CreateDiscussionActions";
import MainHeader from "../common/components/MainHeader";
import TopicsList from "../common/components/TopicsList";
import DiscussionConfig from './DiscussionConfig';
import Button from '../common/components/Button';

class CreateDiscussionContainer extends Component {
    onDiscussionCreated = () => {
        this.props.onDiscussionCreated(this.props.config)
    };

    render() {
        return (
            <div>
                <MainHeader title={'Create a new discussion'}/>
                <TopicsList
                    onTopicSelected={this.props.onTopicSelected}
                    selectedTopicId={this.props.selectedTopicId}
                />
                {this.props.selectedTopicId &&
                <span>
                    <DiscussionConfig
                        onChangeLevelRange={this.props.onChangeLevelRange}
                        onChangeNumberOfDebaters={this.props.onChangeNumberOfDebaters}
                        onQuestionTextChange={this.props.onQuestionTextChange}
                        onToggleSpectatorsAllowed={this.props.onToggleSpectatorsAllowed}
                        config={this.props.config}
                    />
                    <Button text="create discussion" className='new-discussion-button save' onClick={this.onDiscussionCreated}/>
                </span>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedTopicId: state.getIn(['CreateDiscussionReducer','selectedTopicId']),
        questionText: state.getIn(['CreateDiscussionReducer', 'questionText']),
        forDebaters: state.getIn(['CreateDiscussionReducer', 'forDebaters']),
        againstDebaters: state.getIn(['CreateDiscussionReducer', 'againstDebaters']),
        spectatorsAllowed: state.getIn(['CreateDiscussionReducer','spectatorsAllowed']),
        config: state.get('CreateDiscussionReducer')
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onTopicSelected: (id) => dispatch(DiscussionActions.onTopicSelected(id)),
        onChangeLevelRange: (newValue, type) => dispatch(DiscussionActions.onLevelRangeChange(newValue, type)),
        onQuestionTextChange: (event) => dispatch(DiscussionActions.onDiscussionTextChange(event.target.value)),
        onChangeNumberOfDebaters: (newValue, type) => dispatch(DiscussionActions.onNumberOfDebatersChange(newValue, type)),
        onToggleSpectatorsAllowed: () => dispatch(DiscussionActions.onToggleSpectatorsAllowed()),
        onDiscussionCreated: (config) => dispatch(DiscussionActions.onDiscussionCreated(config))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDiscussionContainer)

